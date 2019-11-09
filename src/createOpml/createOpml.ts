/**
 * Created by azu on 2014/01/18.
 * LICENSE : MIT
 * @see https://github.com/azu/opml-generator
 */

import { createBody } from './createBody'
import { createHead } from './createHead'
import { Head } from '../types/Head'
import { Doc } from '../types/Doc'
import { Body } from '../types'

// export function createOpml<T, CT>(body: Body<T, CT>): string

export function createDoc<T extends object>(head: Head | undefined, body: Body<T>): Doc<T> {
  return { head, body }
}

export function createOpml<T extends object>(head: Head | undefined, body: Body<T>): string

export function createOpml<T extends object>(doc: Doc<T>): string

export function createOpml<T extends object>(
  headOrDoc: Doc<T> | Head | undefined,
  bodyArg?: Body<T>,
): string {
  let head: Head = {}
  if (headOrDoc) {
    if ('head' in headOrDoc && headOrDoc.head) {
      head = headOrDoc.head
    } else {
      head = headOrDoc as Head
    }
  }

  let body: Body<T> = []
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
