function pangram(letter) {
 // ¡No olvides compartir tu solución en redes!
    let hasñ = false;
    hasñ = /ñ./.test(letter)
    let tmp = findUnique(removeAccents(letter.toLowerCase())).replace(/[^A-Za-z0-9]/g,"").split("").sort().join("")
  if (!hasñ)return false
  return tmp.length==26
}
function removeAccents (str)  {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 
function findUnique(str){  
  return [...new Set(str.split(""))].join("")
}

console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') )// true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')) // true

console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')) // false
console.log(pangram('De la a a la z, nos faltan letras')) // false