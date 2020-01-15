var numeros=new Array(1,2,3,100);

function media(nums){
	var tam=nums.length;
	var soma=0;
	for(var i=0;i<tam;i++){
		soma+=nums[i];
	}
	//return soma/tam;
	return Math.round(soma/tam);
}
document.write(media(numeros));

document.write("<hr>");

function soma3(c1,c2){
	return c1+c2;
}
var res3=soma3(21,21)
document.write(res3);

document.write("<hr>");

function soma2(v1,v2){
	return v1+v2;
}
document.write(soma2(15,13));

document.write("<hr>");

function soma(n1,n2){
	var res=n1+n2;
	document.write(res+"<br>");
}

soma(5,2);
soma(10,20);
soma(0,5);

document.write("<hr>");

function escreve(){
	document.write("Ghgdkhgdkhgkhgkhg ytditditdtdtd iytditdi");
}

escreve();

document.write("<hr>");

