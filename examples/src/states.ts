import { Doc } from '../../src/types'

/** @see http://hosting.opml.org/dave/spec/states.opml */
export const states: Doc = {
  head: {
    title: 'states.opml',
    dateCreated: 'Tue, 15 Mar 2005 16:35:45 GMT',
    dateModified: 'Thu, 14 Jul 2005 23:41:05 GMT',
    ownerName: 'Dave Winer',
    ownerEmail: 'dave@scripting.com',
    expansionState: [1, 6, 13, 16, 18, 20],
    vertScrollState: 1,
    windowTop: 106,
    windowLeft: 106,
    windowBottom: 558,
    windowRight: 479,
  },
  body: [
    {
      text: 'United States',
      children: [
        {
          text: 'Far West',
          children: [
            'Alaska',
            'California',
            'Hawaii',
            {
              text: 'Nevada',
              children: [
                { text: 'Reno', created: 'Tue, 12 Jul 2005 23:56:35 GMT' },
                { text: 'Las Vegas', created: 'Tue, 12 Jul 2005 23:56:37 GMT' },
                { text: 'Ely', created: 'Tue, 12 Jul 2005 23:56:39 GMT' },
                { text: 'Gerlach', created: 'Tue, 12 Jul 2005 23:56:47 GMT' },
              ],
            },
            'Oregon',
            'Washington',
          ],
        },
        {
          text: 'Great Plains',
          children: ['Kansas', 'Nebraska', 'North Dakota', 'Oklahoma', 'South Dakota'],
        },
        {
          text: 'Mid-Atlantic',
          children: ['Delaware', 'Maryland', 'New Jersey', 'New York', 'Pennsylvania'],
        },
        {
          text: 'Midwest',
          children: [
            'Illinois',
            'Indiana',
            'Iowa',
            'Kentucky',
            'Michigan',
            'Minnesota',
            'Missouri',
            'Ohio',
            'West Virginia',
            'Wisconsin',
          ],
        },
        {
          text: 'Mountains',
          children: ['Colorado', 'Idaho', 'Montana', 'Utah', 'Wyoming'],
        },
        {
          text: 'New England',
          children: [
            'Connecticut',
            'Maine',
            'Massachusetts',
            'New Hampshire',
            'Rhode Island',
            'Vermont',
          ],
        },
        {
          text: 'South',
          children: [
            'Alabama',
            'Arkansas',
            'Florida',
            'Georgia',
            'Louisiana',
            'Mississippi',
            'North Carolina',
            'South Carolina',
            'Tennessee',
            'Virginia',
          ],
        },
        {
          text: 'Southwest',
          children: ['Arizona', 'New Mexico', 'Texas'],
        },
      ],
    },
  ],
}
