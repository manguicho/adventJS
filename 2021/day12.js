function getMinJump(obstacles) {
    // ¡No olvides compartir tu solución en redes!
    const max = Math.max(...obstacles)
    let arr = new Array(max)
    arr.fill(0)
    obstacles.map(e=>arr[e]=e)

    for (i in arr){
        if (i>0 && arr.filter((e,j)=>parseInt(j) % parseInt(i)==0).filter(e=>e!=0).length==0) return i        
    }   


    return 0
}
console.log(getMinJump([5, 3, 6, 7, 9]))
console.log(getMinJump([1, 2, 3, 5])) // -> 4
console.log(getMinJump([3, 7, 5])) // -> 2
console.log(getMinJump([9, 5, 1])) // -> 2