import { createOpml, Head, Outline } from '.'
import { createDoc } from './createOpml'

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

const p: Outline<{ foo: 'bar' }, { foo: 'bar'; bar: 'baz' }> = {
  text: 'asdf',
  foo: 'bar',
  children: [{ text: 'foo', foo: 'bar', bar: 'baz' }],
}

const outlines = [
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

const doc1 = createDoc(head, [o, p])
const result1 = createOpml(doc1)
console.log(result1)

const doc2 = createDoc(head, outlines)
const result2 = createOpml(doc2)
console.log(result2)
