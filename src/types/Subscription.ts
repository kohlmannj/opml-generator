import { Outline } from './Outline'

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
  /** This node can never have any children. */
  children?: never
}

/**
 * @see http://dev.opml.org/spec2.html#subscriptionLists
 */
export type Subscription = Outline<SubscriptionAttrs>
