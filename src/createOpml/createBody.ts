import xml from 'xml'
import {
  Body,
  Outline,
  OutlineWithoutChildren,
  OutlineXmlAttrs,
  OutlineXmlObject,
  JsonArray,
  // ConcreteOutlineXmlAttr,
} from '../types'

// export function serializeAttr<T extends string | number | Date | null | JsonArray | JsonMap>(
//   attr: T,
// ): OutlineXmlAttr<T>

export function serializeAttr<T extends string>(attr: T): T

export function serializeAttr<T extends null>(attr: T): null

export function serializeAttr<T extends number>(attr: T): string

export function serializeAttr<T extends true>(attr: T): 'true'

export function serializeAttr<T extends false>(attr: T): 'false'

export function serializeAttr<T extends Date>(attr: T): string

export function serializeAttr<T extends JsonArray>(attr: T): string

export function serializeAttr<T extends undefined>(attr: T): ''

export function serializeAttr<
  T extends string | null | number | boolean | Date | JsonArray | undefined
>(attr: T): T | string | null | 'true' | 'false' | never {
  if (typeof attr === 'string') {
    return attr
  }
  if (attr === null) {
    return null
  }
  if (typeof attr === 'number') {
    return attr.toString()
  }
  if (typeof attr === 'boolean') {
    return attr ? 'true' : 'false'
  }
  if (attr instanceof Date) {
    return attr.toUTCString()
  }
  if (Array.isArray(attr)) {
    return attr.join(',')
  }
  if (typeof attr === 'undefined') {
    return ''
  }
  throw new Error(`Cannot serialize unknown value: ${attr}`)
}

export const serializeAttrs = <T>(
  attrs: OutlineWithoutChildren<T>,
): OutlineXmlAttrs<OutlineWithoutChildren<T>> =>
  Object.entries(attrs).reduce(
    (serializedAttrs, [key, value]) => ({
      ...serializedAttrs,
      [key]: serializeAttr(value),
    }),
    {} as OutlineXmlAttrs<OutlineWithoutChildren<T>>,
  )

export const convertStringChildren = <T, CT = unknown>(
  children?: Body<T, CT>,
): (Outline<T, CT> | Outline<{}, never>)[] =>
  children
    ? children.map(child =>
        typeof child === 'string' ? ({ text: child } as Outline<{}, never>) : child,
      )
    : []

export const createOutlines = <T, CT>(body?: Body<T, CT>): OutlineXmlObject<T | {}, CT | {}>[] =>
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  convertStringChildren(body).map(
    <T, CT>({
      children,
      ...attrs
    }: Outline<T, CT>): OutlineXmlObject<T, CT | {}, unknown | never> => ({
      outline: [...createOutlines(children), { _attr: serializeAttrs(attrs) }],
    }),
  )

export const createBody = <T, CT>(body?: Body<T, CT>): string => xml({ body: createOutlines(body) })
