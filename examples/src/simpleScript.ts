import { Doc } from '../../src/types'

/** @see http://hosting.opml.org/dave/spec/simpleScript.opml */
export const simpleScript: Doc = {
  head: {
    title: 'workspace.userlandsamples.doSomeUpstreaming',
    dateCreated: 'Mon, 11 Feb 2002 22:48:02 GMT',
    dateModified: 'Sun, 30 Oct 2005 03:30:17 GMT',
    ownerName: 'Dave Winer',
    ownerEmail: 'dwiner@yahoo.com',
    expansionState: [1, 2, 4],
    vertScrollState: 1,
    windowTop: 74,
    windowLeft: 41,
    windowBottom: 314,
    windowRight: 475,
  },
  body: [
    {
      text: 'Changes',
      isComment: true,
      children: [
        {
          text: '1/3/02; 4:54:25 PM by DW',
          children: ['Change "playlist" to "radio".'],
        },
        {
          text: '2/12/01; 1:49:33 PM by DW',
          children: ['Test upstreaming by sprinkling a few files in a nice new test folder.'],
        },
      ],
    },
    {
      text: 'on writetestfile (f, size)',
      children: [
        { text: 'file.surefilepath (f)', isBreakpoint: true },
        'file.writewholefile (f, string.filledstring ("x", size))',
      ],
    },
    'local (folder = user.radio.prefs.wwwfolder + "test\\largefiles\\")',
    {
      text: "for ch = 'a' to 'z'",
      children: ['writetestfile (folder + ch + ".html", random (1000, 16000))'],
    },
  ],
}
