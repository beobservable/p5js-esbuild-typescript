const NUMBER_KEY_CODES = [
  49, 50, 51, 52, 53,
  54, 55, 56, 57, 48,
]

const NUMBER_KEYS = [
  '1','2','3','4','5',
  '6','7','8','9','0',
]

const ALTED = {
  '¡': '1', '™': '2', '£': '3', '¢': '4', '∞': '5',
  '§': '6', '¶': '7', '•': '8', 'ª': '9', 'º': '0',
}

const SHIFTED = {
  '!': '1', '@': '2', '#': '3', '$': '4', '%': '5',
  '^': '6', '&': '7', '*': '8', '(': '9', ')': '0',
}

let altDown = false
let controlDown = false
let shiftDown = false

export function keyPressed() {
  switch (this.keyCode) {
    case this.ALT:
      altDown = true
    break
    case this.CONTROL:
      controlDown = true
    break
    case this.SHIFT:
      shiftDown = true
    break
  }

  // NUMBER MULTIPLIERS
  if (NUMBER_KEY_CODES.includes(this.keyCode) && !controlDown && !altDown) {
    this.executeCommand('setMovement', [this.key], false)
  }

  // SWITCHES
  if (this.key === '`') {
    this.executeCommand('toggleSetting', ['debuggingEnabled'], true)
  }

  if (this.key === 'a') {
    this.executeCommand('toggleSetting', ['axisEnabled'], true)
  }

  if (this.key === 'b') {
    this.executeCommand('toggleSetting', ['borderEnabled'], true)
  }

  if (this.key === 'c') {
    this.executeCommand('printSeed', [], false)
  }

  if (this.key === 'd') {
    this.executeMovement('changeDimensions')
  }

  if (this.key === 'n') {
    this.executeCommand('resetSeed', [], false)
  }

  if (this.key === 'p') {
    this.executeCommand('exportMinimumCanvas', [], false)
  }

  if (this.key === 'P') {
    this.executeCommand('exportCurrentCanvas', [], false)
  }

  if (this.key === 'r') {
    this.executeCommand('reset', [], false)
  }

	if (this.key === 's') {
		this.executeCommand('exportConfiguration', [], false)
	}

  if (this.keyCode === this.ESCAPE) {
    this.executeCommand('clearMultiplier', [])
  }
}

export function keyReleased() {
  switch (this.keyCode) {
    case this.ALT:
      altDown = false
    break
    case this.CONTROL:
      controlDown = false
    break
    case this.SHIFT:
      shiftDown = false
    break
  }
}
