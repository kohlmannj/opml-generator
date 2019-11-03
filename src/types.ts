/** @ses https://github.com/microsoft/TypeScript/issues/1897#issuecomment-338650717 */
export type AnyJson = boolean | number | string | null | JsonArray | JsonMap
export interface JsonMap {
  [key: string]: AnyJson
}
export type JsonArray = Array<AnyJson>

/** @see https://github.com/Microsoft/TypeScript/issues/19244#issuecomment-337552457 */
export type Stringified<T> = string &
  {
    [P in keyof T]: { '_ value': T[P] }
  }

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

export interface OutlineAttrs {
  /**
   * Every outline element must have at least a `text` attribute, which is what is displayed when
   * an [outliner](http://support.opml.org/basicOutlining) opens the OPML file. To omit the `text`
   * attribute would render the outline useless in an outliner. This is what
   * [the user would see](http://images.scripting.com/archiveScriptingCom/2005/10/14/badopml2.gif)
   * -- clearly an unacceptable user experience. Part of the purpose of producing OPML is to give
   * users the power to accumulate and organize related information in an outliner. This is as
   * important a use for OPML as data interchange.
   *
   * A missing `text` attribute in any outline element is an error.
   *
   * Text attributes may contain encoded HTML markup.
   */
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
   * An array or string of comma-separated slash-delimited category strings, in the format defined
   * by the [RSS 2.0 category](http://cyber.law.harvard.edu/rss/rss.html#ltcategorygtSubelementOfLtitemgt)
   * element. To represent a "tag," the category string should contain no slashes.
   *
   * Examples:
   * 1. `category="/Boston/Weather"`.
   * 2. `category="/Harvard/Berkman,/Politics"`.
   */
  category?: string | string[]
}

export type Body<T, CT = T> = readonly (Outline<T, CT> | string)[]

export interface WithChildren<T, CT> {
  /**
   * Zero or more sub-elements of the same type.
   */
  children?: Body<T, CT>
}

/**
 * @see http://dev.opml.org/spec2.html#whatIsAnLtoutlinegt
 */
export type Outline<T, CT = T, GCT = CT> = T & OutlineAttrs & WithChildren<CT, GCT>

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

/**
 * @see http://dev.opml.org/spec2.html#subscriptionLists
 */
export type Subscription<CT = never> = Outline<SubscriptionAttrs, CT>

export interface LinkAttrs {
  type: 'link'
  url: string
}

export type Link<CT = never> = Outline<LinkAttrs, CT>

export interface IncludeAttrs {
  type: 'include'
  url: string
}

/**
 * Similar to `Link`, but always points to an external outline file (OPML or `Document`).
 * @see http://dev.opml.org/spec2.html#inclusion
 */
export type Include<CT> = Outline<IncludeAttrs, CT>

export type OutlineWithoutChildren<T> = Omit<Outline<T, never>, 'children'>

export type InferOutline<T> = T extends Outline<infer U, infer V>
  ? Outline<U, V>
  : T extends string
  ? string
  : never

// export type ConcreteOutlineXmlAttr<
//   T extends string | number | boolean | Date | null | JsonArray | JsonMap
// > = T extends string
//   ? string
//   : T extends number
//   ? string
//   : T extends true
//   ? 'true'
//   : T extends false
//   ? 'false'
//   : T extends Date
//   ? string
//   : T extends null
//   ? null
//   : T extends JsonArray
//   ? string
//   : T extends JsonMap
//   ? Stringified<T>
//   : never

export type OutlineXmlAttr<T> = T extends infer U
  ? U extends string
    ? string
    : U extends number
    ? string
    : U extends true
    ? 'true'
    : U extends false
    ? 'false'
    : U extends Date
    ? string
    : U extends null
    ? null
    : U extends JsonArray
    ? string
    : U extends undefined
    ? ''
    : never
  : never

// type X = OutlineXmlAttr<null>

export type OutlineXmlAttrs<T> = Record<keyof T, OutlineXmlAttr<T[keyof T]>>

export interface OutlineXmlObject<T, CT = unknown, GCT = unknown> {
  outline: (OutlineXmlObject<CT, GCT> | { _attr: OutlineXmlAttrs<OutlineWithoutChildren<T>> })[]
}

export interface Doc<T = unknown, CT = T> {
  head?: Head
  body?: Body<T, CT>
}
