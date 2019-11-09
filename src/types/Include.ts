import { Outline } from './Outline'

export interface IncludeAttrs {
  type: 'include'
  url: string
  children?: never
}

/**
 * Similar to `Link`, but always points to an external outline file (OPML or `Document`).
 * @see http://dev.opml.org/spec2.html#inclusion
 */
export type Include = Outline<IncludeAttrs>
