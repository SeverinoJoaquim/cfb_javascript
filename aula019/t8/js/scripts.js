var num,cont;

num=0;

while(num<15){
	document.write("JOCA Sistemas<br>");
	num++;
}

document.write("<hr>");

num=15;

while(num--){
	document.write("JOCA Sistemas<br>");
}

document.write("<hr>");

num=true;
cont=0

while(num){
	document.write("JOCA Sistemas<br>");
	cont++;
	if(cont>15){
		num=false;
	}
}
