import p5 from 'p5'
import { setup, draw } from './sketch'
import { keyReleased, keyPressed } from './keyboard'
import * as Commands from './commands'

new p5((sketch) => {

  const {
    margin,
    w, h,
  } = sketch.options = {
    margin: 0,
    multiplierArray: [],
    w: 2000, h: 2000,
  }

  sketch.setup = () => setup.apply(sketch, [])

  sketch.draw = () => {
    draw.apply(sketch, [])

    if (sketch.options.borderEnabled) {
      sketch.stroke(0)
      sketch.strokeWeight(5)
      sketch.noFill()
      sketch.rect(0, 0, w + margin, h + margin)
    }

    if (sketch.options.axisEnabled) {
      sketch.push()

      sketch.stroke('#000000')
      sketch.strokeWeight(1)

      // X-Axis
      sketch.line(0, h / 2, w, h / 2)

      // Y-Axis
      sketch.line(w / 2, 0, w / 2, h)

      sketch.pop()
    }
  }

  sketch.keyReleased = () => keyReleased.apply(sketch, [])

  sketch.keyPressed = () => keyPressed.apply(sketch, [])

  sketch.executeCommand = function(command, args, record = true) {
    const func = Commands[command]

    func.apply(sketch, args)

    // TODO: ADD COMMAND LIST AND INDEX
    if (record && sketch.options.debuggingEnabled) {
      console.log("executed command:", func.name, JSON.stringify(args))
    }

    sketch.redraw()
  }


  sketch.executeMovement = function(funcName, record = true) {
    const multiplier = Number(this.options.multiplierArray.join('')) || 1
    Commands.clearMultiplier.apply(this)

    this.executeCommand(funcName, [multiplier], record)
  }

}, 'p5-canvas')
