var elementos=document.querySelectorAll("p.titulo");
for(var i=0;i<elementos.length;i++){
	document.write(elementos[i].innerHTML+"<br><br>");
}