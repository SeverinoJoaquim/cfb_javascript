try{
	document.writi("JOCA Sistemas");
}catch(e){
	document.write("ERRO " + e.message);
	console.log("Mensagem de erro: " + e.message);
}