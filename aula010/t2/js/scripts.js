var nota=60;
var res;
var resp;
//Aprovado com louvor	>95
//Aprovado				>=60
//Recuperação			>=40 && <60
//Reprovado				<40

if(nota>=60){
	res="Aprovado"
	if(nota>95){
		res="Sua nota foi excelente. "+res+" com louvor";	
	}else{
		res="Parabéns. Você está "+res+"!";
	}
}else if(nota>=40){
	res="Você ainda tem chance. Está em recuperação!";
}else{
	res="Reprovado";
	if(nota>=20){
		res="Lamento. Está "+res+"!";
	}else{
		res="Sua nota foi terrível. Está "+res+" vergonhosamente!";
	}
}

document.write(res);