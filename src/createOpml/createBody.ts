import xml from 'xml'
import { Body, OutlineObject } from '../types'

// export function serializeAttr<T extends string | number | Date | null | JsonArray | JsonMap>(
//   attr: T,
// ): OutlineXmlAttr<T>

// export function serializeAttr<T extends string>(attr: T): T

// export function serializeAttr<T extends null>(attr: T): null

// export function serializeAttr<T extends number>(attr: T): string

// export function serializeAttr<T extends true>(attr: T): 'true'

// export function serializeAttr<T extends false>(attr: T): 'false'

// export function serializeAttr<T extends Date>(attr: T): string

// export function serializeAttr<T extends JsonArray>(attr: T): string

// export function serializeAttr<T extends undefined>(attr: T): ''

// export function serializeAttr<
//   T extends string | null | number | boolean | Date | JsonArray | undefined
// >(attr: T): T | string | null | 'true' | 'false' | never {
//   if (typeof attr === 'string') {
//     return attr
//   }
//   if (attr === null) {
//     return null
//   }
//   if (typeof attr === 'number') {
//     return attr.toString()
//   }
//   if (typeof attr === 'boolean') {
//     return attr ? 'true' : 'false'
//   }
//   if (attr instanceof Date) {
//     return attr.toUTCString()
//   }
//   if (Array.isArray(attr)) {
//     return attr.join(',')
//   }
//   if (typeof attr === 'undefined') {
//     return ''
//   }
//   throw new Error(`Cannot serialize unknown value: ${attr}`)
// }

// export const serializeAttrs = <T>(
//   attrs: OutlineWithoutChildren<T>,
// ): OutlineXmlAttrs<OutlineWithoutChildren<T>> =>
//   Object.entries(attrs).reduce(
//     (serializedAttrs, [key, value]) => ({
//       ...serializedAttrs,
//       [key]: serializeAttr(value),
//     }),
//     {} as OutlineXmlAttrs<OutlineWithoutChildren<T>>,
//   )

export const convertStringChildren = <T extends object>(children?: Body<T>): OutlineObject<T>[] =>
  children
    ? children.map(child =>
        typeof child === 'string'
          ? ({ text: child as string } as OutlineObject<T>)
          : (child as OutlineObject<T>),
      )
    : []

export type XmlOutline<T extends object> = {
  outline: (XmlOutline<T> | { _attr: Omit<OutlineObject<T>, 'children'> })[]
}

export const createOutlines = <T extends object>(body?: Body<T>): XmlOutline<T>[] =>
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  convertStringChildren(body).map(
    <T extends object>({ children, ...attrs }: OutlineObject<T>): XmlOutline<T> => ({
      outline: [...createOutlines(children), { _attr: attrs }],
    }),
  )

export const createBody = <T extends object>(body?: Body<T>): string =>
  xml({ body: createOutlines(body) })
