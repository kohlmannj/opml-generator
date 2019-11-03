import xml from 'xml'
import { Head, HeadXmlObject } from '../types'

export const convertHead = (header: Head): HeadXmlObject[] =>
  Object.entries(header).reduce(
    (headTags, [key, rawValue]) => {
      let value: string
      if (Array.isArray(rawValue)) {
        value = rawValue.join(',')
      } else if (rawValue instanceof Date) {
        value = rawValue.toUTCString()
      } else if (typeof rawValue === 'number') {
        value = rawValue.toString()
      } else {
        value = rawValue
      }
      return [...headTags, { [key]: value }]
    },
    [] as HeadXmlObject[],
  )

export const createHead = (header: Head): string => xml({ head: convertHead(header) })
