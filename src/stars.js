import Rx from 'rxjs/Rx'

/**
 * this function paint stars too the canvas
 * @param {Array<{x: number, y: number, size: number}} stars
 */
function paintStars (stars) {
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#fff'
  stars.forEach(star => { ctx.fillRect(star.x, star.y, star.size, star.size) })
}
var canvas = document.createElement('canvas')
var ctx = canvas.getContext('2d')
document.body.appendChild(canvas)
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const SPEED = 40
const STAR_NUMBER = 250
let starStream = Rx.Observable.range(1, STAR_NUMBER)
  .map(() => ({
    x: parseInt(Math.random() * canvas.width),
    y: parseInt(Math.random() * canvas.height),
    size: Math.random() * 3 + 1
  }))
  .toArray()
  .flatMap((starArr) => (
    Rx.Observable.interval(SPEED).map(() => {
      starArr.forEach((star) => { star.y >= canvas.height ? star.y = 0 : star.y += star.size })
      return starArr
    })
  ))

export {canvas, ctx, starStream, paintStars}

