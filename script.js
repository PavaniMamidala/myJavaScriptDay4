var emailElem = document.getElementById('email');
var nameElem = document.getElementById('name');
var submitButtonElem = document.getElementById('submit-btn');
submitButtonElem.addEventListener('click',function(){

})
var nameValue = document.getElementById('name-text');
var emailValue = document.getElementById('email-text');

const myForm = document.getElementById('my-form');
myForm.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('submitted');
    console.log(emailElem.Value);
    console.log(nameElem.value);
    nameValue.textContent = nameElem.value;
    emailValue.textContent = emailElem.value;
})