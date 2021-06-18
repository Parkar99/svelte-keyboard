export enum KeyLength {
  Normal,
  Medium,
  Long,
}

export type Key = {
  normal: Keys
  shift?: Keys
  altGraph?: Keys
  location?: number
  displayText: string
  icon: boolean
  displayShift: boolean
  displayAltGraph: boolean
  pressed?: boolean
}

export type Keys =
  | 'F1'
  | 'F2'
  | 'F3'
  | 'F4'
  | 'F5'
  | 'F6'
  | 'F7'
  | 'F8'
  | 'F9'
  | 'F10'
  | 'F11'
  | 'F12'
  | 'Escape'
  | '1'
  | '!'
  | '2'
  | '"'
  | '3'
  | '£'
  | '4'
  | '$'
  | '€'
  | '5'
  | '%'
  | '6'
  | '^'
  | '7'
  | '&'
  | '8'
  | '*'
  | '9'
  | '('
  | '0'
  | ')'
  | '-'
  | '_'
  | '='
  | '+'
  | 'Backspace'
  | 'Delete'
  | 'Tab'
  | 'q'
  | 'Q'
  | 'w'
  | 'W'
  | 'e'
  | 'E'
  | 'r'
  | 'R'
  | 't'
  | 'T'
  | 'y'
  | 'Y'
  | 'u'
  | 'U'
  | 'i'
  | 'I'
  | 'o'
  | 'O'
  | 'p'
  | 'P'
  | '['
  | '{'
  | ']'
  | '}'
  | 'Enter'
  | 'Home'
  | 'End'
  | 'a'
  | 'A'
  | 's'
  | 'S'
  | 'd'
  | 'D'
  | 'f'
  | 'F'
  | 'g'
  | 'G'
  | 'h'
  | 'H'
  | 'j'
  | 'J'
  | 'k'
  | 'K'
  | 'l'
  | 'L'
  | ';'
  | ':'
  | "'"
  | '@'
  | '#'
  | '~'
  | '\\'
  | '|'
  | 'z'
  | 'Z'
  | 'x'
  | 'X'
  | 'c'
  | 'C'
  | 'v'
  | 'V'
  | 'b'
  | 'B'
  | 'n'
  | 'N'
  | 'm'
  | 'M'
  | ','
  | '<'
  | '.'
  | '>'
  | '/'
  | '?'
  | '`'
  | '¬'
  | 'Shift'
  | 'Control'
  | 'Meta'
  | 'Alt'
  | ' '
  | 'AltGraph'
  | 'PageUp'
  | 'ArrowUp'
  | 'PageDown'
  | 'ArrowLeft'
  | 'ArrowDown'
  | 'ArrowRight'

