import RandomGenerator from './randomGenerator'

const { fxInteger, getSeed } = new RandomGenerator()

let rectWidth
let rectHeight

export function setup() {
  this.noiseSeed(fxInteger(1000000000000))
  this.options.seed = getSeed()

  const { w, h } = this.options

  rectWidth = fxInteger(w / 2)
  rectHeight = fxInteger(h / 2)
}

export function draw() {
  const { w, h } = this.options

  this.createCanvas(w, h)
  this.background(255)
  this.fill(0)

  this.rect(w / 2 - rectWidth / 2, h / 2 - rectHeight / 2, rectWidth, rectHeight)

  this.noLoop()
}
