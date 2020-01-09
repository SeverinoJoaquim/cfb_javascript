var dt=new Date();

var ndt=new Date();

ndt.setFullYear(dt.getFullYear()-2)

var diasem=ndt.getDay();
var dia=ndt.getDate();
var mes=ndt.getMonth();
var ano=ndt.getFullYear();
//Ver apostila, pág 55

var horas=ndt.getHours();
var minutos=ndt.getMinutes();
var segundos=ndt.getSeconds();

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