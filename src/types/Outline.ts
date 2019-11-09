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

export type Body<T extends object = {}> = readonly Outline<T>[]

export interface WithChildren<T extends object = {}> {
  /**
   * Zero or more sub-elements of the same type.
   */
  children?: Body<T>
}

/** @see https://stackoverflow.com/a/52991061 */
type RequiredLiteralKeys<T> = {
  [K in keyof T]-?: string extends K
    ? never
    : number extends K
    ? never
    : {} extends Pick<T, K>
    ? never
    : K
} extends { [_ in keyof T]-?: infer U }
  ? U extends keyof T
    ? U
    : never
  : never

export type OutlineObject<T extends object> = T & OutlineAttrs & WithChildren<T>

/**
 * @see http://dev.opml.org/spec2.html#whatIsAnLtoutlinegt
 */
export type Outline<T extends object = {}> = RequiredLiteralKeys<T> extends never
  ? OutlineObject<T> | string
  : OutlineObject<T>
