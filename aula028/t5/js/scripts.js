var tmp=3;

var dt=new Date();
var diasem=dt.getDay()+tmp;
var dia=dt.getDate()+tmp;
var mes=dt.getMonth();
var ano=dt.getFullYear();
//Ver apostila, pág 55

var horas=dt.getHours();
var minutos=dt.getMinutes();
var segundos=dt.getSeconds();

var meses=new Array("janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro");
var semana=new Array("Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado");

document.write(dt+"<br>");
document.write(diasem+"<br>");
document.write(dia+"<br>");
document.write(mes+"<br>");
document.write(ano+"<br><br>");

document.write(diasem + ", " + dia + " de " + mes + " de " + ano+"<br><br>");

document.write(semana[diasem] + ", " + dia + " de " + meses[mes] + " de " + ano+"<br><br>");

document.write(horas + ":" + minutos + ":" + segundos);