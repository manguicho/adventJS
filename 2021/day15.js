function checkSledJump(heights) {
  // ¡No olvides compartir tu solución en redes!
  let lastElement = -1
  let changed = false
  for (let i in  heights){
    console.log(i,heights[i], lastElement, changed)
  	if (heights[i]<lastElement && changed == false) changed = true
  	else if (heights[i]>=lastElement && changed == true) return false
    if (heights[i]==lastElement) return false
  	lastElement = heights[i]
 	}
  if (!changed){return false} else {return true}
}

// console.log(checkSledJump([1, 2, 3, 2, 1])) // true: sube y baja de forma estricta
 // console.log(checkSledJump([0, 1, 0])) // -> true: sube y baja de forma estricta
 // console.log(checkSledJump([0, 3, 2, 1])) // -> true: sube y baja de forma estricta
 // console.log(checkSledJump([0, 1000, 1])) // -> true: sube y baja de forma estricta

 console.log(checkSledJump([2, 4, 4, 6, 2])) // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])) // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])) // false: sube y baja y sube... ¡no vale!