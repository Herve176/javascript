// email = rode@rode.com, password = password123



//simple
// je veux qu'un compteur incrémente a chaque fois qu'on click sur sign-in
const count = document.getElementById("counter")
let i = 0;

document.getElementById("submit").addEventListener("click", function(event) {
    
    i += 1;
    count.innerHTML = i
    event.preventDefault();
    // Add this code to your JavaScript file (index.js)

    
})

    

    
// je veux savoir qui a essayer de se connecter [email, password]

//intermediate
// je veux le nombre d'essaie ok et not ok

// je veux qu'au 5ieme essaie ok, on previenne l'utilisateur qu'il se rediriger 

//hard
// vers une page dans 10 seconde (la page devient disable=true)