function canReconfigure(from, to) {
  if(from.length != to.length) return false  
  let buff = []
  for (let i in from.split("")){
    if (!buff.map(e=>e.join("")).includes(from[i]+to[i]) && //si ya sucedio la asignacion es correcto entonces se omite en la comprobacion para false
        from[i]!=to[i] && //puede asignarse a si misma
        (buff.map(e=>e[0]).includes(from[i]) || buff.map(e=>e[1]).includes(to[i]))) return false //evitado lo anterior, si from o to ya fueron asignadas: false
    buff.push([from[i],to[i]])
  }
  return true
}

let from = 'BAL'
let to   = 'LIB'



from = 'CON'
to   = 'JUU'
from = 'xxxMMM'
to   = 'aaaDDD'
from = 'abcdefghijkl'
to = 'lkjihgfedcba'
from = 'xxxqqqeeefffggg'
to = 'xxxqqqeeefffgg'
from = 'MMM'
to = 'MID'

from = 'abcdefghijkl'
to = 'lkjihgfedcba'

from = 'xxxMMM'
to   = 'aaaDDD'
console.log(canReconfigure(from, to))
 