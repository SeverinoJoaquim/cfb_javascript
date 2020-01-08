var pos;
pos=2;

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
document.write(msg);