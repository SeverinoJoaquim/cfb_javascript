var pos,msg,pontos;

pontos=100;

if(pontos>=1000){
	pos=1;
}else if(pontos>=800){
	pos=2;
}else if(pontos>=600){
	pos=3;
}else{
	pos=0;
}

switch(pos){
	case 1:
		msg="Primeiro colocado<br>Medalha de Ouro";
		break;
	case 2:
		msg="Segundo colocado<br>Medalha de Prata";
		break;
	case 3:
		msg="Terceiro colocado<br>Medalha de Bronze";
		break;
	default:
		msg="Não houve ganhador!";	
}

switch(pos){
	case 1:
	case 2:
	case 3:
		msg+="<br>Subiu ao pódio!";
		break;
	default:
		msg+="<br>Participação discreta!";	
}
		
document.write(msg);