var you=prompt("You select : Keo/Bua/Bao ");
console.log("You choose :" +you);
var computer=Math.floor((Math.random() * 3) + 1);
if (computer===1){
	computer="Keo";
}
else if(computer===2){
	computer="Bao";
}
else computer="Bua";
console.log( "Computer selects : " + computer); 
if (you==computer){
	console.log("Draw!!!!");}
if ((you=="Dam")){
	if(computer=="Keo"){
		console.log("YOu WIN!!!");}
	else if (computer=="Bao"){
		console.log("Computer wins , You lost!!");}
		}
if ((you=="Keo")){
	if(computer=="Bao"){
		console.log("YOu WIN!!!");}
	else if (computer=="Dam"){
		console.log("Computer wins , You lost!!");}
		}
if ((you=="Bao")){
	if(computer=="Dam"){
		console.log("YOu WIN!!!");}
	else if (computer=="Keo"){
		console.log("Computer wins , You lost!!");}
		}