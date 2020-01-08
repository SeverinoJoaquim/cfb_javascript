var pontos=78;
//Vitória ocorre quando: pontos >=30 && <=40 || >=70 && <=80
if(((pontos>30) && (pontos<=40) || (pontos>=70) && (pontos<=80))){
	document.write("Ganhou!!!");
}else{
	document.write("Lamento. Você perdeu!!!");
}