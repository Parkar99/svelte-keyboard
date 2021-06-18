import type { Key } from './keyboard'

export const isKeyDown = (e: KeyboardEvent): boolean => e.type === 'keydown'

export const isLocationKey = (e: KeyboardEvent): boolean => e.key === 'Shift' || e.key === 'Control'

export const findKeyInList = (keyList: Key[][], key: string, location?: number): [number, number] | undefined => {
  for (let i = 0; i < keyList.length; i++) {
    const row = keyList[i]
    for (let j = 0; j < row.length; j++) {
      const k = row[j]
      if ((k.normal === key || k.shift === key || k.altGraph === key) && k.location === location) {
        return [i, j]
      }
    }
  }
}

export const isNormalKey = (e: Key) =>
  (e.normal === 'Control' && e.location === 2) ||
  (e.normal === 'Shift' && e.location === 1) ||
  (e.normal !== 'Shift' &&
    e.normal !== 'Control' &&
    e.normal !== 'Backspace' &&
    e.normal !== 'Enter' &&
    e.normal !== ' ' &&
    e.normal !== 'Tab')

export const isMediumKey = (e: Key) => e.normal === 'Tab' || e.normal === 'Backspace'

export const isFunctionKey = (e: Key) => e.normal.match(/^F\d+/)
