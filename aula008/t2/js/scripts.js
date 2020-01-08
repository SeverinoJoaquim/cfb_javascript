var pontos=78;
var energia=20;
//Vitória ocorre quando: pontos >=30 && <=40 || >=70 && <=80
if(((pontos>30) && (pontos<=40) && (energia>=40)) || ((pontos>=70) && (pontos<=80) && (energia>=40))){
	document.write("Ganhou!!!");
}else{
	document.write("Lamento. Você perdeu!!!");
}