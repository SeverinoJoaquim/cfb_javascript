//var cor=new Array();
var mochila=[],pos;

mochila.push("item1");
mochila.push("item2");
mochila.push("item3");
mochila.push("item4");
mochila.push("item5");
mochila.push("item6");
mochila.push("item7");
mochila.push("item8");
mochila.push("item9");
mochila.push("item10");

pos=mochila.indexOf("item15");

if(pos < 0){
	document.write("O ítem não está na mochila<br>");
}else{
	document.write("O ítem está na mochila<br>");
}