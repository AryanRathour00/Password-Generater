let passwordInput = document.getElementById("password-input");
let copyButton = document.getElementById("copy-btn");
let lengthInput = document.getElementById("length-input");
let numberInput = document.getElementById("number-input");
let characterInput = document.getElementById("character-input");
let viewLength = document.getElementById("length-display");
let textalert = document.getElementById("text-alert");

lengthInput.addEventListener('input',passwordGenerator)
numberInput.addEventListener('change',passwordGenerator)
characterInput.addEventListener('change',passwordGenerator)
function passwordGenerator(){
  let length = lengthInput.value;
  let charAllowed = characterInput.checked;
  let numAllowed = numberInput.checked;
  let passwordStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numAllowed ) passwordStr += "1234567890";
  if (charAllowed) passwordStr += "!@#$%&*";
  let password = ""
  for(let i = 0; i < length; i++){
       let char = Math.round(Math.random()*passwordStr.length);
       password += passwordStr.charAt(char)
  }
  passwordInput.value = password;
  viewLength.innerHTML = `(${length})`
}
passwordGenerator()

copyButton.addEventListener('click',()=>{
  let copyText = passwordInput;
  copyText.select();
  copyText.setSelectionRange(0,9999);
  navigator.clipboard.writeText(copyText.value);
  textalert.classList.remove('d-none');
  setTimeout(()=>{
    textalert.classList.add('d-none')
  },500)
})