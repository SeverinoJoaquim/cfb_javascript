var num;
try{
	num=prompt("Digite um valor");
	if(num>10){
		throw new Error("Valor inválido! O valor dever ser menor ou igual a 10");
	}
	document.write("Valor: " + num);
}catch(e){
	document.write("ERRO: " + e.message);
	//console.log("Mensagem de erro: " + e.message);
}