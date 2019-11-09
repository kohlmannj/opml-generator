import { Outline } from './Outline'

export interface LinkAttrs {
  type: 'link'
  url: string
  children?: never
}

export type Link = Outline<LinkAttrs>
