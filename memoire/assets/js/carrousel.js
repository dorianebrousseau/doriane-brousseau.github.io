// CARROUSEL FICTIONS

const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');
const dot4 = document.getElementById('dot4');
const dot5 = document.getElementById('dot5');
const dot6 = document.getElementById('dot6');
const dot7 = document.getElementById('dot7');
const dot8 = document.getElementById('dot8');
const dot9 = document.getElementById('dot9');
const dot10 = document.getElementById('dot10');
const dot11 = document.getElementById('dot11');
const dot12 = document.getElementById('dot12');

function hideAllElements(){
    dot1.classList.remove("selected");
    document.getElementById('godcast').classList.add("no-display");
    document.getElementById('model3dgodcast').classList.add("no-display");
    dot2.classList.remove("selected");
    document.getElementById('mentalfm').classList.add("no-display");
    document.getElementById('model3dmentalfm').classList.add("no-display");
    dot3.classList.remove("selected");
    document.getElementById('derniereseance').classList.add("no-display");
    dot4.classList.remove("selected");
    document.getElementById('hellodemain').classList.add("no-display");
    dot5.classList.remove("selected");
    document.getElementById('lenuage').classList.add("no-display");
    dot6.classList.remove("selected");
    document.getElementById('appelabysses').classList.add("no-display");
    dot7.classList.remove("selected");
    document.getElementById('raproll').classList.add("no-display");
    dot8.classList.remove("selected");
    document.getElementById('epopeetemporelle').classList.add("no-display");
    dot9.classList.remove("selected");
    document.getElementById('popcorn').classList.add("no-display");
    document.getElementById('model3dpopcorns').classList.add("no-display");
    dot10.classList.remove("selected");
    document.getElementById('lamission').classList.add("no-display");
    dot11.classList.remove("selected");
    document.getElementById('unhommepapa').classList.add("no-display");
    dot12.classList.remove("selected");
    document.getElementById('spotify3d').classList.add("no-display");
}

function showDot1(){
    hideAllElements();
    dot1.classList.add("selected");
    document.getElementById('godcast').classList.remove("no-display");
    document.getElementById('model3dgodcast').classList.remove("no-display");
    document.location.hash='#1';
}

function showDot2(){
    hideAllElements();
    dot2.classList.add("selected");
    document.getElementById('mentalfm').classList.remove("no-display");
    document.getElementById('model3dmentalfm').classList.remove("no-display");
    document.location.hash='#2';
}

function showDot3(){
    hideAllElements();
    dot3.classList.add("selected");
    document.getElementById('derniereseance').classList.remove("no-display");
    document.location.hash='#3';
}

function showDot4(){
    hideAllElements();
    dot4.classList.add("selected");
    document.getElementById('hellodemain').classList.remove("no-display");
    document.location.hash='#4';
}

function showDot5(){
    hideAllElements();
    dot5.classList.add("selected");
    document.getElementById('lenuage').classList.remove("no-display");
    document.location.hash='#5';
}

function showDot6(){
    hideAllElements();
    dot6.classList.add("selected");
    document.getElementById('appelabysses').classList.remove("no-display");
    document.location.hash='#6';
}

function showDot7(){
    hideAllElements();
    dot7.classList.add("selected");
    document.getElementById('raproll').classList.remove("no-display");
    document.location.hash='#7';
}

function showDot8(){
    hideAllElements();
    dot8.classList.add("selected");
    document.getElementById('epopeetemporelle').classList.remove("no-display");
    document.location.hash='#8';
}

function showDot9(){
    hideAllElements();
    dot9.classList.add("selected");
    document.getElementById('popcorn').classList.remove("no-display");
    document.getElementById('model3dpopcorns').classList.remove("no-display");
    document.location.hash='#9';
}

function showDot10(){
    hideAllElements();
    dot10.classList.add("selected");
    document.getElementById('lamission').classList.remove("no-display");
    document.location.hash='#10';
}

function showDot11(){
    hideAllElements();
    dot11.classList.add("selected");
    document.getElementById('unhommepapa').classList.remove("no-display");
    document.location.hash='#11';
}

function showDot12(){
    hideAllElements();
    dot12.classList.add("selected");
    document.getElementById('spotify3d').classList.remove("no-display");
    document.location.hash='#12';
}

dot1.addEventListener('click', function (){
    showDot1();
})

dot2.addEventListener('click', function (){
    showDot2();
})

dot3.addEventListener('click', function(){
    showDot3();
})

dot4.addEventListener('click', function(){
    showDot4();
})

dot5.addEventListener('click', function(){
    showDot5();
})

dot6.addEventListener('click', function(){
    showDot6();
})