export const keyboardLayout: Key[][] = [
  [
    // First row
    { normal: 'F1', displayText: 'F1', icon: false, displayShift: false, displayAltGraph: false },
    { normal: 'F2', displayText: 'F2', icon: false, displayShift: false, displayAltGraph: false },
    { normal: 'F3', displayText: 'F3', icon: false, displayShift: false, displayAltGraph: false },
    { normal: 'F4', displayText: 'F4', icon: false, displayShift: false, displayAltGraph: false },
    { normal: 'F5', displayText: 'F5', icon: false, displayShift: false, displayAltGraph: false },
    { normal: 'F6', displayText: 'F6', icon: false, displayShift: false, displayAltGraph: false },
    { normal: 'F7', displayText: 'F7', icon: false, displayShift: false, displayAltGraph: false },
    { normal: 'F8', displayText: 'F8', icon: false, displayShift: false, displayAltGraph: false },
    { normal: 'F9', displayText: 'F9', icon: false, displayShift: false, displayAltGraph: false },
    { normal: 'F10', displayText: 'F10', icon: false, displayShift: false, displayAltGraph: false },
    { normal: 'F11', displayText: 'F11', icon: false, displayShift: false, displayAltGraph: false },
    { normal: 'F12', displayText: 'F12', icon: false, displayShift: false, displayAltGraph: false },
  ],
  // Second row
  [
    {
      normal: 'Escape',
      displayText: 'Esc',
      icon: false,
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: '1',
      displayText: '1',
      icon: false,
      shift: '!',
      displayShift: true,
      displayAltGraph: false,
    },
    {
      normal: '2',
      displayText: '2',
      icon: false,
      shift: '"',
      displayShift: true,
      displayAltGraph: false,
    },
    {
      normal: '3',
      displayText: '3',
      icon: false,
      shift: '£',
      displayShift: true,
      displayAltGraph: false,
    },
    {
      normal: '4',
      displayText: '4',
      icon: false,
      shift: '$',
      altGraph: '€',
      displayShift: true,
      displayAltGraph: false,
    },
    {
      normal: '5',
      displayText: '5',
      icon: false,
      shift: '%',
      displayShift: true,
      displayAltGraph: false,
    },
    {
      normal: '6',
      displayText: '6',
      icon: false,
      shift: '^',
      displayShift: true,
      displayAltGraph: false,
    },
    {
      normal: '7',
      displayText: '7',
      icon: false,
      shift: '&',
      displayShift: true,
      displayAltGraph: false,
    },
    {
      normal: '8',
      displayText: '8',
      icon: false,
      shift: '*',
      displayShift: true,
      displayAltGraph: false,
    },
    {
      normal: '9',
      displayText: '9',
      icon: false,
      shift: '(',
      displayShift: true,
      displayAltGraph: false,
    },
    {
      normal: '0',
      displayText: '0',
      icon: false,
      shift: ')',
      displayShift: true,
      displayAltGraph: false,
    },
    {
      normal: '-',
      displayText: '-',
      icon: false,
      shift: '_',
      displayShift: true,
      displayAltGraph: false,
    },
    {
      normal: '=',
      displayText: '=',
      icon: false,
      shift: '+',
      displayShift: true,
      displayAltGraph: false,
    },
    {
      normal: 'Backspace',
      displayText: 'keyboard_backspace',
      icon: true,
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'Delete',
      displayText: 'Delete',
      icon: false,
      displayShift: false,
      displayAltGraph: false,
    },
  ],
  // Third row
  [
    {
      normal: 'Tab',
      displayText: 'keyboard_tab',
      icon: true,
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'q',
      displayText: 'Q',
      icon: false,
      shift: 'Q',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'w',
      displayText: 'W',
      icon: false,
      shift: 'W',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'e',
      displayText: 'E',
      icon: false,
      shift: 'E',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'r',
      displayText: 'R',
      icon: false,
      shift: 'R',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 't',
      displayText: 'T',
      icon: false,
      shift: 'T',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'y',
      displayText: 'Y',
      icon: false,
      shift: 'Y',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'u',
      displayText: 'U',
      icon: false,
      shift: 'U',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'i',
      displayText: 'I',
      icon: false,
      shift: 'I',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'o',
      displayText: 'O',
      icon: false,
      shift: 'O',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'p',
      displayText: 'P',
      icon: false,
      shift: 'P',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: '[',
      displayText: '[',
      icon: false,
      shift: '{',
      displayShift: true,
      displayAltGraph: false,
    },
    {
      normal: ']',
      displayText: ']',
      icon: false,
      shift: '}',
      displayShift: true,
      displayAltGraph: false,
    },
    {
      normal: 'Enter',
      displayText: 'keyboard_return',
      icon: true,
      displayShift: false,
      displayAltGraph: false,
    },
  ],
  // Forth row
  [
    {
      normal: 'Home',
      displayText: 'Home',
      icon: false,
      displayShift: false,
      displayAltGraph: false,
    },
    { normal: 'End', displayText: 'End', icon: false, displayShift: false, displayAltGraph: false },
    {
      normal: 'a',
      displayText: 'A',
      icon: false,
      shift: 'A',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 's',
      displayText: 'S',
      icon: false,
      shift: 'S',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'd',
      displayText: 'D',
      icon: false,
      shift: 'D',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'f',
      displayText: 'F',
      icon: false,
      shift: 'F',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'g',
      displayText: 'G',
      icon: false,
      shift: 'G',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'h',
      displayText: 'H',
      icon: false,
      shift: 'H',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'j',
      displayText: 'J',
      icon: false,
      shift: 'J',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'k',
      displayText: 'K',
      icon: false,
      shift: 'K',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'l',
      displayText: 'L',
      icon: false,
      shift: 'L',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: ';',
      displayText: ';',
      icon: false,
      shift: ':',
      displayShift: true,
      displayAltGraph: false,
    },
    {
      normal: "'",
      displayText: "'",
      icon: false,
      shift: '@',
      displayShift: true,
      displayAltGraph: false,
    },
    {
      normal: '#',
      displayText: '#',
      icon: false,
      shift: '~',
      displayShift: true,
      displayAltGraph: false,
    },
  ],
  // Fifth row
  [
    {
      normal: 'Shift',
      displayText: 'north',
      icon: true,
      location: 1 /* KeyboardEvent.DOM_KEY_LOCATION_LEFT */,
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: '\\',
      displayText: '\\',
      icon: false,
      shift: '|',
      displayShift: true,
      displayAltGraph: false,
    },
    {
      normal: 'z',
      displayText: 'Z',
      icon: false,
      shift: 'Z',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'x',
      displayText: 'X',
      icon: false,
      shift: 'X',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'c',
      displayText: 'C',
      icon: false,
      shift: 'C',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'v',
      displayText: 'V',
      icon: false,
      shift: 'V',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'b',
      displayText: 'B',
      icon: false,
      shift: 'B',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'n',
      displayText: 'N',
      icon: false,
      shift: 'N',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'm',
      displayText: 'M',
      icon: false,
      shift: 'M',
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: ',',
      displayText: ',',
      icon: false,
      shift: '<',
      displayShift: true,
      displayAltGraph: false,
    },
    {
      normal: '.',
      displayText: '.',
      icon: false,
      shift: '>',
      displayShift: true,
      displayAltGraph: false,
    },
    {
      normal: '/',
      displayText: '/',
      icon: false,
      shift: '?',
      displayShift: true,
      displayAltGraph: false,
    },
    {
      normal: 'Shift',
      displayText: 'north',
      icon: true,
      location: 2 /* KeyboardEvent.DOM_KEY_LOCATION_RIGHT */,
      displayShift: false,
      displayAltGraph: false,
    },
  ],
  // Sixth row
  [
    {
      normal: 'Control',
      displayText: 'Ctrl',
      icon: false,
      location: 1 /* KeyboardEvent.DOM_KEY_LOCATION_LEFT */,
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'Meta',
      displayText: 'grid_view',
      icon: true,
      displayShift: false,
      displayAltGraph: false,
    },
    { normal: 'Alt', displayText: 'Alt', icon: false, displayShift: false, displayAltGraph: false },
    { normal: ' ', displayText: ' ', icon: false, displayShift: false, displayAltGraph: false },
    {
      normal: 'AltGraph',
      displayText: 'Alt Gr',
      icon: false,
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: '`',
      displayText: '`',
      icon: false,
      shift: '¬',
      altGraph: '|',
      displayShift: true,
      displayAltGraph: true,
    },
    {
      normal: 'Control',
      displayText: 'Ctrl',
      icon: false,
      location: 2 /* KeyboardEvent.DOM_KEY_LOCATION_RIGHT */,
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'PageUp',
      displayText: 'PgUp',
      icon: false,
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'ArrowUp',
      displayText: 'keyboard_arrow_up',
      icon: true,
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'PageDown',
      displayText: 'PgDown',
      icon: false,
      displayShift: false,
      displayAltGraph: false,
    },
  ],
  // Seventh row
  [
    {
      normal: 'ArrowLeft',
      displayText: 'keyboard_arrow_left',
      icon: true,
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'ArrowDown',
      displayText: 'keyboard_arrow_down',
      icon: true,
      displayShift: false,
      displayAltGraph: false,
    },
    {
      normal: 'ArrowRight',
      displayText: 'keyboard_arrow_right',
      icon: true,
      displayShift: false,
      displayAltGraph: false,
    },
  ],
]
