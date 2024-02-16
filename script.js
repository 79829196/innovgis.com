// Creation des variables pour manipuler les boutons: Fermer et autres
const OpenNav = document.querySelector(".icon1")
const FermerNav = document.querySelector(".fermer")
const Menu = document.querySelector(".menu")

const PositionMenu = Menu.getBoundingClientRect().left;

// Ajout des evenements/ Fonctions
// ===> Cas de "Ouvrir"
OpenNav.addEventListener("click", () =>{
    if(PositionMenu < 0){
        Menu.classList.add("monter")
    }
})

// ===> Cas de "Fermer"
FermerNav.addEventListener("click", () =>{
    if(PositionMenu < 0){
        Menu.classList.remove("monter")
    }
})
