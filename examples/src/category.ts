import { Doc } from '../../src/types'

export const category: Doc = {
  head: {
    title: 'Illustrating the category attribute',
    dateCreated: 'Mon, 31 Oct 2005 19:23:00 GMT',
  },
  body: [
    {
      text: 'The Mets are the best team in baseball.',
      category: ['/Philosophy/Baseball/Mets', '/Tourism/New York'],
      created: 'Mon, 31 Oct 2005 18:21:33 GMT',
    },
  ],
}
