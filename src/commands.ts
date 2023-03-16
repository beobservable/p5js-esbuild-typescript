const DIMENSION_MIN = 1000
const DIMENSION_MAX = 8000

const EXPORT_WIDTH_MIN  = 2000
const EXPORT_HEIGHT_MIN = 2000

export function changeDimensions(size = 1) {
  const value = DIMENSION_MIN * size

  if (value >= DIMENSION_MIN && value <= DIMENSION_MAX) {
    this.options.w = value
    this.options.h = value
  }
}

export function clearMultiplier() {
  this.options.multiplierArray = []
}

export function exportCurrentCanvas() {
  const { w, h } = this.options

  exportFile.apply(this, [{ w, h }])
}

function exportFile({ w, h }) {
  const timestamp = new Date().toISOString().substr(0, 19)
  .replaceAll('-', '')
  .replaceAll(':', '')
  .replace('T', '')
  const fileName = [timestamp, this.options.seed, w, h]

  this.save(`${fileName.join('-')}.png`)
}

export function exportMinimumCanvas() {
  exportFile.apply(this, [{
    w: EXPORT_WIDTH_MIN, h: EXPORT_HEIGHT_MIN,
  }])
}

export function printSeed() {
  console.log(this.options.seed)
}

export function reset() {
  this.setup()
}

export function setMovement(value) {
  this.options.multiplierArray.push(value)
}

export function toggleSetting(name) {
  this.options[name] = !this.options[name]
}

