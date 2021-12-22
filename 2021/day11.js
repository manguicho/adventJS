function shouldBuyFidelity(times) {
    // ¡No olvides compartir tu solución en redes!
    tarjeta = 250
    for (let i = 0; i< times; i++){
        tarjeta+= 12 * Math.pow(0.75,parseInt(i)+1)
    }
    return (12*times > tarjeta)
  }

console.log(shouldBuyFidelity(0))
console.log(shouldBuyFidelity(1)) // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100))