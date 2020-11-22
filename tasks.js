//Task One
function changeColor(){
	var color=document.getElementById("color").value
	document.body.style.background = color;
	document.body.style.color = "white";
}
		//Task Two
		function answer(){
			var falses = document.getElementsByClassName("false");
			for(var i = 0; i< falses.length;i++){
				falses[i].style.color="red";
			}
			var t=document.getElementById("true");
			t.style.color="green";
		}
		//Task Three
		function show(){
			var x=document.getElementById("country").value;
			if(x==1){
				document.getElementById("states").style.display="none";
				document.getElementById("city").style.display="inline";
			}
			else {
				document.getElementById("city").style.display="none";
				document.getElementById("states").style.display="inline";
			}
		}
	//Task Four
	function sum(){
		var x=parseInt(document.getElementById("first").value);
		var y=parseInt(document.getElementById("second").value);
		document.getElementById("result").value=eval(x + y);
	}
	function sub(){
		var x=parseInt(document.getElementById("first").value);
		var y=parseInt(document.getElementById("second").value);
		document.getElementById("result").value=eval(x - y);
	}
	function mult(){
		var x=parseInt(document.getElementById("first").value);
		var y=parseInt(document.getElementById("second").value);
		document.getElementById("result").value=eval(x * y);
	}
	function divi(){
		var x=parseInt(document.getElementById("first").value);
		var y=parseInt(document.getElementById("second").value);
		document.getElementById("result").value=eval(x / y);
	}
	function reset(){
		document.getElementById("first").value=" ";
		document.getElementById("second").value=" ";
		document.getElementById("result").value=" ";
	}
		//Task Five
		function validateForm() {
			var mailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			var mail= document.getElementById("mail").value;
			if(mail==""){
				document.getElementById("mailspan").innerHTML= "Required *";

			}

			else if(!mail.match(mailregex))
			{
				document.getElementById("mailspan").innerHTML= "You have entered an invalid email address!";
				document.getElementById("mail").value=" ";
			}
			var pass=document.getElementById("pass").value;
			var repass=document.getElementById("repass").value;
			if(pass ==""){
				document.getElementById("passp").innerHTML= "Required *";
			}
			if(repass ==""){
				document.getElementById("respan").innerHTML= "Required *";
			}
			if(pass != repass){
				document.getElementById("respan").innerHTML= "password deos not match !";
				document.getElementById("pass").value=" ";
				document.getElementById("repass").value=" ";
			}
			var phone= document.getElementById("num").value;
			if(phone ==""){
				document.getElementById("numspan").innerHTML="Required *";
			}
			if (isNaN(phone)) {
				document.getElementById("numspan").innerHTML= "phone must be a number !";
				document.getElementById("num").value=" ";
			}
		}
		//Task Six
		function result(){
			var q1correct=document.getElementById("q1correct");
			var q1=document.getElementById("q1");
			var q2correct=document.getElementById("q2correct");
			var q2=document.getElementById("q2");
			var q3correct=document.getElementById("q3correct");
			var q3=document.getElementById("q3");
			var q4correct=document.getElementById("q4correct");
			var q4=document.getElementById("q4");
			var q5correct=document.getElementById("q5correct");
			var q5=document.getElementById("q5");
			var answers=[0];
			var mark=0;
			if(q1correct.checked){
				mark+=1;
				answers[0]="q1.true ";

			}
			if(q1.checked){
				answers[0]="q1.False (wrong answer) ";

			}
			if(q2correct.checked){
				mark+=1;
				answers[1]="q2.False ";

			}
			if(q2.checked){
				answers[1]="q2.True (wrong answer) ";

			}
			if(q3correct.checked){
				mark+=1;
				answers[2]="q3.true ";

			}
			if(q3.checked){

				answers[2]="q3.false (wrong answer) ";

			}
			if(q4correct.checked){
				mark+=1;
				answers[3]="q4.true ";

			}
			if(q4.checked){

				answers[3]="q4.False (wrong answer) ";

			}
			if(q5correct.checked){
				mark+=1;
				answers[4]="q5.False ";

			}
			if(q5.checked){

				answers[4]="q5.True (wrong answer) ";

			}
			alert("your result is:"+mark+"\n your answers is: "+answers+" ");
		}
		//back To Top
		function up(){
			document.documentElement.scrollTop=0;
		}
		function scroll(){
			document.getElementById("up").style.display="block";
			if(document.documentElement.scrollTop==0){
				document.getElementById("up").style.display="none";
			}
		}