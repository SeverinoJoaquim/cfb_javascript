var num;
try{
	num=10/0;
	document.write("ERRO: " + num);
}catch(e){
	//document.write("ERRO " + e.message);
	//console.log("Mensagem de erro: " + e.message);
}