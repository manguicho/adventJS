function wrapGifts(gifts) {
    // ¡No olvides compartir tu solución en redes!
    let headTail = new Array(gifts[0].length+2)
    headTail = headTail.fill("*").join("")
    gifts = gifts.map(e=>"*" + e + "*")
    gifts.unshift(headTail)
    gifts.push(headTail)
    return gifts
  }



console.log(wrapGifts(["📷", "⚽️"]))
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"])
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(["📷"])
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/