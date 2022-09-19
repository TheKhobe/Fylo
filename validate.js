function myFunction(){
var text = document.getElementById('text');
 var btn = document.getElementById('btn');
if(text.value == ''){
document.getElementById('error-text').innerHTML= 'Please Enter a valid email address';
return false;
}
}