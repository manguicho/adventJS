function fixFiles(files) {
 // ¡No olvides compartir tu solución en redes!


	return files.map((e,i)=>e+"("+files.filter((f,j)=>f==e && j<i).length+")").map(e=>e.replace("(0)",""))
}




const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
console.log(fixFiles(files3))