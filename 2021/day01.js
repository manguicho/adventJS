function contarOvejas(ovejas) {
  // aquí tu magia
  ovejas = ovejas.filter(e=>e.color=="rojo" && e.name.match(/[Aa]/i)!=null && /[Nn]/.test(e.name))
  return ovejas
}

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]
const ovejasFiltradas = contarOvejas(ovejas)
console.log(ovejasFiltradas)