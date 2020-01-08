var pos;
pos=1;

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