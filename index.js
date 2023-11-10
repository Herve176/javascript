// email = rode@rode.com, password = password123



//simple
// je veux qu'un compteur incrémente a chaque fois qu'on click sur sign-in
const countpos = document.getElementById("counter")
const countnev = document.getElementById("counterneg")
const showme = document.getElementById("show")
const showincor = document.getElementById("showincor")
let i = 0
let j=0
let emails='rode@rode.com'
let passwords = 'password123'
document.getElementById("submit").addEventListener("click", function listen(event) {
    
    event.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if(email.value == emails && password.value == passwords){
    i += 1;
    countpos.innerHTML = "positive attempt:" + i
    showme.append("correct connected:"+ email.value + password.value)
    }else{
    j += 1;
    countnev.innerHTML = "negative attempt:" + j
    showincor.append("incorrect connection:" + email.value + password.value)
    }
    // Add this code to your JavaScript file (index.js)
    });






// je veux savoir qui a essayer de se connecter [email, password]




//intermediate
// je veux le nombre d'essaie ok et not ok


// je veux qu'au 5ieme essaie ok, on previenne l'utilisateur qu'il se rediriger 

//hard
// vers une page dans 10 seconde (la page devient disable=true)
