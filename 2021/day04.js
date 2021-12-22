function createXmasTree(height) {
  let res = ""
  let delta = 0 
  let maxWidth = height + height -1
  for (let i=0;i<height;i++){ 
    if (i==0) {delta = 1}
    else{delta = Number(delta)+2}
    console.log(i,delta, i+2)
    let filler = "".padStart((maxWidth - delta)/2,"_")//.padEnd((maxWidth - delta)/2,"_")    
    res+=filler + Array(delta).fill("*").join("") + filler +"\n"    
  } 
  let filler = "".padStart((maxWidth - 1)/2,"_")//.padEnd((maxWidth - 1)/2,"_")
  res+=filler+"#"+filler+"\n" 
  res+=filler+"#"+filler
  console.log(res)
  return res
}


console.log(createXmasTree(2))