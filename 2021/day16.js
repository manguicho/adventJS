function decodeNumbers(symbols) {
 // ¡No olvides compartir tu solución en redes!
 let arr = symbols.split("")
 const vals = {".":1, ",":5, ":":10, ";":50, "!":100}
 arr = arr.map((e,i)=>{return vals[arr[i]] * ((vals[arr[i]]<vals[arr[i+1]] && arr[i+1] != undefined)?-1:1)})
 console.log(arr)
  return arr.reduce((a,b)=>a+b)
}


  

console.log(decodeNumbers('...')) // 3
console.log(decodeNumbers('.,')) // 4 (5 - 1))
console.log(decodeNumbers(',.')) // 6 (5 + 1))
console.log(decodeNumbers(',...')) // 8 (5 + 3))
console.log(decodeNumbers('.........!')) // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100))
console.log(decodeNumbers('.;')) // 49 (50 - 1))
console.log(decodeNumbers('..,')) // 5 (-1 + 1 + 5))
console.log(decodeNumbers('..,!')) // 95 (1 - 1 - 5 + 100))
console.log(decodeNumbers('.;!')) // 49 (-1 -50 + 100))
console.log(decodeNumbers('!!!')) // 300
console.log(decodeNumbers(';!')) // 50
console.log(decodeNumbers(';.W')) // NaN