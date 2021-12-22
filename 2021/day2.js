let  letter = 'bici coche balón _playstation bici coche peluche'

console.log(listGifts(letter))

 function listGifts(letter) {
  let counts = {};
  console.log(letter)
  letter.trim().split(" ").filter(e=>!(e.startsWith("_"))).forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
  return counts
}