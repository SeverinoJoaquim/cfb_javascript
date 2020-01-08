var nota=65;
var res;
//Aprovado		>=60
//Recuperação	>=40 && <60
//Reprovado		<40

if(nota>=60){
	res="Parabéns. Você está aprovado!"
}else if((nota>=40)&&(nota<60)){
	res="Está em recuperação!";
}else{
	res="Lamento. Está Reprovado!";
}
document.write(res);