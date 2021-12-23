function canReconfigure(from, to) {
  if(from.length != to.length) return false  
  let buff = []
  for (let i in from.split("")){
    if (!buff.map(e=>e.join("")).includes(from[i]+to[i]) && from[i]!=to[i] && (buff.map(e=>e[0]).includes(from[i]) || buff.map(e=>e[1]).includes(to[i]))) {console.log(i,buff, [from[i],to[i]]);return false}
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
 