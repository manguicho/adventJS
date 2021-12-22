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

console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6))