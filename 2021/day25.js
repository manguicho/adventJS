

function canMouseEat(direction, game) {
let coords  = []
game.forEach((e,i)=>e.forEach((f,j)=>{if (f=="m") coords = [i,j]}))
const nearby = (game, y,x) =>
  [
    [Number(y), Number(x) - 1, "left"],
    [Number(y), Number(x) + 1, "right"],
    [Number(y) - 1, Number(x), "up"],
    [Number(y) + 1, Number(x), "down"],
  ].filter(([yy, xx,dd]) => yy >= 0 && yy < game.length && xx >= 0 && xx < game[0].length && dd == direction) 
  let target = nearby(game, coords[0], coords[1])
  let res = false
  if (target.length == 0) res = false
  else res = game[target[0][0]][target[0][1]] == "*"
  return res
} 


const game = [
  ['*', 'm']
]
let direction = 'left'

console.log(canMouseEat(direction, game))
