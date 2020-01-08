var canal; /*Uma variável é indicada pela palavra reservada 'var'*/
var nome;
var site;
/*Pode-se usar declaração multpla*/
var cama, vento, sobrenome;
/*Impressão de variável*/

var teste1=null;
var teste2="Estmos na segunda aula de JavaSript"
var num=2250;

document.write(teste2);
document.write("<br>");
document.write(num);
document.write("<hr>");
document.write("<br>");
document.write(teste2 + "<br>" + num);
document.write("<hr>");
document.write("<br>");

curso="Neste caso, não é necessário declarar a palavra reservada 'var'";

document.write(teste2 + "<br>" + num + "<br>" + curso);

document.write("<hr>");
document.write("<br>");

var teste3=teste2+num;
document.write(teste3);

document.write("<hr>");
document.write("<br>");

var teste3=teste2+"<br>"+num;
document.write(teste3);

document.write("<hr>");
document.write("<br>");

var num2=150
var teste3=teste2+"<br>"+num+num2;
document.write(teste3);

document.write("<hr>");
document.write("<br>");

var num2=150
var teste3=teste2+"<br>"+(num+num2);
document.write(teste3);