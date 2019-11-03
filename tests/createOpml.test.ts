/**
 * Created by azu on 2014/01/18.
 * LICENSE : MIT
 * @see https://github.com/azu/opml-generator
 */

import { createOpml, createHead, createBody, Head, Subscription } from '../src'

describe('createOpml', () => {
  it('should concat header + outlines', () => {
    const head: Head = {
      title: 'title-text',
      dateCreated: new Date(2014, 2, 9),
      ownerName: 'azu',
    }
    const headXml = createHead(head)
    const body: Subscription[] = [
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
    const bodyXml = createBody(body)
    expect(createOpml(head, body)).toBe(
      `<?xml version="1.0" encoding="UTF-8"?><opml version="2.0">${headXml}${bodyXml}</opml>`,
    )
  })
})

describe('header', () => {
  it('should create <head /> string', () => {
    const results = createHead({
      title: 'title-text',
      dateCreated: new Date('Sun, 09 Mar 2014 08:00:00 GMT'),
      ownerName: 'azu',
    })
    expect(results).toBe(
      '<head><title>title-text</title><dateCreated>Sun, 09 Mar 2014 08:00:00 GMT</dateCreated><ownerName>azu</ownerName></head>',
    )
  })
})

describe('outline', () => {
  it('should create <outline /> string', () => {
    const results = createBody([
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
    ])
    expect(results).toEqual(
      '<body><outline text="txt" title="title-text" type="rss" xmlUrl="http://example.com/rss" htmlUrl="http://example.com/"></outline><outline text="txt" title="title-text" type="rss" xmlUrl="http://example.com/rss" htmlUrl="http://example.com/"></outline></body>',
    )
  })

  it('should create <outline /> string with child outlines', () => {
    const results = createBody([
      {
        text: 'one',
        children: [{ text: 'childofone' }],
      },
      {
        text: 'two',
      },
    ])
    expect(results).toBe(
      '<body><outline text="one"><outline text="childofone"></outline></outline><outline text="two"></outline></body>',
    )
  })
})
