/**
 * Created by azu on 2014/01/18.
 * LICENSE : MIT
 * @see https://github.com/azu/opml-generator
 */

/* eslint-disable no-underscore-dangle */
import xml from 'xml'
import { Outline, Header, XmlOutline } from './types'

export function createOutlines<Attrs, ChildAttrs>(
  outlines: readonly Outline<Attrs, ChildAttrs>[],
): XmlOutline<Attrs, ChildAttrs>[] {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return outlines.map(outline => createOutline(outline))
}

export function createOutline<Attrs, ChildAttrs>({
  outline,
  ..._attr
}: Outline<Attrs, ChildAttrs>): XmlOutline<Attrs, ChildAttrs> {
  return {
    outline: [...(outline ? createOutlines(outline) : []), { _attr }],
  }
}

export function createBody<Attrs, ChildAttrs>(outlines: Outline<Attrs, ChildAttrs>[]): string {
  return xml({ body: createOutlines(outlines) })
}

export function createHeader(header: Header): string {
  const head = (Object.keys(header) as (keyof Header)[]).reduce(
    (headTags, key) => {
      let value = header[key as keyof Header]

      if (key === 'expansionState' && Array.isArray(value)) {
        value = value.join(',')
      } else if (value instanceof Date) {
        value = value.toUTCString()
      }

      return [...headTags, { [key]: value instanceof Date ? value.toUTCString() : value }]
    },
    [] as unknown[],
  )

  return xml({ head })
}
/**
 *
 * @param header
 * @param outlines
 */
export default function opmlGenerator<Attrs, ChildAttrs>(
  header: Header,
  outlines: Outline<Attrs, ChildAttrs>[],
): string {
  const headerXML = createHeader(header)
  const outlinesXML = createBody(outlines)
  return `<?xml version="1.0" encoding="UTF-8"?><opml version="2.0">${headerXML}${outlinesXML}</opml>`
}
