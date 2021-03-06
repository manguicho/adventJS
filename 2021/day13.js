function wrapGifts(gifts) {
    // Â¡No olvides compartir tu soluciÃ³n en redes!
    let headTail = new Array(gifts[0].length+2)
    headTail = headTail.fill("*").join("")
    gifts = gifts.map(e=>"*" + e + "*")
    gifts.unshift(headTail)
    gifts.push(headTail)
    return gifts
  }



console.log(wrapGifts(["ð·", "â½ï¸"]))
/* Resultado:
[ '****',
  '*ð·*',
  '*â½ï¸*',
  '****'
]
*/

wrapGifts(["ðð¸", "ð®ð§¸"])
/* Resultado:
[ '******',
  '*ðð¸*',
  '*ð®ð§¸*',
  '******'
]
*/

wrapGifts(["ð·"])
/* Resultado:
[ '****',
  '*ð·*',
  '****'
]
*/