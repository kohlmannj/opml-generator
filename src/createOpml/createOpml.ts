/**
 * Created by azu on 2014/01/18.
 * LICENSE : MIT
 * @see https://github.com/azu/opml-generator
 */

import { createBody } from './createBody'
import { createHead } from './createHead'
import { Doc, Head, Body } from '../types'

// export function createOpml<T, CT>(body: Body<T, CT>): string

export function createDoc<T, CT>(head: Head | undefined, body: Body<T, CT>): Doc<T, CT> {
  return { head, body }
}

export function createOpml<T, CT>(head: Head | undefined, body: Body<T, CT>): string

export function createOpml<T, CT>(doc: Doc<T, CT>): string

export function createOpml<T, CT>(
  headOrDoc: Doc<T, CT> | Head | undefined,
  bodyArg?: Body<T, CT>,
): string {
  let head: Head = {}
  if (headOrDoc) {
    if ('head' in headOrDoc && headOrDoc.head) {
      head = headOrDoc.head
    } else {
      head = headOrDoc as Head
    }
  }

  let body: Body<T, CT> = []
  if (headOrDoc && 'body' in headOrDoc && headOrDoc.body) {
    const { body: bodyProp } = headOrDoc
    /**
     * Combine `headOrDoc.body` with `bodyArg`
     */
    body = bodyArg ? [...bodyProp, ...bodyArg] : bodyProp
  } else if (bodyArg) {
    body = bodyArg
  }

  const headerXml = createHead(head)
  const bodyXml = createBody(body)
  return `<?xml version="1.0" encoding="UTF-8"?><opml version="2.0">${headerXml}${bodyXml}</opml>`
}
