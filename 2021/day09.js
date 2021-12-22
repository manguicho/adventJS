function groupBy  (collection,key){
	const type = (typeof key === "function")?"func":"param"
	let group = []
	if (type === 'param') {
		 return collection.reduce(function(rv, x) {
		    (rv[x[key]] = rv[x[key]] || []).push(x);
		    return rv;
		  }, {});
	}
	else {
		  return collection.reduce((result, value, key2) => {
		    key2 = key(value)
		    if (result.hasOwnProperty(key2)) {
		      result[key2].push(value)
		    } else {
		      result[key2] = [value]
		    }
		    return result
		  }, {});
	}
	return "dummy"
}


console.log(groupBy([6.1, 4.2, 6.3], Math.floor)) // { 6: [6.1, 6.3], 4: [4.2] }
console.log(groupBy(['one', 'two', 'three'], 'length')) // { 3: ['one', 'two'], 5: ['three'] }
console.log(groupBy([{age: 23}, {age: 24}], 'age')) // { 23: [{age: 23}], 24: [{age: 24}] }
