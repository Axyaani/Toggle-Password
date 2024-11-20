let password=document.querySelector('#password');
let eye=document.querySelector('#eye');
function eyecon(){
if(password.type=="password"){
  password.type="text";
  eye.src="/src/eyeclose.png"
  

}else{
  password.type="password"
    eye.src="/src/eyeopen.png"
}


}