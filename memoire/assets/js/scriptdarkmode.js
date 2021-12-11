// const body = document.querySelector('body');

// function isInTheDark() {
//     return document.cookie.match(/theme=dark/i) != null
//   }

// function checkCookie() {
//     body.classList.add(isInTheDark() ? 'darkmode' : 'lightmode' );
// }

// function btnCheck() {
//     if (body.classList.contains('darkmode')){
//         document.getElementById('dark-mode').checked = true;
//     } else {
//         document.getElementById('dark-mode').checked = false;
//     }
// }

// checkCookie();
// btnCheck();

// body.addEventListener('change', function (){
//     if(document.getElementById('dark-mode').checked){
//         body.classList.add('darkmode');
//         document.cookie = 'theme=' + (body.classList.contains('darkmode') ? 'dark' : 'light')+ "; path=/";
//     }   else {
//         body.classList.remove('darkmode');
//         document.cookie = 'theme=' + (body.classList.contains('darkmode') ? 'dark' : 'light')+ "; path=/";
//     }
// })