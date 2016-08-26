import Rx from 'rxjs/Rx'
import {starStream, paintStars} from './stars.js'
import {player, paintSpaceShip} from './player.js'

function renderGame (gameObj) {
  paintStars(gameObj.stars)

  paintSpaceShip(gameObj.player.x, gameObj.player.y)
}
console.log(player, paintSpaceShip)
var Game = Rx.Observable.combineLatest(starStream, player, (stars, player) => ({
  stars, player
}))

Game.subscribe(renderGame)
