function isValid(letter) {
 // ¡No dejes que el Grinch gane! 
 return (letter.match(/\([^\[|\{]+\)/g)!=null&&letter.indexOf("\(\)")==-1)   
} 

console.log(isValid("bici coche (balón) bici coche peluche")) // -> ✅
console.log(isValid("bici coche (balón bici coche")) // -> ❌
