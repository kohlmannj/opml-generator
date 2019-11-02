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
export type Outline<Attrs, ChildAttrs = unknown> = Readonly<Attrs> &
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
    outline?: readonly Outline<ChildAttrs, unknown>[]
  }>

export interface SubscriptionAttrs {
  /** The top-level description element from the feed. */
  description?: string
  htmlUrl?: string
  language?: string
  title?: string
  type: 'rss'
  /**
   * Varies depending on the version of RSS that's being supplied. It was invented
   * at a time when we thought there might be some processors that only handled certain
   * versions, but that hasn't turned out to be a major issue. The values it can have are:
   *
   * - `"RSS2"` for RSS 2.0
   * - `"RSS1"` for RSS 1.0
   * - `"RSS"` for 0.91, 0.92 or 2.0
   * - `"scriptingNews"` for scriptingNews format
   *
   * There are no known values for Atom feeds, but they certainly could be provided.
   */
  version?: 'RSS2' | 'RSS1' | 'RSS' | 'scriptingNews'
  /** The http address of the feed. */
  xmlUrl: string
}

export type Subscription<ChildT = unknown> = Outline<SubscriptionAttrs, ChildT>

/**
 * A possibly multiple-level list of subscriptions to feeds.
 * @see http://dev.opml.org/spec2.html#subscriptionLists
 */
export type SubscriptionList = Subscription[]

export interface LinkAttrs {
  type: 'link'
  url: string
}

export type Link<ChildT> = Outline<LinkAttrs, ChildT>

export interface InclusionAttrs {
  type: 'inclusion'
  url: string
}

/**
 * @see http://dev.opml.org/spec2.html#inclusion
 */
export type Inclusion<ChildT> = Outline<InclusionAttrs, ChildT>

export type XmlOutline<T, ChildT = unknown> = {
  outline: (XmlOutline<ChildT, unknown> | { _attr: Omit<Outline<T, ChildT>, 'outline'> })[]
}

export interface Opml<O extends Outline<T, ChildT>, T = unknown, ChildT = T> {
  head: Header
  body: { outline: O[] }
}
