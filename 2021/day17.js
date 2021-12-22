
function countPackages(carriers, carrierID) {
 // ¡No olvides compartir tu solución en redes!
  return getQ(carriers, carrierID)
}

class carrier 
  {
    constructor(name, q, childs){
      this.name = name;
      this.q = q;
      this.childs = childs
    }
  }

function getQ (carriers, node, res = []){
  let target = carriers.map(e=>new carrier(...e)).filter(e=>e.name == node)[0]
  res.push(target.q)
  for (let o of target.childs)
    getQ(carriers, o,res)
  return res.reduce((a,b)=>a+b) 
}


const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
]

const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
]

countPackages(carriers, 'dapelu') // 9
countPackages(carriers2, 'camila') // 15