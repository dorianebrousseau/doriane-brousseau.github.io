// SOMMAIRE

const sommaireHeader = document.querySelector('.sommaire-header');
const sommaireBody = document.querySelector('.sommaire-body');
const sommaireDesktop = document.querySelector('.sommaire-desktop');
const textMemoire = document.querySelector('.text-memoire');

console.log(sommaireHeader);

sommaireHeader.addEventListener("click", function (){
    if(this.classList.contains("open")){
        this.classList.remove("open"),
        sommaireBody.classList.add("not-visible") ;
    } else{
        this.classList.add("open"),
        sommaireBody.classList.remove("not-visible");
    }
})

sommaireDesktop.addEventListener("click", function(){
    if(this.classList.contains("open")){
        this.classList.remove("open"),
        sommaireBody.classList.add("not-visible"),
        textMemoire.classList.add("large");
    } else{
        this.classList.add("open"),
        sommaireBody.classList.remove("not-visible"),
        textMemoire.classList.remove("large");
    }
})


// Sommaire mobile qui se referme quand on clic un lien

function closeSommaire(){
    sommaireHeader.classList.remove("open");
    sommaireBody.classList.add("not-visible");
    sommaireDesktop.classList.remove("open");
}
    
if (window.matchMedia('(max-width: 900px)').matches) {
    const sommaireAll = document.querySelectorAll(".sommaire-lien")

    sommaireAll.forEach(el => {
        el.addEventListener('click', event => {
            closeSommaire();
        })
    })
} else {};




// MENU MOBILE : enlever le scroll en fond quand ouvert

const inputMenuMobile = document.getElementById('menu-burger');
console.log(inputMenuMobile);

inputMenuMobile.addEventListener("click", function(){
    if (inputMenuMobile.checked){
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
})



// REFERENCE

const refAll = document.querySelectorAll(".all-ref");
const refOverlayAll = document.querySelectorAll('.ref-overlay')


refAll.forEach(el => {
    el.addEventListener('mouseover', event => {
        let refOverlay = el.querySelector('.ref-overlay');
        refOverlay.classList.add("afficher");
    })
})

refOverlayAll.forEach(el => {
    el.addEventListener('mouseover', event =>{
        console.log(el);
        el.classList.add("afficher");
    })
})

refOverlayAll.forEach(el => {
    el.addEventListener('mouseleave', event =>{
        console.log(el);
        el.classList.remove("afficher");
    })
})

refAll.forEach(el => {
    let refOverlay = el.querySelector('.ref-overlay');

    el.addEventListener('mouseleave', event =>{ 
        refOverlay.classList.remove("afficher");
    })
})

refOverlayAll.forEach(el =>{
        let croixOverlay = el.querySelector('.croix-overlay');
        console.log(croixOverlay);
        
        croixOverlay.addEventListener("click", event =>{
            // let refOverlay = el.querySelector('.ref-overlay');
            el.classList.remove("afficher");
        })
})

