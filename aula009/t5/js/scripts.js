var nota=19;
var res;
//Aprovado com louvor	>95
//Aprovado				>=60
//Recuperação			>=40 && <60
//Reprovado				<40

if(nota>=95){
	res="Aprovado com louvor";
}else if(nota>=60){
	res="Parabéns. Você está aprovado!"
}else if(nota>=40){
	res="Está em recuperação!";
}else if(nota<20){
	res="Terrível. Está Reprovado Deplovavelmente!";
}else{
	res="Lamento. Está Reprovado!";
}
document.write(res);