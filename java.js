function calculate() {
var gender = document.Form.gender.value
var age = document.Form.age.value
var weight=document.Form.weight.value
var erer=document.Form.exer.value
if(gender==" " || age>0||weight>0||exer>=0){	
var final =(weight*2.205)/2.2
if(age>0 && age<=30){
    var fin=final*40
}else if(age>30 && age<=35){
    var fin=final*35
}
else{
    var fin=final*30
}
    var sum=(fin/28.3)
    var su=(sum*0.0296);
    var outa=su.toFixed(2);
    if(document.getElementById("gender").value=="male"){
        outa=parseFloat(outa)+0.5;
    }
    if(erer>0){
        outa=parseFloat(outa)+(erer)*0.01
    }
    var ou=parseFloat(outa).toFixed(2)
document.getElementById("demo").innerHTML =
"Minimum Water you need to drink is: " + ou+"litres";
}
else{
alert("Please Fill in everything correctly")
}
}