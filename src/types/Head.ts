/**
 * @see http://dev.opml.org/spec2.html#whatIsALtheadgt
 */
export interface Head {
  /**
   * A date-time, indicating when the document was created.
   */
  dateCreated?: Date | string
  /**
   * A date-time, indicating when the document was last modified.
   */
  dateModified?: Date | string
  /**
   * The http address of documentation for the format used in the OPML file. It's probably a
   * pointer to this page for people who might stumble across the file on a web server 25 years
   * from now and wonder what it is.
   */
  docs?: string
  /**
   * A comma-separated list of line numbers that are expanded. The line numbers in the list tell
   * you which headlines to expand. The order is important. For each element in the list, X,
   * starting at the first summit, navigate flatdown X times and expand. Repeat for each element
   * in the list.
   */
  expansionState?: number[] | string
  /**
   * The email address of the owner of the document.
   */
  ownerEmail?: string
  /**
   * The http address of a web page that contains information that allows a human reader to
   * communicate with the author of the document via email or other means. It also may be used to
   * identify the author. No two authors have the same `ownerId`.
   */
  ownerId?: string
  /**
   * The owner of the document.
   */
  ownerName?: string
  /**
   * The title of the document.
   */
  title?: string
  /**
   * A number, saying which line of the outline is displayed on the top line of the window.
   * This number is calculated with the expansion state already applied.
   */
  vertScrollState?: number | string
  /**
   * The pixel location of the top edge of the window.
   */
  windowTop?: number | string
  /**
   * The pixel location of the left edge of the window.
   */
  windowLeft?: number | string
  /**
   * The pixel location of the bottom edge of the window.
   */
  windowBottom?: number | string
  /**
   * The pixel location of the right edge of the window.
   */
  windowRight?: number | string
}

export type HeadXmlObject = { [K in keyof Head]: string }
