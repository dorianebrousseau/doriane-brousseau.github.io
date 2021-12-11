
// DARK MODE

const body = document.querySelector('body');

function isInTheDark() {
    return document.cookie.match(/theme=dark/i) != null
  }

function checkCookie() {
    body.classList.add(isInTheDark() ? 'darkmode' : 'lightmode' );
}

function btnCheck() {
    if (body.classList.contains('darkmode')){
        document.getElementById('dark-mode').checked = true;
    } else {
        document.getElementById('dark-mode').checked = false;
    }
}

checkCookie();
btnCheck();

body.addEventListener('change', function (){
    if(document.getElementById('dark-mode').checked){
        body.classList.add('darkmode');
        document.cookie = 'theme=' + (body.classList.contains('darkmode') ? 'dark' : 'light')+ "; path=/";
    }   else {
        body.classList.remove('darkmode');
        document.cookie = 'theme=' + (body.classList.contains('darkmode') ? 'dark' : 'light')+ "; path=/";
    }
})


// Activation des animations quand on clique sur le bouton dark mode

document.getElementById('dark-mode').addEventListener('click', function(){
    body.classList.add('animationactive');
    setTimeout(function(){ body.classList.remove('animationactive'); }, 1000);
})