dot7.addEventListener('click', function(){
    showDot7();
})

dot8.addEventListener('click', function(){
    showDot8();
})

dot9.addEventListener('click', function(){
    showDot9();
})

dot10.addEventListener('click', function(){
    showDot10();
})

dot11.addEventListener('click', function(){
    showDot11();
})

dot12.addEventListener('click', function(){
    showDot12();
})

// CHANGEMENT PAGE ONGLET

function checkOnglet(){
    if (document.location.hash === "#2"){
        showDot2();
    }
    else if (document.location.hash === "#3"){
        showDot3();
    }
    else if (document.location.hash === "#4"){
        showDot4();
    }
    else if (document.location.hash === "#5"){
        showDot5();
    }
    else if (document.location.hash === "#6"){
        showDot6();
    }
    else if (document.location.hash === "#7"){
        showDot7();
    }
    else if (document.location.hash === "#8"){
        showDot8();
    }
    else if (document.location.hash === "#9"){
        showDot9();
    }
    else if (document.location.hash === "#10"){
        showDot10();
    }
    else if (document.location.hash === "#11"){
        showDot11();
    }
    else if (document.location.hash === "#12"){
        showDot12();
    }
}

checkOnglet()



// ANNOTATIONS 3D

    // POP CORNS

const btn3d1 = document.getElementById('btn3d-1');
const btn3d2 = document.getElementById('btn3d-2');
const btn3d3 = document.getElementById('btn3d-3');
const btn3d4 = document.getElementById('btn3d-4');
const btn3d5 = document.getElementById('btn3d-5');
const btn3d6 = document.getElementById('btn3d-6');
const btn3d7 = document.getElementById('btn3d-7');
const btn3d8 = document.getElementById('btn3d-8');
const btn3d9 = document.getElementById('btn3d-9');
const btn3d10 = document.getElementById('btn3d-10');
const btn3d11 = document.getElementById('btn3d-11');
const btn3d12 = document.getElementById('btn3d-12');

function hideAllAnnotations(){
    document.getElementById('data3d-1').style.visibility = "hidden";	
    document.getElementById('data3d-2').style.visibility = "hidden";	
    document.getElementById('data3d-3').style.visibility = "hidden";
    document.getElementById('data3d-4').style.visibility = "hidden";
    document.getElementById('data3d-5').style.visibility = "hidden";
    document.getElementById('data3d-6').style.visibility = "hidden";
    document.getElementById('data3d-7').style.visibility = "hidden";
    document.getElementById('data3d-8').style.visibility = "hidden";
    document.getElementById('data3d-9').style.visibility = "hidden";
    document.getElementById('data3d-10').style.visibility = "hidden";
    document.getElementById('data3d-11').style.visibility = "hidden";
    document.getElementById('data3d-12').style.visibility = "hidden";
};

hideAllAnnotations();

document.body.addEventListener('click', function(){
    if (btn3d3 === document.activeElement) {
        hideAllAnnotations();
        document.getElementById('data3d-3').style.visibility = "visible";
    }
    else if (btn3d2 === document.activeElement) {
        hideAllAnnotations();
        document.getElementById('data3d-2').style.visibility = "visible";
    } 
    else if (btn3d1 === document.activeElement) {
        hideAllAnnotations();
        document.getElementById('data3d-1').style.visibility = "visible";
    } 
    else if (btn3d4 === document.activeElement) {
        hideAllAnnotations();
        document.getElementById('data3d-4').style.visibility = "visible";
    } 
    else if (btn3d5 === document.activeElement) {
        hideAllAnnotations();
        document.getElementById('data3d-5').style.visibility = "visible";
    } 
    else if (btn3d6 === document.activeElement) {
        hideAllAnnotations();
        document.getElementById('data3d-6').style.visibility = "visible";
    } 
    else if (btn3d7 === document.activeElement) {
        hideAllAnnotations();
        document.getElementById('data3d-7').style.visibility = "visible";
    } 
    else if (btn3d8 === document.activeElement) {
        hideAllAnnotations();
        document.getElementById('data3d-8').style.visibility = "visible";
    } 
    else if (btn3d9 === document.activeElement) {
        hideAllAnnotations();
        document.getElementById('data3d-9').style.visibility = "visible";
    } 
    else if (btn3d10 === document.activeElement) {
        hideAllAnnotations();
        document.getElementById('data3d-10').style.visibility = "visible";
    }
    else if (btn3d11 === document.activeElement) {
        hideAllAnnotations();
        document.getElementById('data3d-11').style.visibility = "visible";
    }  
    else if (btn3d12 === document.activeElement) {
        hideAllAnnotations();
        document.getElementById('data3d-12').style.visibility = "visible";
    } 

    else {
        hideAllAnnotations();
    }
})

    // MENTAL FM

