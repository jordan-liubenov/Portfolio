const email = document.querySelector('#email');
let defaultEmailState = true;

function displayEmail(){ //show or hide email on click
    if(defaultEmailState){
        email.innerHTML = '(Email: jordan.liubenov62@gmail.com)'
        defaultEmailState = false;
    } else {
        email.innerHTML = '';
        defaultEmailState = true;
    }
}