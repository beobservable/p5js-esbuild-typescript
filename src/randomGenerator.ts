const BASE_58_ALPHABET = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'

function b58dec(input) {
  return input.split('').reduce((acc, c, i) => {
    return acc + BASE_58_ALPHABET.indexOf(c) * (BASE_58_ALPHABET.length ** input.length - i - 1)
  }, 0)
}

function generateFxhash() {
  return "oo" + Array(49).fill(0).map(_ => {
    const index = (Math.random() * BASE_58_ALPHABET.length)
    return BASE_58_ALPHABET[index | 0]
  }).join('')
}

function sfc32(a, b, c, d) {
  return () => {
    a |= 0; b |= 0; c |= 0; d |= 0
    var t = (a + b | 0) + d | 0
    d = d + 1 | 0
    a = b ^ b >>> 9
    b = c + (c << 3) | 0
    c = c << 21 | c >>> 11
    c = c + t | 0
    return (t >>> 0) / 4294967296
  }
}

export default function RandomGenerator(seed) {
  let fxBoolean, fxChoice, fxInteger, fxNumber

  const fxhash = seed || generateFxhash()
  const fxhashTrunc = fxhash.slice(2)
  const expString = ".{" + ((fxhashTrunc.length / 4) | 0) + "}"
  const regex = new RegExp(expString, 'g')
  const hashes = fxhashTrunc.match(regex).map(h => b58dec(h))
  const fxrand = sfc32(...hashes)

  this.fxBoolean = fxBoolean = (value) => fxrand() < value
  this.fxChoice = fxChoice = (list) => list[fxInteger(0, list.length - 1)]
  this.fxInteger = fxInteger = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    return max ?
      Math.floor(fxNumber(min, max + 1)) :
      Math.floor(fxNumber(0, min + 1))
  }
  this.fxNumber = fxNumber = (min, max) => {
    return max ?
      fxrand() * (max - min) + min :
      fxrand() * min
  }
  this.getSeed = () => fxhash
}

