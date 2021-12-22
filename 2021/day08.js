function maxProfit(prices) {
  // ¡Y no olvides compartir tu solución en redes!
  let res = []
  for (let i in prices)
    for (let j in prices)
      if(j>i) res.push((prices[j]-prices[i]<=0)?-1:prices[j]-prices[i])
  console.log(Math.max(...res))
  return Math.max(...res)
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)


