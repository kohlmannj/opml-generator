import { Doc } from '../../src'
import { florida } from './florida'

/** @see http://hosting.opml.org/dave/spec/placesLived.opml */
export const placesLived: Doc = {
  head: {
    title: 'placesLived.opml',
    dateCreated: 'Mon, 27 Feb 2006 12:09:48 GMT',
    dateModified: 'Mon, 27 Feb 2006 12:11:44 GMT',
    ownerName: 'Dave Winer',
    ownerId: 'http://www.opml.org/profiles/sendMail?usernum=1',
    expansionState: [1, 2, 5, 10, 13, 15],
    vertScrollState: 1,
    windowTop: 242,
    windowLeft: 329,
    windowBottom: 665,
    windowRight: 547,
  },
  body: [
    {
      text: "Places I've lived",
      children: [
        { text: 'Boston', children: ['Cambridge', 'West Newton'] },
        { text: 'Bay Area', children: ['Mountain View', 'Los Gatos', 'Palo Alto', 'Woodside'] },
        { text: 'New Orleans', children: ['Uptown', 'Metairie'] },
        { text: 'Wisconsin', children: ['Madison'] },
        { text: 'Florida', children: florida.body },
        { text: 'New York', children: ['Jackson Heights', 'Flushing', 'The Bronx'] },
      ],
    },
  ],
}
