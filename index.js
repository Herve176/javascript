// email = rode@rode.com, password = password123



//simple
// je veux qu'un compteur incrémente a chaque fois qu'on click sur sign-in
const count = document.getElementById("counter")
const showme = document.getElementById("show")
let i = 0;

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    i += 1;
    count.innerHTML = i
    showme.append(email.value + password.value)
    
    // Add this code to your JavaScript file (index.js)
    });

// je veux savoir qui a essayer de se connecter [email, password]




//intermediate
// je veux le nombre d'essaie ok et not ok

// je veux qu'au 5ieme essaie ok, on previenne l'utilisateur qu'il se rediriger 

//hard
// vers une page dans 10 seconde (la page devient disable=true)
