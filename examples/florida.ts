import { Doc } from '../src/types'

/** @see http://hosting.opml.org/dave/florida.opml */
export const florida: Doc = {
  head: {
    title: 'florida.opml',
    dateCreated: 'Sun, 21 Aug 2005 03:11:56 GMT',
    dateModified: 'Mon, 17 Jul 2006 03:03:23 GMT',
    ownerName: 'Dave Winer',
    ownerId: 'http://blogs.opml.org/mail/dave',
    expansionState: [2, 4, 11],
    vertScrollState: 1,
    windowTop: 111,
    windowLeft: 491,
    windowBottom: 554,
    windowRight: 1037,
  },
  body: [
    'Miami',
    {
      text: 'Jacksonville',
      children: [
        'Amelia Island',
        { text: 'St Augustine', children: ['Anastasia Island', 'Crescent Beach'] },
      ],
    },
    'Daytona Beach',
    { text: 'Winter Park', created: 'Sun, 21 Aug 2005 03:11:01 GMT' },
    { text: 'Fort Lauderdale', created: 'Sun, 21 Aug 2005 03:11:14 GMT' },
    { text: 'Boca Raton', created: 'Sun, 21 Aug 2005 03:11:20 GMT' },
    {
      text: 'Tallahassee',
      created: 'Sun, 21 Aug 2005 03:11:29 GMT',
      children: [{ text: 'Havana', created: 'Sun, 21 Aug 2005 03:11:50 GMT' }],
    },
    'Orlando',
    'Tampa',
    'Gainesville',
    'Talahassee',
    'Key West',
  ],
}