// const btn3d1_2 = document.getElementById('btn3d-2-1');
// const btn3d2_2 = document.getElementById('btn3d-2-2');
// const btn3d3_2 = document.getElementById('btn3d-2-3');
// const btn3d4_2 = document.getElementById('btn3d-2-4');
// const btn3d5_2 = document.getElementById('btn3d-2-5');
// const btn3d6_2 = document.getElementById('btn3d-2-6');
// const btn3d7_2 = document.getElementById('btn3d-2-7');
// const btn3d8_2 = document.getElementById('btn3d-2-8');
// const btn3d9_2 = document.getElementById('btn3d-2-9');
// const btn3d10_2 = document.getElementById('btn3d-2-10');
// const btn3d11_2 = document.getElementById('btn3d-2-11');
// const btn3d12_2 = document.getElementById('btn3d-2-12');

// function hideAllAnnotationsMentalfm(){
//     document.getElementById('data3d-2-1').style.visibility = "hidden";	
//     document.getElementById('data3d-2-2').style.visibility = "hidden";	
//     document.getElementById('data3d-2-3').style.visibility = "hidden";
//     document.getElementById('data3d-2-4').style.visibility = "hidden";
//     document.getElementById('data3d-2-5').style.visibility = "hidden";
//     document.getElementById('data3d-2-6').style.visibility = "hidden";
//     document.getElementById('data3d-2-7').style.visibility = "hidden";
//     document.getElementById('data3d-2-8').style.visibility = "hidden";
//     document.getElementById('data3d-2-9').style.visibility = "hidden";
//     document.getElementById('data3d-2-10').style.visibility = "hidden";
//     document.getElementById('data3d-2-11').style.visibility = "hidden";
//     document.getElementById('data3d-2-12').style.visibility = "hidden";
// };

// hideAllAnnotationsMentalfm();

// document.body.addEventListener('click', function(){
//     if (btn3d3_2 === document.activeElement) {
//         hideAllAnnotationsMentalfm();
//         document.getElementById('data3d-2-3').style.visibility = "visible";
//     }
//     else if (btn3d2_2 === document.activeElement) {
//         hideAllAnnotationsMentalfm();
//         document.getElementById('data3d-2-2').style.visibility = "visible";
//     } 
//     else if (btn3d1_2 === document.activeElement) {
//         hideAllAnnotationsMentalfm();
//         document.getElementById('data3d-2-1').style.visibility = "visible";
//     } 
//     else if (btn3d4_2 === document.activeElement) {
//         hideAllAnnotationsMentalfm();
//         document.getElementById('data3d-2-4').style.visibility = "visible";
//     } 
//     else if (btn3d5_2 === document.activeElement) {
//         hideAllAnnotationsMentalfm();
//         document.getElementById('data3d-2-5').style.visibility = "visible";
//     } 
//     else if (btn3d6_2 === document.activeElement) {
//         hideAllAnnotationsMentalfm();
//         document.getElementById('data3d-2-6').style.visibility = "visible";
//     } 
//     else if (btn3d7_2 === document.activeElement) {
//         hideAllAnnotationsMentalfm();
//         document.getElementById('data3d-2-7').style.visibility = "visible";
//     } 
//     else if (btn3d8_2 === document.activeElement) {
//         hideAllAnnotationsMentalfm();
//         document.getElementById('data3d-2-8').style.visibility = "visible";
//     } 
//     else if (btn3d9_2 === document.activeElement) {
//         hideAllAnnotationsMentalfm();
//         document.getElementById('data3d-2-9').style.visibility = "visible";
//     } 
//     else if (btn3d10_2 === document.activeElement) {
//         hideAllAnnotationsMentalfm();
//         document.getElementById('data3d-2-10').style.visibility = "visible";
//     }
//     else if (btn3d11_2 === document.activeElement) {
//         hideAllAnnotationsMentalfm();
//         document.getElementById('data3d-2-11').style.visibility = "visible";
//     }  
//     else if (btn3d12_2 === document.activeElement) {
//         hideAllAnnotationsMentalfm();
//         document.getElementById('data3d-2-12').style.visibility = "visible";
//     } 

//     else {
//         hideAllAnnotationsMentalfm();
//     }
// })

// Personnalisation iframe

// document.onload = function() {
//     let frameElement = document.getElementById("iframegodcast");
//     let doc = frameElement.contentDocument;
//     doc.body.innerHTML = doc.body.innerHTML + '<style>.embed-container {background-color: #F6F7F9};</style>';
//   }

// console.log(document.getElementById("iframegodcast"));