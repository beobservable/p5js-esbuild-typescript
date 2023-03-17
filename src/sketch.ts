let rectWidth
let rectHeight

export function setup() {
  const { getInteger, getSeed } = this.numberGenerator

  this.noiseSeed(getInteger(1000000000000))
  this.options.seed = getSeed()

  const { w, h } = this.options

  rectWidth = getInteger(w / 2)
  rectHeight = getInteger(h / 2)
}

export function draw() {
  const { w, h } = this.options

  this.createCanvas(w, h).drop((object) => {
    if (object.file.type === 'application/json') {
      this.executeCommand('loadConfiguration', [object.data.options], false)
      this.executeCommand('reset', [], false)
    }
  })

  this.background(255)
  this.fill(0)

  this.rect(w / 2 - rectWidth / 2, h / 2 - rectHeight / 2, rectWidth, rectHeight)

  this.noLoop()
}
