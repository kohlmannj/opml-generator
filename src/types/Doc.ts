import { Head } from './Head'
import { Body } from './Outline'

export interface Doc<T extends object = {}> {
  head?: Head
  body?: Body<T>
}
