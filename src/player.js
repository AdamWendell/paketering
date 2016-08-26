import Rx from 'rxjs/Rx'
import {canvas, ctx} from './stars.js'

const heroY = canvas.height - 30
const mouseMove = Rx.Observable.fromEvent(canvas, 'mousemove')
const player = mouseMove.map(e => ({x: e.clientX, y: heroY}))
        .startWith({x: canvas.width / 2, y: heroY})

function drawShip (x, y, width, color, direction) {
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(x - width, y)
  ctx.lineTo(x, direction === 'up' ? y - width : y + width)
  ctx.lineTo(x + width, y)
  ctx.lineTo(x - width, y)
  ctx.fill()
  console.log(ctx)
}

function paintSpaceShip (x, y) {
  drawShip(x, y, 20, '#0730ff', 'up')
}

export {player, drawShip, paintSpaceShip}
