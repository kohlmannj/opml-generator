import { createDoc, createOpml, Head, Outline } from '.'
import { Subscription, OutlineObject } from './types'

const head: Head = {
  title: 'title-text',
  dateCreated: new Date(2014, 2, 9),
  ownerName: 'azu',
}

const o: Outline<{ foo: 'bar' }> = {
  text: 'asdf',
  foo: 'bar',
  children: [{ text: 'foo', foo: 'bar' }],
}

const p: Outline<{ foo: 'bar'; bar?: 'baz' }> = {
  text: 'asdf',
  foo: 'bar',
  children: [{ text: 'foo', foo: 'bar', bar: 'baz' }],
}

const q: Outline<{ foo: 'bar' }> = {
  text: 'asdf',
  foo: 'bar',
  children: [{ text: 'foo', foo: 'bar' }],
}

const outlines: Subscription[] = [
  {
    text: 'txt',
    title: 'title-text',
    type: 'rss',
    xmlUrl: 'http://example.com/rss',
    htmlUrl: 'http://example.com/',
  },
  {
    text: 'txt',
    title: 'title-text',
    type: 'rss',
    xmlUrl: 'http://example.com/rss',
    htmlUrl: 'http://example.com/',
  },
]

const body: OutlineObject<{ foo: 'bar'; bar?: 'baz' }>[] = [o, p, q]

const doc1 = createDoc(head, body)
const result1 = createOpml(doc1)
console.log(result1)

const doc2 = createDoc(head, outlines)
const result2 = createOpml(doc2)
console.log(result2)
