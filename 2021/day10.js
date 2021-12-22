function  getCoins(n){
const coins = [[1,1],[2,2],[5,3],[10,4],[20,5],[50,6]]

	let acc = 0
	let needed = []
	let expend = []
	while (acc != n) {
		let diff =0		
		diff = n-acc
		//console.log(diff , n  , acc)
		let coin = Math.max(...coins.map(e=>e[0]).filter(e=>Number(e)<=Number(diff)))
		expend.push(coin)				
		acc += coin
		//console.log(acc)
	}
	let res = []
	for (let i=1;i<=6;i++){
		if (expend.includes(coins.filter(e=>Number(e[1])==Number(i)).map(e=>e[0])[0])){
			res.push(expend.filter(e=>Number(e)==coins.filter(e=>Number(e[1])==Number(i)).map(e=>e[0])[0]).length)
		}
		else
			res.push(0)
	}
console.log(res)
	return res
}

	
getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
