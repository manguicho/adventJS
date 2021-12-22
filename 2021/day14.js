function missingReindeer(ids) {
  // ¡No olvides compartir tu solución en redes!
  const max = Math.max(...ids)
  let arr = new Array(max)
  arr.fill(".")
  ids.map(e=>arr[e]=e)
  for (let i in arr) 
    if (arr[i]=='.') return Number(i)
  return arr.length
}

console.log(missingReindeer([0, 2, 3])) // -> 1
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])) // -> 4
console.log(missingReindeer([0, 1])) // -> 2 (¡es el último el que falta!)
console.log(missingReindeer([3, 0, 1])) // -> 2
console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])) // -> 8
console.log(missingReindeer([0])) // -> 1 (¡es el último el que falta!)