var nota=55;
var res;
//Aprovado com louvor	>95
//Aprovado				>=60
//Recuperação			>=40 && <60
//Reprovado				<40

if(nota>=60){
	if(nota>95){
		res="Sua nota foi excelente. Aprovado com louvor";	
	}else{
		res="Parabéns. Você está aprovado!"	
	}
}else if(nota>=40){
	res="Você ainda tem chance. Está em recuperação!";
}else{
	if(nota>=20){
		res="Lamento. Está Reprovado!";
	}else{
		res="Sua nota foi terrível. Está reprovado vergonhosamente!";
	}
}

document.write(res);