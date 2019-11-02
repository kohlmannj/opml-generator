/**
 * @see http://dev.opml.org/spec2.html#whatIsALtheadgt
 */
export interface Header {
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
  expansionState?: string | number[]
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
  vertScrollState?: number
  /**
   * The pixel location of the top edge of the window.
   */
  windowTop?: number
  /**
   * The pixel location of the left edge of the window.
   */
  windowLeft?: number
  /**
   * The pixel location of the bottom edge of the window.
   */
  windowBottom?: number
  /**
   * The pixel location of the right edge of the window.
   */
  windowRight?: number
}

/**
 * @see http://dev.opml.org/spec2.html#whatIsAnLtoutlinegt
 */
export type Outline<T> = Readonly<T> &
  Readonly<{
    text: string
    type?: string
    /**
     * A string, either `"true"` or `"false"`, indicating whether the outline is commented or not.
     * By convention if an outline is commented, all subordinate outlines are considered to also
     * be commented. If it's not present, the value is `false`.
     */
    isComment?: boolean | 'true' | 'false'
    /**
     * A string, either "true" or "false", indicating whether a breakpoint is set on this outline.
     * This attribute is mainly necessary for outlines used to edit scripts. If it's not present,
     * the value is `false`.
     */
    isBreakpoint?: boolean | 'true' | 'false'
    /**
     * The date-time that the outline node was created.
     */
    created?: Date | string
    /**
     * A string of comma-separated slash-delimited category strings, in the format defined by the
     * [RSS 2.0 category](http://cyber.law.harvard.edu/rss/rss.html#ltcategorygtSubelementOfLtitemgt)
     * element. To represent a "tag," the category string should contain no slashes.
     *
     * Examples:
     * 1. `category="/Boston/Weather"`.
     * 2. `category="/Harvard/Berkman,/Politics"`.
     */
    category?: string | string[]
    /**
     * Zero or more sub-elements of the same type.
     */
    _children?: readonly Outline<T>[]
  }>

export type XmlOutline<T> = {
  outline: (XmlOutline<T> | { _attr: Omit<Outline<T>, '_children'> })[]
}
