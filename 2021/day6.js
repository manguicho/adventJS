function sumPairs(numbers, result) {
  // ¡Y no olvides compartir tu solución en redes!
  numbers = numbers.map(e=>Number(e))
  for (let i in numbers){
    for (let j in numbers){
      if (numbers[i]+numbers[j]== result && i!=j) return [numbers[i],numbers[j]]
    }
  } 
  return null
}

console.log(sumPairs([3, 5, 7, 2], 10)) // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)) // null
console.log(sumPairs([2, 2, 3, 1], 4)) // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)) // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)) // [1, 5]