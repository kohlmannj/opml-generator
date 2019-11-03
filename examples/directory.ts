import { Doc, Link } from '../src/types'

/** @see http://hosting.opml.org/dave/spec/directory.opml */
export const directory: Doc<Link> = {
  head: {
    title: 'scriptingNewsDirectory.opml',
    dateCreated: 'Thu, 13 Oct 2005 15:34:07 GMT',
    dateModified: 'Tue, 25 Oct 2005 21:33:57 GMT',
    ownerName: 'Dave Winer',
    ownerEmail: 'dwiner@yahoo.com',
    expansionState: [],
    vertScrollState: 1,
    windowTop: 105,
    windowLeft: 466,
    windowBottom: 386,
    windowRight: 964,
  },
  body: [
    {
      text: 'Scripting News sites',
      created: 'Sun, 16 Oct 2005 05:56:10 GMT',
      type: 'link',
      url: 'http://hosting.opml.org/dave/mySites.opml',
    },
    {
      text: 'News.Com top 100 OPML',
      created: 'Tue, 25 Oct 2005 21:33:28 GMT',
      type: 'link',
      url: 'http://news.com.com/html/ne/blogs/CNETNewsBlog100.opml',
    },
    {
      text: 'BloggerCon III Blogroll',
      created: 'Mon, 24 Oct 2005 05:23:52 GMT',
      type: 'link',
      url: 'http://static.bloggercon.org/iii/blogroll.opml',
    },
    {
      text: 'TechCrunch reviews',
      type: 'link',
      url: 'http://hosting.opml.org/techcrunch.opml.org/TechCrunch.opml',
    },
    {
      text: "Tod Maffin's directory of Public Radio podcasts",
      type: 'link',
      url: 'http://todmaffin.com/radio.opml',
    },
    {
      text: "Adam Curry's iPodder.org directory",
      type: 'link',
      url: 'http://homepage.mac.com/dailysourcecode/DSC/ipodderDirectory.opml',
    },
    {
      text: 'Memeorandum',
      created: 'Thu, 13 Oct 2005 15:19:05 GMT',
      type: 'link',
      url: 'http://tech.memeorandum.com/index.opml',
    },
    {
      text: 'DaveNet archive',
      created: 'Wed, 12 Oct 2005 01:39:56 GMT',
      type: 'link',
      url: 'http://davenet.opml.org/index.opml',
    },
  ],
}
