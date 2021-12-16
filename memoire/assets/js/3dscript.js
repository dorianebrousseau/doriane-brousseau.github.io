// // Handles loading the events for <model-viewer>'s slotted progress bar
// const onProgress = (event) => {
//   const progressBar = event.target.querySelector('.progress-bar');
//   const updatingBar = event.target.querySelector('.update-bar');
//   updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
//   if (event.detail.totalProgress === 1) {
//     progressBar.classList.add('hide');
//   } else {
//     progressBar.classList.remove('hide');
//     if (event.detail.totalProgress === 0) {
//       event.target.querySelector('.center-pre-prompt').classList.add('hide');
//     }
//   }
// };
// document.querySelector('model-viewer').addEventListener('progress', onProgress);

// Matériels

const model3dGodcast = document.getElementById("model3dgodcast");
const model3dMentalFM = document.getElementById("model3dmentalfm");
const model3dPopCorns = document.getElementById("model3dpopcorns");
const model3dHelloDemain = document.getElementById("model3dhellodemain");
const model3dDerniereSeance = document.getElementById("model3dderniereseance");
const model3dLeNuage = document.getElementById("model3dlenuage");
const model3dAppelAbysses = document.getElementById("model3dappelabysses");
const model3dRapRoll = document.getElementById("model3draproll");
const model3dEpopeeTemporelle = document.getElementById("model3depopeetemporelle");
const model3dLaMission = document.getElementById("model3dlamission");
const model3dUnHomme = document.getElementById("model3dunhomme");
const model3dSpotify = document.getElementById("model3dspotify");


model3dMentalFM.addEventListener("load", (ev) => {
  let material = model3dMentalFM.model.materials[0];
  material.pbrMetallicRoughness.setBaseColorFactor([0.7294, 0.5333, 0.0392]);
});

model3dGodcast.addEventListener("load", (ev) => {
  model3dGodcast.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002]);
  model3dGodcast.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
});

model3dPopCorns.addEventListener("load", (ev) => {
  let material = model3dPopCorns.model.materials[0];
  material.pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002]);
});

model3dDerniereSeance.addEventListener("load", (ev) => {
  let material = model3dDerniereSeance.model.materials[0];
  material.pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002]);
});

model3dHelloDemain.addEventListener("load", (ev) => {
  let material = model3dHelloDemain.model.materials[0];
  material.pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002]);
});

model3dLeNuage.addEventListener("load", (ev) => {
  let material = model3dLeNuage.model.materials[0];
  material.pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002]);
});

model3dAppelAbysses.addEventListener("load", (ev) => {
  let material = model3dAppelAbysses.model.materials[0];
  material.pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002]);
});

model3dRapRoll.addEventListener("load", (ev) => {
  let material = model3dRapRoll.model.materials[0];
  material.pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002]);
});

model3dEpopeeTemporelle.addEventListener("load", (ev) => {
  let material = model3dEpopeeTemporelle.model.materials[0];
  material.pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002]);
});

model3dLaMission.addEventListener("load", (ev) => {
  let material = model3dLaMission.model.materials[0];
  material.pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002]);
});

model3dUnHomme.addEventListener("load", (ev) => {
  let material = model3dUnHomme.model.materials[0];
  material.pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002]);
});

model3dSpotify.addEventListener("load", (ev) => {
  let material = model3dSpotify.model.materials[0];
  material.pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002]);
});

// select ball - Godcast

const annotationIntroduction = document.getElementById('annotation-introduction');
const annotationPersonnages = document.getElementById('annotation-personnages');
const annotationNarrateur = document.getElementById('annotation-narrateur');
const annotationSilence = document.getElementById('annotation-silence');
const annotationNarration = document.getElementById('annotation-narration');
const annotationDialogue = document.getElementById('annotation-dialogue');
const annotationSon3d = document.getElementById('annotation-son3d');
const annotationEffetsSonores = document.getElementById('annotation-effetssonores');
const annotationVoix = document.getElementById('annotation-voix');
const annotationBruitage = document.getElementById('annotation-bruitage');
const annotationMusique = document.getElementById('annotation-musique');
const annotationIsolement = document.getElementById('annotation-isolement');


function HideAllAnnotationsGodcast(){
  annotationIntroduction.classList.add("no-display");
  annotationPersonnages.classList.add("no-display");
  annotationSilence.classList.add("no-display");
  annotationSon3d.classList.add("no-display");
  annotationVoix.classList.add("no-display");
  annotationNarrateur.classList.add("no-display");
  annotationNarration.classList.add("no-display");
  annotationDialogue.classList.add("no-display");
  annotationEffetsSonores.classList.add("no-display");
  annotationBruitage.classList.add("no-display");
  annotationMusique.classList.add("no-display");
  annotationIsolement.classList.add("no-display");


  // personnages
  model3dGodcast.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narrateur
  model3dGodcast.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // silence
  model3dGodcast.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narration
  model3dGodcast.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // dialogue
  model3dGodcast.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // son3d
  model3dGodcast.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // effets sonores
  model3dGodcast.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // voix
  model3dGodcast.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // bruitage
  model3dGodcast.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // musique
  model3dGodcast.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // intro
  model3dGodcast.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // isolement
  model3dGodcast.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
};

model3dGodcast.addEventListener("load", () => {
  HideAllAnnotationsGodcast();

  const changeColor = async (event) => {
    let material = model3dGodcast.materialFromPoint(event.clientX, event.clientY);

    // définir les 12 materiel
    let material0 = model3dGodcast.model.materials[0];
    let material1 = model3dGodcast.model.materials[1];
    let material2 = model3dGodcast.model.materials[2];
    let material3 = model3dGodcast.model.materials[3];
    let material4 = model3dGodcast.model.materials[4];
    let material5 = model3dGodcast.model.materials[5];
    let material6 = model3dGodcast.model.materials[6];
    let material7 = model3dGodcast.model.materials[7];
    let material8 = model3dGodcast.model.materials[8];
    let material9 = model3dGodcast.model.materials[9];
    let material10 = model3dGodcast.model.materials[10];
    let material11 = model3dGodcast.model.materials[11];
    

    // affichage et masquage des annotations
    if(material === material1) {
      if (annotationNarrateur.classList.contains('no-display')) {
          HideAllAnnotationsGodcast();
          annotationNarrateur.classList.remove('no-display');
          model3dGodcast.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsGodcast();
        
      }
    }

    if(material === material0) {
      if (annotationPersonnages.classList.contains('no-display')) {
        HideAllAnnotationsGodcast();
        annotationPersonnages.classList.remove('no-display');
        model3dGodcast.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
      HideAllAnnotationsGodcast();
    }
    }

    if(material === material2) {
      if (annotationSilence.classList.contains('no-display')) {
          HideAllAnnotationsGodcast();
          annotationSilence.classList.remove('no-display');
          model3dGodcast.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsGodcast();
        
      }
    }

    if(material === material3) {
      if (annotationNarration.classList.contains('no-display')) {
          HideAllAnnotationsGodcast();
          annotationNarration.classList.remove('no-display');
          model3dGodcast.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsGodcast();
        
      }
    }

    if(material === material4) {
      if (annotationDialogue.classList.contains('no-display')) {
          HideAllAnnotationsGodcast();
          annotationDialogue.classList.remove('no-display');
          model3dGodcast.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsGodcast();
        
      }
    }

    if(material === material5) {
      if (annotationSon3d.classList.contains('no-display')) {
          HideAllAnnotationsGodcast();
          annotationSon3d.classList.remove('no-display');
          model3dGodcast.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsGodcast();
        
      }
    }

    if(material === material6) {
      if (annotationEffetsSonores.classList.contains('no-display')) {
          HideAllAnnotationsGodcast();
          annotationEffetsSonores.classList.remove('no-display');
          model3dGodcast.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsGodcast();
        
      }
    }

    if(material === material7) {
      if (annotationVoix.classList.contains('no-display')) {
          HideAllAnnotationsGodcast();
          annotationVoix.classList.remove('no-display');
          model3dGodcast.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsGodcast();
        
      }
    }

    if(material === material8) {
      if (annotationBruitage.classList.contains('no-display')) {
          HideAllAnnotationsGodcast();
          annotationBruitage.classList.remove('no-display');
          model3dGodcast.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsGodcast();
        
      }
    }

    if(material === material9) {
      if (annotationMusique.classList.contains('no-display')) {
          HideAllAnnotationsGodcast();
          annotationMusique.classList.remove('no-display');
          model3dGodcast.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsGodcast();
        
      }
    }

    if(material === material10) {
      if (annotationIntroduction.classList.contains('no-display')) {
          HideAllAnnotationsGodcast();
          annotationIntroduction.classList.remove('no-display');
          model3dGodcast.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsGodcast();
        
      }
    }

    if(material === material11) {
      if (annotationIsolement.classList.contains('no-display')) {
          HideAllAnnotationsGodcast();
          annotationIsolement.classList.remove('no-display');
          model3dGodcast.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsGodcast();
        
      }
    }

  }

  model3dGodcast.addEventListener("click", changeColor);

});



// select ball - Mental FM

function HideAllAnnotationsMentalFM(){
  annotationIntroduction.classList.add("no-display");
  annotationPersonnages.classList.add("no-display");
  annotationSilence.classList.add("no-display");
  annotationSon3d.classList.add("no-display");
  annotationVoix.classList.add("no-display");
  annotationNarrateur.classList.add("no-display");
  annotationNarration.classList.add("no-display");
  annotationDialogue.classList.add("no-display");
  annotationEffetsSonores.classList.add("no-display");
  annotationBruitage.classList.add("no-display");
  annotationMusique.classList.add("no-display");
  annotationIsolement.classList.add("no-display");

  // personnages
  model3dmentalfm.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narrateur
  model3dmentalfm.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // silence
  model3dmentalfm.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narration
  model3dmentalfm.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // dialogue
  model3dmentalfm.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // son3d
  model3dmentalfm.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // effets sonores
  model3dmentalfm.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // voix
  model3dmentalfm.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // bruitage
  model3dmentalfm.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // musique
  model3dmentalfm.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // intro
  model3dmentalfm.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // isolement
  model3dmentalfm.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  
};

model3dmentalfm.addEventListener("load", () => {
  HideAllAnnotationsMentalFM();

  const changeColorMentalFm = async (event) => {
    let materialMentalFm = model3dmentalfm.materialFromPoint(event.clientX, event.clientY);

    // définir les 12 materiel
    let material0MentalFm = model3dmentalfm.model.materials[0];
    let material1MentalFm = model3dmentalfm.model.materials[1];
    let material2MentalFm = model3dmentalfm.model.materials[2];
    let material3MentalFm = model3dmentalfm.model.materials[3];
    let material4MentalFm = model3dmentalfm.model.materials[4];
    let material5MentalFm = model3dmentalfm.model.materials[5];
    let material6MentalFm = model3dmentalfm.model.materials[6];
    let material7MentalFm = model3dmentalfm.model.materials[7];
    let material8MentalFm = model3dmentalfm.model.materials[8];
    let material9MentalFm = model3dmentalfm.model.materials[9];
    let material10MentalFm = model3dmentalfm.model.materials[10];
    let material11MentalFm = model3dmentalfm.model.materials[11];
    

    // affichage et masquage des annotations
    if(materialMentalFm === material1MentalFm) {
      if (annotationNarrateur.classList.contains('no-display')) {
        HideAllAnnotationsMentalFM();
          annotationNarrateur.classList.remove('no-display');
          model3dmentalfm.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsMentalFM();
        
      }
    }

    if(materialMentalFm === material0MentalFm) {
      if (annotationPersonnages.classList.contains('no-display')) {
        HideAllAnnotationsMentalFM();
        annotationPersonnages.classList.remove('no-display');
        model3dmentalfm.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
      HideAllAnnotationsMentalFM();
    }
    }

    if(materialMentalFm === material2MentalFm) {
      if (annotationSilence.classList.contains('no-display')) {
        HideAllAnnotationsMentalFM();
          annotationSilence.classList.remove('no-display');
          model3dmentalfm.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsMentalFM();
        
      }
    }

    if(materialMentalFm === material3MentalFm) {
      if (annotationNarration.classList.contains('no-display')) {
        HideAllAnnotationsMentalFM();
          annotationNarration.classList.remove('no-display');
          model3dmentalfm.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsMentalFM();
        
      }
    }

    if(materialMentalFm === material4MentalFm) {
      if (annotationDialogue.classList.contains('no-display')) {
        HideAllAnnotationsMentalFM();
          annotationDialogue.classList.remove('no-display');
          model3dmentalfm.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsMentalFM();
        
      }
    }

    if(materialMentalFm === material5MentalFm) {
      if (annotationSon3d.classList.contains('no-display')) {
        HideAllAnnotationsMentalFM();
          annotationSon3d.classList.remove('no-display');
          model3dmentalfm.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsMentalFM();
        
      }
    }

    if(materialMentalFm === material6MentalFm) {
      if (annotationEffetsSonores.classList.contains('no-display')) {
        HideAllAnnotationsMentalFM();
          annotationEffetsSonores.classList.remove('no-display');
          model3dmentalfm.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsMentalFM();
        
      }
    }

    if(materialMentalFm === material7MentalFm) {
      if (annotationVoix.classList.contains('no-display')) {
        HideAllAnnotationsMentalFM();
          annotationVoix.classList.remove('no-display');
          model3dmentalfm.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsMentalFM();
        
      }
    }

    if(materialMentalFm === material8MentalFm) {
      if (annotationBruitage.classList.contains('no-display')) {
        HideAllAnnotationsMentalFM();
          annotationBruitage.classList.remove('no-display');
          model3dmentalfm.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsMentalFM();
        
      }
    }

    if(materialMentalFm === material9MentalFm) {
      if (annotationMusique.classList.contains('no-display')) {
        HideAllAnnotationsMentalFM();
          annotationMusique.classList.remove('no-display');
          model3dmentalfm.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsMentalFM();
        
      }
    }

    if(materialMentalFm === material10MentalFm) {
      if (annotationIntroduction.classList.contains('no-display')) {
        HideAllAnnotationsMentalFM();
          annotationIntroduction.classList.remove('no-display');
          model3dmentalfm.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsMentalFM();
        
      }
    }

    if(materialMentalFm === material11MentalFm) {
      if (annotationIsolement.classList.contains('no-display')) {
        HideAllAnnotationsMentalFM();
          annotationIsolement.classList.remove('no-display');
          model3dmentalfm.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsMentalFM();
        
      }
    }

  }

  model3dmentalfm.addEventListener("click", changeColorMentalFm);

});

// select ball - PopCorn

function HideAllAnnotationsPopCorns(){
  annotationIntroduction.classList.add("no-display");
  annotationPersonnages.classList.add("no-display");
  annotationSilence.classList.add("no-display");
  annotationSon3d.classList.add("no-display");
  annotationVoix.classList.add("no-display");
  annotationNarrateur.classList.add("no-display");
  annotationNarration.classList.add("no-display");
  annotationDialogue.classList.add("no-display");
  annotationEffetsSonores.classList.add("no-display");
  annotationBruitage.classList.add("no-display");
  annotationMusique.classList.add("no-display");
  annotationIsolement.classList.add("no-display");


  // personnages
  model3dpopcorns.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narrateur
  model3dpopcorns.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // silence
  model3dpopcorns.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narration
  model3dpopcorns.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // dialogue
  model3dpopcorns.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // son3d
  model3dpopcorns.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // effets sonores
  model3dpopcorns.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // voix
  model3dpopcorns.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // bruitage
  model3dpopcorns.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // musique
  model3dpopcorns.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // intro
  model3dpopcorns.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // isolement
  model3dpopcorns.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  
};

model3dpopcorns.addEventListener("load", () => {
  HideAllAnnotationsPopCorns();

  const changeColorPopCorns = async (event) => {
    let materialPopCorns = model3dpopcorns.materialFromPoint(event.clientX, event.clientY);

    // définir les 12 materiel
    let material0PopCorns = model3dpopcorns.model.materials[0];
    let material1PopCorns = model3dpopcorns.model.materials[1];
    let material2PopCorns = model3dpopcorns.model.materials[2];
    let material3PopCorns = model3dpopcorns.model.materials[3];
    let material4PopCorns = model3dpopcorns.model.materials[4];
    let material5PopCorns = model3dpopcorns.model.materials[5];
    let material6PopCorns = model3dpopcorns.model.materials[6];
    let material7PopCorns = model3dpopcorns.model.materials[7];
    let material8PopCorns = model3dpopcorns.model.materials[8];
    let material9PopCorns = model3dpopcorns.model.materials[9];
    let material10PopCorns = model3dpopcorns.model.materials[10];
    let material11PopCorns = model3dpopcorns.model.materials[11];
    

    // affichage et masquage des annotations
    if(materialPopCorns === material1PopCorns) {
      if (annotationNarrateur.classList.contains('no-display')) {
        HideAllAnnotationsPopCorns();
          annotationNarrateur.classList.remove('no-display');
          model3dpopcorns.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsPopCorns();
        
      }
    }

    if(materialPopCorns === material0PopCorns) {
      if (annotationPersonnages.classList.contains('no-display')) {
        HideAllAnnotationsPopCorns();
        annotationPersonnages.classList.remove('no-display');
        model3dpopcorns.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
      HideAllAnnotationsPopCorns();
    }
    }

    if(materialPopCorns === material2PopCorns) {
      if (annotationSilence.classList.contains('no-display')) {
        HideAllAnnotationsPopCorns();
          annotationSilence.classList.remove('no-display');
          model3dpopcorns.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsPopCorns();
        
      }
    }

    if(materialPopCorns === material3PopCorns) {
      if (annotationNarration.classList.contains('no-display')) {
        HideAllAnnotationsPopCorns();
          annotationNarration.classList.remove('no-display');
          model3dpopcorns.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsPopCorns();
        
      }
    }

    if(materialPopCorns === material4PopCorns) {
      if (annotationDialogue.classList.contains('no-display')) {
        HideAllAnnotationsPopCorns();
          annotationDialogue.classList.remove('no-display');
          model3dpopcorns.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsPopCorns();
        
      }
    }

    if(materialPopCorns === material5PopCorns) {
      if (annotationSon3d.classList.contains('no-display')) {
        HideAllAnnotationsPopCorns();
          annotationSon3d.classList.remove('no-display');
          model3dpopcorns.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsPopCorns();
        
      }
    }

    if(materialPopCorns === material6PopCorns) {
      if (annotationEffetsSonores.classList.contains('no-display')) {
        HideAllAnnotationsPopCorns();
          annotationEffetsSonores.classList.remove('no-display');
          model3dpopcorns.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsPopCorns();
        
      }
    }

    if(materialPopCorns === material7PopCorns) {
      if (annotationVoix.classList.contains('no-display')) {
        HideAllAnnotationsPopCorns();
          annotationVoix.classList.remove('no-display');
          model3dpopcorns.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsPopCorns();
        
      }
    }

    if(materialPopCorns === material8PopCorns) {
      if (annotationBruitage.classList.contains('no-display')) {
        HideAllAnnotationsPopCorns();
          annotationBruitage.classList.remove('no-display');
          model3dpopcorns.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsPopCorns();
        
      }
    }

    if(materialPopCorns === material9PopCorns) {
      if (annotationMusique.classList.contains('no-display')) {
        HideAllAnnotationsPopCorns();
          annotationMusique.classList.remove('no-display');
          model3dpopcorns.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsPopCorns();
        
      }
    }

    if(materialPopCorns === material10PopCorns) {
      if (annotationIntroduction.classList.contains('no-display')) {
        HideAllAnnotationsPopCorns();
          annotationIntroduction.classList.remove('no-display');
          model3dpopcorns.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsPopCorns();
        
      }
    }

    if(materialPopCorns === material11PopCorns) {
      if (annotationIsolement.classList.contains('no-display')) {
        HideAllAnnotationsPopCorns();
          annotationIsolement.classList.remove('no-display');
          model3dpopcorns.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsPopCorns();
        
      }
    }

  }

  model3dpopcorns.addEventListener("click", changeColorPopCorns);

});

// Select material La Dernière Séance

function HideAllAnnotationsDerniereSeance(){
  annotationIntroduction.classList.add("no-display");
  annotationPersonnages.classList.add("no-display");
  annotationSilence.classList.add("no-display");
  annotationSon3d.classList.add("no-display");
  annotationVoix.classList.add("no-display");
  annotationNarrateur.classList.add("no-display");
  annotationNarration.classList.add("no-display");
  annotationDialogue.classList.add("no-display");
  annotationEffetsSonores.classList.add("no-display");
  annotationBruitage.classList.add("no-display");
  annotationMusique.classList.add("no-display");
  annotationIsolement.classList.add("no-display");


  // personnages
  model3dDerniereSeance.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narrateur
  model3dDerniereSeance.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // silence
  model3dDerniereSeance.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narration
  model3dDerniereSeance.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // dialogue
  model3dDerniereSeance.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // son3d
  model3dDerniereSeance.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // effets sonores
  model3dDerniereSeance.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // voix
  model3dDerniereSeance.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // bruitage
  model3dDerniereSeance.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // musique
  model3dDerniereSeance.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // intro
  model3dDerniereSeance.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // isolement
  model3dDerniereSeance.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  
};

model3dDerniereSeance.addEventListener("load", () => {
  HideAllAnnotationsDerniereSeance();

  const changeColorDerniereSeance = async (event) => {
    let materialDerniereSeance = model3dDerniereSeance.materialFromPoint(event.clientX, event.clientY);

    // définir les 12 materiel
    let material0DerniereSeance = model3dDerniereSeance.model.materials[0];
    let material1DerniereSeance = model3dDerniereSeance.model.materials[1];
    let material2DerniereSeance = model3dDerniereSeance.model.materials[2];
    let material3DerniereSeance = model3dDerniereSeance.model.materials[3];
    let material4DerniereSeance = model3dDerniereSeance.model.materials[4];
    let material5DerniereSeance = model3dDerniereSeance.model.materials[5];
    let material6DerniereSeance = model3dDerniereSeance.model.materials[6];
    let material7DerniereSeance = model3dDerniereSeance.model.materials[7];
    let material8DerniereSeance = model3dDerniereSeance.model.materials[8];
    let material9DerniereSeance = model3dDerniereSeance.model.materials[9];
    let material10DerniereSeance = model3dDerniereSeance.model.materials[10];
    let material11DerniereSeance = model3dDerniereSeance.model.materials[11];
    

    // affichage et masquage des annotations
    if(materialDerniereSeance === material1DerniereSeance) {
      if (annotationNarrateur.classList.contains('no-display')) {
        HideAllAnnotationsDerniereSeance();
          annotationNarrateur.classList.remove('no-display');
          model3dDerniereSeance.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsDerniereSeance();
        
      }
    }

    if(materialDerniereSeance === material0DerniereSeance) {
      if (annotationPersonnages.classList.contains('no-display')) {
        HideAllAnnotationsDerniereSeance();
        annotationPersonnages.classList.remove('no-display');
        model3dDerniereSeance.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
      HideAllAnnotationsDerniereSeance();
    }
    }

    if(materialDerniereSeance === material2DerniereSeance) {
      if (annotationSilence.classList.contains('no-display')) {
        HideAllAnnotationsDerniereSeance();
          annotationSilence.classList.remove('no-display');
          model3dDerniereSeance.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsDerniereSeance();
        
      }
    }

    if(materialDerniereSeance === material3DerniereSeance) {
      if (annotationNarration.classList.contains('no-display')) {
        HideAllAnnotationsDerniereSeance();
          annotationNarration.classList.remove('no-display');
          model3dDerniereSeance.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsDerniereSeance();
        
      }
    }

    if(materialDerniereSeance === material4DerniereSeance) {
      if (annotationDialogue.classList.contains('no-display')) {
        HideAllAnnotationsDerniereSeance();
          annotationDialogue.classList.remove('no-display');
          model3dDerniereSeance.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsDerniereSeance();
        
      }
    }

    if(materialDerniereSeance === material5DerniereSeance) {
      if (annotationSon3d.classList.contains('no-display')) {
        HideAllAnnotationsDerniereSeance();
          annotationSon3d.classList.remove('no-display');
          model3dDerniereSeance.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsDerniereSeance();
        
      }
    }

    if(materialDerniereSeance === material6DerniereSeance) {
      if (annotationEffetsSonores.classList.contains('no-display')) {
        HideAllAnnotationsDerniereSeance();
          annotationEffetsSonores.classList.remove('no-display');
          model3dDerniereSeance.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsDerniereSeance();
        
      }
    }

    if(materialDerniereSeance === material7DerniereSeance) {
      if (annotationVoix.classList.contains('no-display')) {
        HideAllAnnotationsDerniereSeance();
          annotationVoix.classList.remove('no-display');
          model3dDerniereSeance.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsDerniereSeance();
        
      }
    }

    if(materialDerniereSeance === material8DerniereSeance) {
      if (annotationBruitage.classList.contains('no-display')) {
        HideAllAnnotationsDerniereSeance();
          annotationBruitage.classList.remove('no-display');
          model3dDerniereSeance.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsDerniereSeance();
        
      }
    }

    if(materialDerniereSeance === material9DerniereSeance) {
      if (annotationMusique.classList.contains('no-display')) {
        HideAllAnnotationsDerniereSeance();
          annotationMusique.classList.remove('no-display');
          model3dDerniereSeance.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsDerniereSeance();
        
      }
    }

    if(materialDerniereSeance === material10DerniereSeance) {
      if (annotationIntroduction.classList.contains('no-display')) {
        HideAllAnnotationsDerniereSeance();
          annotationIntroduction.classList.remove('no-display');
          model3dDerniereSeance.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsDerniereSeance();
        
      }
    }

    if(materialDerniereSeance === material11DerniereSeance) {
      if (annotationIsolement.classList.contains('no-display')) {
        HideAllAnnotationsDerniereSeance();
          annotationIsolement.classList.remove('no-display');
          model3dDerniereSeance.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsDerniereSeance();
        
      }
    }

  }

  model3dDerniereSeance.addEventListener("click", changeColorDerniereSeance);

});


// Select material HELLO DEMAIN


function HideAllAnnotationsHelloDemain(){
  annotationIntroduction.classList.add("no-display");
  annotationPersonnages.classList.add("no-display");
  annotationSilence.classList.add("no-display");
  annotationSon3d.classList.add("no-display");
  annotationVoix.classList.add("no-display");
  annotationNarrateur.classList.add("no-display");
  annotationNarration.classList.add("no-display");
  annotationDialogue.classList.add("no-display");
  annotationEffetsSonores.classList.add("no-display");
  annotationBruitage.classList.add("no-display");
  annotationMusique.classList.add("no-display");
  annotationIsolement.classList.add("no-display");


  // personnages
  model3dHelloDemain.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narrateur
  model3dHelloDemain.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // silence
  model3dHelloDemain.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narration
  model3dHelloDemain.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // dialogue
  model3dHelloDemain.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // son3d
  model3dHelloDemain.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // effets sonores
  model3dHelloDemain.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // voix
  model3dHelloDemain.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // bruitage
  model3dHelloDemain.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // musique
  model3dHelloDemain.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // intro
  model3dHelloDemain.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // isolement
  model3dHelloDemain.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  
};

model3dHelloDemain.addEventListener("load", () => {
  HideAllAnnotationsHelloDemain();

  const changeColorHelloDemain = async (event) => {
    let materialHelloDemain = model3dHelloDemain.materialFromPoint(event.clientX, event.clientY);

    // définir les 12 materiel
    let material0HelloDemain = model3dHelloDemain.model.materials[0];
    let material1HelloDemain = model3dHelloDemain.model.materials[1];
    let material2HelloDemain = model3dHelloDemain.model.materials[2];
    let material3HelloDemain = model3dHelloDemain.model.materials[3];
    let material4HelloDemain = model3dHelloDemain.model.materials[4];
    let material5HelloDemain = model3dHelloDemain.model.materials[5];
    let material6HelloDemain = model3dHelloDemain.model.materials[6];
    let material7HelloDemain = model3dHelloDemain.model.materials[7];
    let material8HelloDemain = model3dHelloDemain.model.materials[8];
    let material9HelloDemain = model3dHelloDemain.model.materials[9];
    let material10HelloDemain = model3dHelloDemain.model.materials[10];
    let material11HelloDemain = model3dHelloDemain.model.materials[11];
    

    // affichage et masquage des annotations
    if(materialHelloDemain === material1HelloDemain) {
      if (annotationNarrateur.classList.contains('no-display')) {
        HideAllAnnotationsHelloDemain();
          annotationNarrateur.classList.remove('no-display');
          model3dHelloDemain.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsHelloDemain();
        
      }
    }

    if(materialHelloDemain === material0HelloDemain) {
      if (annotationPersonnages.classList.contains('no-display')) {
        HideAllAnnotationsHelloDemain();
        annotationPersonnages.classList.remove('no-display');
        model3dHelloDemain.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
      HideAllAnnotationsHelloDemain();
    }
    }

    if(materialHelloDemain === material2HelloDemain) {
      if (annotationSilence.classList.contains('no-display')) {
        HideAllAnnotationsHelloDemain();
          annotationSilence.classList.remove('no-display');
          model3dHelloDemain.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsHelloDemain();
        
      }
    }

    if(materialHelloDemain === material3HelloDemain) {
      if (annotationNarration.classList.contains('no-display')) {
        HideAllAnnotationsHelloDemain();
          annotationNarration.classList.remove('no-display');
          model3dHelloDemain.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsHelloDemain();
        
      }
    }

    if(materialHelloDemain === material4HelloDemain) {
      if (annotationDialogue.classList.contains('no-display')) {
        HideAllAnnotationsHelloDemain();
          annotationDialogue.classList.remove('no-display');
          model3dHelloDemain.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsHelloDemain();
        
      }
    }

    if(materialHelloDemain === material5HelloDemain) {
      if (annotationSon3d.classList.contains('no-display')) {
        HideAllAnnotationsHelloDemain();
          annotationSon3d.classList.remove('no-display');
          model3dHelloDemain.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsHelloDemain();
        
      }
    }

    if(materialHelloDemain === material6HelloDemain) {
      if (annotationEffetsSonores.classList.contains('no-display')) {
        HideAllAnnotationsHelloDemain();
          annotationEffetsSonores.classList.remove('no-display');
          model3dHelloDemain.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsHelloDemain();
        
      }
    }

    if(materialHelloDemain === material7HelloDemain) {
      if (annotationVoix.classList.contains('no-display')) {
        HideAllAnnotationsHelloDemain();
          annotationVoix.classList.remove('no-display');
          model3dHelloDemain.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsHelloDemain();
        
      }
    }

    if(materialHelloDemain === material8HelloDemain) {
      if (annotationBruitage.classList.contains('no-display')) {
        HideAllAnnotationsHelloDemain();
          annotationBruitage.classList.remove('no-display');
          model3dHelloDemain.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsHelloDemain();
        
      }
    }

    if(materialHelloDemain === material9HelloDemain) {
      if (annotationMusique.classList.contains('no-display')) {
        HideAllAnnotationsHelloDemain();
          annotationMusique.classList.remove('no-display');
          model3dHelloDemain.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsHelloDemain();
        
      }
    }

    if(materialHelloDemain === material10HelloDemain) {
      if (annotationIntroduction.classList.contains('no-display')) {
        HideAllAnnotationsHelloDemain();
          annotationIntroduction.classList.remove('no-display');
          model3dHelloDemain.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsHelloDemain();
        
      }
    }

    if(materialHelloDemain === material11HelloDemain) {
      if (annotationIsolement.classList.contains('no-display')) {
        HideAllAnnotationsHelloDemain();
          annotationIsolement.classList.remove('no-display');
          model3dHelloDemain.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsHelloDemain();
        
      }
    }

  }

  model3dHelloDemain.addEventListener("click", changeColorHelloDemain);

});

// Select material Le Nuage


function HideAllAnnotationsLeNuage(){
  annotationIntroduction.classList.add("no-display");
  annotationPersonnages.classList.add("no-display");
  annotationSilence.classList.add("no-display");
  annotationSon3d.classList.add("no-display");
  annotationVoix.classList.add("no-display");
  annotationNarrateur.classList.add("no-display");
  annotationNarration.classList.add("no-display");
  annotationDialogue.classList.add("no-display");
  annotationEffetsSonores.classList.add("no-display");
  annotationBruitage.classList.add("no-display");
  annotationMusique.classList.add("no-display");
  annotationIsolement.classList.add("no-display");


  // personnages
  model3dLeNuage.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narrateur
  model3dLeNuage.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // silence
  model3dLeNuage.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narration
  model3dLeNuage.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // dialogue
  model3dLeNuage.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // son3d
  model3dLeNuage.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // effets sonores
  model3dLeNuage.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // voix
  model3dLeNuage.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // bruitage
  model3dLeNuage.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // musique
  model3dLeNuage.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // intro
  model3dLeNuage.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // isolement
  model3dLeNuage.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  
};

model3dLeNuage.addEventListener("load", () => {
  HideAllAnnotationsLeNuage();

  const changeColorLeNuage = async (event) => {
    let materialLeNuage = model3dLeNuage.materialFromPoint(event.clientX, event.clientY);

    // définir les 12 materiel
    let material0LeNuage = model3dLeNuage.model.materials[0];
    let material1LeNuage = model3dLeNuage.model.materials[1];
    let material2LeNuage = model3dLeNuage.model.materials[2];
    let material3LeNuage = model3dLeNuage.model.materials[3];
    let material4LeNuage = model3dLeNuage.model.materials[4];
    let material5LeNuage = model3dLeNuage.model.materials[5];
    let material6LeNuage = model3dLeNuage.model.materials[6];
    let material7LeNuage = model3dLeNuage.model.materials[7];
    let material8LeNuage = model3dLeNuage.model.materials[8];
    let material9LeNuage = model3dLeNuage.model.materials[9];
    let material10LeNuage = model3dLeNuage.model.materials[10];
    let material11LeNuage = model3dLeNuage.model.materials[11];
    

    // affichage et masquage des annotations
    if(materialLeNuage === material1LeNuage) {
      if (annotationNarrateur.classList.contains('no-display')) {
        HideAllAnnotationsLeNuage();
          annotationNarrateur.classList.remove('no-display');
          model3dLeNuage.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLeNuage();
      }
    }

    if(materialLeNuage === material0LeNuage) {
      if (annotationPersonnages.classList.contains('no-display')) {
        HideAllAnnotationsLeNuage();
        annotationPersonnages.classList.remove('no-display');
        model3dLeNuage.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
      HideAllAnnotationsLeNuage();
    }
    }

    if(materialLeNuage === material2LeNuage) {
      if (annotationSilence.classList.contains('no-display')) {
        HideAllAnnotationsLeNuage();
          annotationSilence.classList.remove('no-display');
          model3dLeNuage.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLeNuage();
      }
    }

    if(materialLeNuage === material3LeNuage) {
      if (annotationNarration.classList.contains('no-display')) {
        HideAllAnnotationsLeNuage();
          annotationNarration.classList.remove('no-display');
          model3dLeNuage.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLeNuage();
      }
    }

    if(materialLeNuage === material4LeNuage) {
      if (annotationDialogue.classList.contains('no-display')) {
        HideAllAnnotationsLeNuage();
          annotationDialogue.classList.remove('no-display');
          model3dLeNuage.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLeNuage();
      }
    }

    if(materialLeNuage === material5LeNuage) {
      if (annotationSon3d.classList.contains('no-display')) {
        HideAllAnnotationsLeNuage();
          annotationSon3d.classList.remove('no-display');
          model3dLeNuage.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLeNuage();
      }
    }

    if(materialLeNuage === material6LeNuage) {
      if (annotationEffetsSonores.classList.contains('no-display')) {
        HideAllAnnotationsLeNuage();
          annotationEffetsSonores.classList.remove('no-display');
          model3dLeNuage.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLeNuage();
      }
    }

    if(materialLeNuage === material7LeNuage) {
      if (annotationVoix.classList.contains('no-display')) {
        HideAllAnnotationsLeNuage();
          annotationVoix.classList.remove('no-display');
          model3dLeNuage.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLeNuage();
      }
    }

    if(materialLeNuage === material8LeNuage) {
      if (annotationBruitage.classList.contains('no-display')) {
        HideAllAnnotationsLeNuage();
          annotationBruitage.classList.remove('no-display');
          model3dLeNuage.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLeNuage();
      }
    }

    if(materialLeNuage === material9LeNuage) {
      if (annotationMusique.classList.contains('no-display')) {
        HideAllAnnotationsLeNuage();
          annotationMusique.classList.remove('no-display');
          model3dLeNuage.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLeNuage();
      }
    }

    if(materialLeNuage === material10LeNuage) {
      if (annotationIntroduction.classList.contains('no-display')) {
        HideAllAnnotationsLeNuage();
          annotationIntroduction.classList.remove('no-display');
          model3dLeNuage.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLeNuage();
      }
    }

    if(materialLeNuage === material11LeNuage) {
      if (annotationIsolement.classList.contains('no-display')) {
        HideAllAnnotationsLeNuage();
          annotationIsolement.classList.remove('no-display');
          model3dLeNuage.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLeNuage();
      }
    }

  }

  model3dLeNuage.addEventListener("click", changeColorLeNuage);

});

// select ball - L'appel des abysses



function HideAllAnnotationsAppelAbysses(){
  annotationIntroduction.classList.add("no-display");
  annotationPersonnages.classList.add("no-display");
  annotationSilence.classList.add("no-display");
  annotationSon3d.classList.add("no-display");
  annotationVoix.classList.add("no-display");
  annotationNarrateur.classList.add("no-display");
  annotationNarration.classList.add("no-display");
  annotationDialogue.classList.add("no-display");
  annotationEffetsSonores.classList.add("no-display");
  annotationBruitage.classList.add("no-display");
  annotationMusique.classList.add("no-display");
  annotationIsolement.classList.add("no-display");


  // personnages
  model3dAppelAbysses.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narrateur
  model3dAppelAbysses.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // silence
  model3dAppelAbysses.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narration
  model3dAppelAbysses.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // dialogue
  model3dAppelAbysses.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // son3d
  model3dAppelAbysses.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // effets sonores
  model3dAppelAbysses.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // voix
  model3dAppelAbysses.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // bruitage
  model3dAppelAbysses.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // musique
  model3dAppelAbysses.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // intro
  model3dAppelAbysses.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // isolement
  model3dAppelAbysses.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  
};

model3dAppelAbysses.addEventListener("load", () => {
  HideAllAnnotationsAppelAbysses();

  const changeColorAppelAbysses = async (event) => {
    let materialAppelAbysses = model3dAppelAbysses.materialFromPoint(event.clientX, event.clientY);

    // définir les 12 materiel
    let material0AppelAbysses = model3dAppelAbysses.model.materials[0];
    let material1AppelAbysses = model3dAppelAbysses.model.materials[1];
    let material2AppelAbysses = model3dAppelAbysses.model.materials[2];
    let material3AppelAbysses = model3dAppelAbysses.model.materials[3];
    let material4AppelAbysses = model3dAppelAbysses.model.materials[4];
    let material5AppelAbysses = model3dAppelAbysses.model.materials[5];
    let material6AppelAbysses = model3dAppelAbysses.model.materials[6];
    let material7AppelAbysses = model3dAppelAbysses.model.materials[7];
    let material8AppelAbysses = model3dAppelAbysses.model.materials[8];
    let material9AppelAbysses = model3dAppelAbysses.model.materials[9];
    let material10AppelAbysses = model3dAppelAbysses.model.materials[10];
    let material11AppelAbysses = model3dAppelAbysses.model.materials[11];
    

    // affichage et masquage des annotations
    if(materialAppelAbysses === material1AppelAbysses) {
      if (annotationNarrateur.classList.contains('no-display')) {
        HideAllAnnotationsAppelAbysses();
          annotationNarrateur.classList.remove('no-display');
          model3dAppelAbysses.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsAppelAbysses();
      }
    }

    if(materialAppelAbysses === material0AppelAbysses) {
      if (annotationPersonnages.classList.contains('no-display')) {
        HideAllAnnotationsAppelAbysses();
        annotationPersonnages.classList.remove('no-display');
        model3dAppelAbysses.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
      HideAllAnnotationsAppelAbysses();
    }
    }

    if(materialAppelAbysses === material2AppelAbysses) {
      if (annotationSilence.classList.contains('no-display')) {
        HideAllAnnotationsAppelAbysses();
          annotationSilence.classList.remove('no-display');
          model3dAppelAbysses.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsAppelAbysses();
      }
    }

    if(materialAppelAbysses === material3AppelAbysses) {
      if (annotationNarration.classList.contains('no-display')) {
        HideAllAnnotationsAppelAbysses();
          annotationNarration.classList.remove('no-display');
          model3dAppelAbysses.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsAppelAbysses();
      }
    }

    if(materialAppelAbysses === material4AppelAbysses) {
      if (annotationDialogue.classList.contains('no-display')) {
        HideAllAnnotationsAppelAbysses();
          annotationDialogue.classList.remove('no-display');
          model3dAppelAbysses.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsAppelAbysses();
      }
    }

    if(materialAppelAbysses === material5AppelAbysses) {
      if (annotationSon3d.classList.contains('no-display')) {
        HideAllAnnotationsAppelAbysses();
          annotationSon3d.classList.remove('no-display');
          model3dAppelAbysses.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsAppelAbysses();
      }
    }

    if(materialAppelAbysses === material6AppelAbysses) {
      if (annotationEffetsSonores.classList.contains('no-display')) {
        HideAllAnnotationsAppelAbysses();
          annotationEffetsSonores.classList.remove('no-display');
          model3dAppelAbysses.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsAppelAbysses();
      }
    }

    if(materialAppelAbysses === material7AppelAbysses) {
      if (annotationVoix.classList.contains('no-display')) {
        HideAllAnnotationsAppelAbysses();
          annotationVoix.classList.remove('no-display');
          model3dAppelAbysses.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsAppelAbysses();
      }
    }

    if(materialAppelAbysses === material8AppelAbysses) {
      if (annotationBruitage.classList.contains('no-display')) {
        HideAllAnnotationsAppelAbysses();
          annotationBruitage.classList.remove('no-display');
          model3dAppelAbysses.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsAppelAbysses();
      }
    }

    if(materialAppelAbysses === material9AppelAbysses) {
      if (annotationMusique.classList.contains('no-display')) {
        HideAllAnnotationsAppelAbysses();
          annotationMusique.classList.remove('no-display');
          model3dAppelAbysses.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsAppelAbysses();
      }
    }

    if(materialAppelAbysses === material10AppelAbysses) {
      if (annotationIntroduction.classList.contains('no-display')) {
        HideAllAnnotationsAppelAbysses();
          annotationIntroduction.classList.remove('no-display');
          model3dAppelAbysses.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsAppelAbysses();
      }
    }

    if(materialAppelAbysses === material11AppelAbysses) {
      if (annotationIsolement.classList.contains('no-display')) {
        HideAllAnnotationsAppelAbysses();
          annotationIsolement.classList.remove('no-display');
          model3dAppelAbysses.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsAppelAbysses();
      }
    }
  }

  model3dAppelAbysses.addEventListener("click", changeColorAppelAbysses);
});

// select ball - Rap & Roll


function HideAllAnnotationsRapRoll(){
  annotationIntroduction.classList.add("no-display");
  annotationPersonnages.classList.add("no-display");
  annotationSilence.classList.add("no-display");
  annotationSon3d.classList.add("no-display");
  annotationVoix.classList.add("no-display");
  annotationNarrateur.classList.add("no-display");
  annotationNarration.classList.add("no-display");
  annotationDialogue.classList.add("no-display");
  annotationEffetsSonores.classList.add("no-display");
  annotationBruitage.classList.add("no-display");
  annotationMusique.classList.add("no-display");
  annotationIsolement.classList.add("no-display");


  // personnages
  model3dRapRoll.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narrateur
  model3dRapRoll.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // silence
  model3dRapRoll.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narration
  model3dRapRoll.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // dialogue
  model3dRapRoll.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // son3d
  model3dRapRoll.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // effets sonores
  model3dRapRoll.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // voix
  model3dRapRoll.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // bruitage
  model3dRapRoll.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // musique
  model3dRapRoll.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // intro
  model3dRapRoll.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // isolement
  model3dRapRoll.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  
};

model3dRapRoll.addEventListener("load", () => {
  HideAllAnnotationsRapRoll();

  const changeColorRapRoll = async (event) => {
    let materialRapRoll = model3dRapRoll.materialFromPoint(event.clientX, event.clientY);

    // définir les 12 materiel
    let material0RapRoll = model3dRapRoll.model.materials[0];
    let material1RapRoll = model3dRapRoll.model.materials[1];
    let material2RapRoll = model3dRapRoll.model.materials[2];
    let material3RapRoll = model3dRapRoll.model.materials[3];
    let material4RapRoll = model3dRapRoll.model.materials[4];
    let material5RapRoll = model3dRapRoll.model.materials[5];
    let material6RapRoll = model3dRapRoll.model.materials[6];
    let material7RapRoll = model3dRapRoll.model.materials[7];
    let material8RapRoll = model3dRapRoll.model.materials[8];
    let material9RapRoll = model3dRapRoll.model.materials[9];
    let material10RapRoll = model3dRapRoll.model.materials[10];
    let material11RapRoll = model3dRapRoll.model.materials[11];
    

    // affichage et masquage des annotations
    if(materialRapRoll === material1RapRoll) {
      if (annotationNarrateur.classList.contains('no-display')) {
        HideAllAnnotationsRapRoll();
          annotationNarrateur.classList.remove('no-display');
          model3dRapRoll.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsRapRoll();
      }
    }

    if(materialRapRoll === material0RapRoll) {
      if (annotationPersonnages.classList.contains('no-display')) {
        HideAllAnnotationsRapRoll();
        annotationPersonnages.classList.remove('no-display');
        model3dRapRoll.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
      HideAllAnnotationsRapRoll();
    }
    }

    if(materialRapRoll === material2RapRoll) {
      if (annotationSilence.classList.contains('no-display')) {
        HideAllAnnotationsRapRoll();
          annotationSilence.classList.remove('no-display');
          model3dRapRoll.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsRapRoll();
      }
    }

    if(materialRapRoll === material3RapRoll) {
      if (annotationNarration.classList.contains('no-display')) {
        HideAllAnnotationsRapRoll();
          annotationNarration.classList.remove('no-display');
          model3dRapRoll.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsRapRoll();
      }
    }

    if(materialRapRoll === material4RapRoll) {
      if (annotationDialogue.classList.contains('no-display')) {
        HideAllAnnotationsRapRoll();
          annotationDialogue.classList.remove('no-display');
          model3dRapRoll.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsRapRoll();
      }
    }

    if(materialRapRoll === material5RapRoll) {
      if (annotationSon3d.classList.contains('no-display')) {
        HideAllAnnotationsRapRoll();
          annotationSon3d.classList.remove('no-display');
          model3dRapRoll.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsRapRoll();
      }
    }

    if(materialRapRoll === material6RapRoll) {
      if (annotationEffetsSonores.classList.contains('no-display')) {
        HideAllAnnotationsRapRoll();
          annotationEffetsSonores.classList.remove('no-display');
          model3dRapRoll.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsRapRoll();
      }
    }

    if(materialRapRoll === material7RapRoll) {
      if (annotationVoix.classList.contains('no-display')) {
        HideAllAnnotationsRapRoll();
          annotationVoix.classList.remove('no-display');
          model3dRapRoll.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsRapRoll();
      }
    }

    if(materialRapRoll === material8RapRoll) {
      if (annotationBruitage.classList.contains('no-display')) {
        HideAllAnnotationsRapRoll();
          annotationBruitage.classList.remove('no-display');
          model3dRapRoll.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsRapRoll();
      }
    }

    if(materialRapRoll === material9RapRoll) {
      if (annotationMusique.classList.contains('no-display')) {
        HideAllAnnotationsRapRoll();
          annotationMusique.classList.remove('no-display');
          model3dRapRoll.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsRapRoll();
      }
    }

    if(materialRapRoll === material10RapRoll) {
      if (annotationIntroduction.classList.contains('no-display')) {
        HideAllAnnotationsRapRoll();
          annotationIntroduction.classList.remove('no-display');
          model3dRapRoll.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsRapRoll();
      }
    }

    if(materialRapRoll === material11RapRoll) {
      if (annotationIsolement.classList.contains('no-display')) {
        HideAllAnnotationsRapRoll();
          annotationIsolement.classList.remove('no-display');
          model3dRapRoll.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsRapRoll();
      }
    }
  }

  model3dRapRoll.addEventListener("click", changeColorRapRoll);
});

// select ball - L'épopée temporelle


function HideAllAnnotationsEpopeeTemporelle(){
  annotationIntroduction.classList.add("no-display");
  annotationPersonnages.classList.add("no-display");
  annotationSilence.classList.add("no-display");
  annotationSon3d.classList.add("no-display");
  annotationVoix.classList.add("no-display");
  annotationNarrateur.classList.add("no-display");
  annotationNarration.classList.add("no-display");
  annotationDialogue.classList.add("no-display");
  annotationEffetsSonores.classList.add("no-display");
  annotationBruitage.classList.add("no-display");
  annotationMusique.classList.add("no-display");
  annotationIsolement.classList.add("no-display");


  // personnages
  model3dEpopeeTemporelle.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narrateur
  model3dEpopeeTemporelle.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // silence
  model3dEpopeeTemporelle.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narration
  model3dEpopeeTemporelle.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // dialogue
  model3dEpopeeTemporelle.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // son3d
  model3dEpopeeTemporelle.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // effets sonores
  model3dEpopeeTemporelle.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // voix
  model3dEpopeeTemporelle.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // bruitage
  model3dEpopeeTemporelle.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // musique
  model3dEpopeeTemporelle.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // intro
  model3dEpopeeTemporelle.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // isolement
  model3dEpopeeTemporelle.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  
};

model3dEpopeeTemporelle.addEventListener("load", () => {
  HideAllAnnotationsEpopeeTemporelle();

  const changeColorEpopeeTemporelle = async (event) => {
    let materialEpopeeTemporelle = model3dEpopeeTemporelle.materialFromPoint(event.clientX, event.clientY);

    // définir les 12 materiel
    let material0EpopeeTemporelle = model3dEpopeeTemporelle.model.materials[0];
    let material1EpopeeTemporelle = model3dEpopeeTemporelle.model.materials[1];
    let material2EpopeeTemporelle = model3dEpopeeTemporelle.model.materials[2];
    let material3EpopeeTemporelle = model3dEpopeeTemporelle.model.materials[3];
    let material4EpopeeTemporelle = model3dEpopeeTemporelle.model.materials[4];
    let material5EpopeeTemporelle = model3dEpopeeTemporelle.model.materials[5];
    let material6EpopeeTemporelle = model3dEpopeeTemporelle.model.materials[6];
    let material7EpopeeTemporelle = model3dEpopeeTemporelle.model.materials[7];
    let material8EpopeeTemporelle = model3dEpopeeTemporelle.model.materials[8];
    let material9EpopeeTemporelle = model3dEpopeeTemporelle.model.materials[9];
    let material10EpopeeTemporelle = model3dEpopeeTemporelle.model.materials[10];
    let material11EpopeeTemporelle = model3dEpopeeTemporelle.model.materials[11];
    

    // affichage et masquage des annotations
    if(materialEpopeeTemporelle === material1EpopeeTemporelle) {
      if (annotationNarrateur.classList.contains('no-display')) {
        HideAllAnnotationsEpopeeTemporelle();
          annotationNarrateur.classList.remove('no-display');
          model3dEpopeeTemporelle.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsEpopeeTemporelle();
      }
    }

    if(materialEpopeeTemporelle === material0EpopeeTemporelle) {
      if (annotationPersonnages.classList.contains('no-display')) {
        HideAllAnnotationsEpopeeTemporelle();
        annotationPersonnages.classList.remove('no-display');
        model3dEpopeeTemporelle.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
      HideAllAnnotationsEpopeeTemporelle();
    }
    }

    if(materialEpopeeTemporelle === material2EpopeeTemporelle) {
      if (annotationSilence.classList.contains('no-display')) {
        HideAllAnnotationsEpopeeTemporelle();
          annotationSilence.classList.remove('no-display');
          model3dEpopeeTemporelle.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsEpopeeTemporelle();
      }
    }

    if(materialEpopeeTemporelle === material3EpopeeTemporelle) {
      if (annotationNarration.classList.contains('no-display')) {
        HideAllAnnotationsEpopeeTemporelle();
          annotationNarration.classList.remove('no-display');
          model3dEpopeeTemporelle.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsEpopeeTemporelle();
      }
    }

    if(materialEpopeeTemporelle === material4EpopeeTemporelle) {
      if (annotationDialogue.classList.contains('no-display')) {
        HideAllAnnotationsEpopeeTemporelle();
          annotationDialogue.classList.remove('no-display');
          model3dEpopeeTemporelle.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsEpopeeTemporelle();
      }
    }

    if(materialEpopeeTemporelle === material5EpopeeTemporelle) {
      if (annotationSon3d.classList.contains('no-display')) {
        HideAllAnnotationsEpopeeTemporelle();
          annotationSon3d.classList.remove('no-display');
          model3dEpopeeTemporelle.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsEpopeeTemporelle();
      }
    }

    if(materialEpopeeTemporelle === material6EpopeeTemporelle) {
      if (annotationEffetsSonores.classList.contains('no-display')) {
        HideAllAnnotationsEpopeeTemporelle();
          annotationEffetsSonores.classList.remove('no-display');
          model3dEpopeeTemporelle.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsEpopeeTemporelle();
      }
    }

    if(materialEpopeeTemporelle === material7EpopeeTemporelle) {
      if (annotationVoix.classList.contains('no-display')) {
        HideAllAnnotationsEpopeeTemporelle();
          annotationVoix.classList.remove('no-display');
          model3dEpopeeTemporelle.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsEpopeeTemporelle();
      }
    }

    if(materialEpopeeTemporelle === material8EpopeeTemporelle) {
      if (annotationBruitage.classList.contains('no-display')) {
        HideAllAnnotationsEpopeeTemporelle();
          annotationBruitage.classList.remove('no-display');
          model3dEpopeeTemporelle.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsEpopeeTemporelle();
      }
    }

    if(materialEpopeeTemporelle === material9EpopeeTemporelle) {
      if (annotationMusique.classList.contains('no-display')) {
        HideAllAnnotationsEpopeeTemporelle();
          annotationMusique.classList.remove('no-display');
          model3dEpopeeTemporelle.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsEpopeeTemporelle();
      }
    }

    if(materialEpopeeTemporelle === material10EpopeeTemporelle) {
      if (annotationIntroduction.classList.contains('no-display')) {
        HideAllAnnotationsEpopeeTemporelle();
          annotationIntroduction.classList.remove('no-display');
          model3dEpopeeTemporelle.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsEpopeeTemporelle();
      }
    }

    if(materialEpopeeTemporelle === material11EpopeeTemporelle) {
      if (annotationIsolement.classList.contains('no-display')) {
        HideAllAnnotationsEpopeeTemporelle();
          annotationIsolement.classList.remove('no-display');
          model3dEpopeeTemporelle.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsEpopeeTemporelle();
      }
    }
  }

  model3dEpopeeTemporelle.addEventListener("click", changeColorEpopeeTemporelle);
});

// select ball - Godcast



function HideAllAnnotationsLaMission(){
  annotationIntroduction.classList.add("no-display");
  annotationPersonnages.classList.add("no-display");
  annotationSilence.classList.add("no-display");
  annotationSon3d.classList.add("no-display");
  annotationVoix.classList.add("no-display");
  annotationNarrateur.classList.add("no-display");
  annotationNarration.classList.add("no-display");
  annotationDialogue.classList.add("no-display");
  annotationEffetsSonores.classList.add("no-display");
  annotationBruitage.classList.add("no-display");
  annotationMusique.classList.add("no-display");
  annotationIsolement.classList.add("no-display");


  // personnages
  model3dLaMission.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narrateur
  model3dLaMission.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // silence
  model3dLaMission.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narration
  model3dLaMission.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // dialogue
  model3dLaMission.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // son3d
  model3dLaMission.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // effets sonores
  model3dLaMission.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // voix
  model3dLaMission.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // bruitage
  model3dLaMission.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // musique
  model3dLaMission.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // intro
  model3dLaMission.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // isolement
  model3dLaMission.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  
};

model3dLaMission.addEventListener("load", () => {
  HideAllAnnotationsLaMission();

  const changeColorLaMission = async (event) => {
    let materialLaMission = model3dLaMission.materialFromPoint(event.clientX, event.clientY);

    // définir les 12 materiel
    let material0LaMission = model3dLaMission.model.materials[0];
    let material1LaMission = model3dLaMission.model.materials[1];
    let material2LaMission = model3dLaMission.model.materials[2];
    let material3LaMission = model3dLaMission.model.materials[3];
    let material4LaMission = model3dLaMission.model.materials[4];
    let material5LaMission = model3dLaMission.model.materials[5];
    let material6LaMission = model3dLaMission.model.materials[6];
    let material7LaMission = model3dLaMission.model.materials[7];
    let material8LaMission = model3dLaMission.model.materials[8];
    let material9LaMission = model3dLaMission.model.materials[9];
    let material10LaMission = model3dLaMission.model.materials[10];
    let material11LaMission = model3dLaMission.model.materials[11];
    

    // affichage et masquage des annotations
    if(materialLaMission === material1LaMission) {
      if (annotationNarrateur.classList.contains('no-display')) {
        HideAllAnnotationsLaMission();
          annotationNarrateur.classList.remove('no-display');
          model3dLaMission.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLaMission();
      }
    }

    if(materialLaMission === material0LaMission) {
      if (annotationPersonnages.classList.contains('no-display')) {
        HideAllAnnotationsLaMission();
        annotationPersonnages.classList.remove('no-display');
        model3dLaMission.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
      HideAllAnnotationsLaMission();
    }
    }

    if(materialLaMission === material2LaMission) {
      if (annotationSilence.classList.contains('no-display')) {
        HideAllAnnotationsLaMission();
          annotationSilence.classList.remove('no-display');
          model3dLaMission.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLaMission();
      }
    }

    if(materialLaMission === material3LaMission) {
      if (annotationNarration.classList.contains('no-display')) {
        HideAllAnnotationsLaMission();
          annotationNarration.classList.remove('no-display');
          model3dLaMission.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLaMission();
      }
    }

    if(materialLaMission === material4LaMission) {
      if (annotationDialogue.classList.contains('no-display')) {
        HideAllAnnotationsLaMission();
          annotationDialogue.classList.remove('no-display');
          model3dLaMission.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLaMission();
      }
    }

    if(materialLaMission === material5LaMission) {
      if (annotationSon3d.classList.contains('no-display')) {
        HideAllAnnotationsLaMission();
          annotationSon3d.classList.remove('no-display');
          model3dLaMission.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLaMission();
      }
    }

    if(materialLaMission === material6LaMission) {
      if (annotationEffetsSonores.classList.contains('no-display')) {
        HideAllAnnotationsLaMission();
          annotationEffetsSonores.classList.remove('no-display');
          model3dLaMission.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLaMission();
      }
    }

    if(materialLaMission === material7LaMission) {
      if (annotationVoix.classList.contains('no-display')) {
        HideAllAnnotationsLaMission();
          annotationVoix.classList.remove('no-display');
          model3dLaMission.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLaMission();
      }
    }

    if(materialLaMission === material8LaMission) {
      if (annotationBruitage.classList.contains('no-display')) {
        HideAllAnnotationsLaMission();
          annotationBruitage.classList.remove('no-display');
          model3dLaMission.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLaMission();
      }
    }

    if(materialLaMission === material9LaMission) {
      if (annotationMusique.classList.contains('no-display')) {
        HideAllAnnotationsLaMission();
          annotationMusique.classList.remove('no-display');
          model3dLaMission.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLaMission();
      }
    }

    if(materialLaMission === material10LaMission) {
      if (annotationIntroduction.classList.contains('no-display')) {
        HideAllAnnotationsLaMission();
          annotationIntroduction.classList.remove('no-display');
          model3dLaMission.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLaMission();
      }
    }

    if(materialLaMission === material11LaMission) {
      if (annotationIsolement.classList.contains('no-display')) {
        HideAllAnnotationsLaMission();
          annotationIsolement.classList.remove('no-display');
          model3dLaMission.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsLaMission();
      }
    }
  }

  model3dLaMission.addEventListener("click", changeColorLaMission);
});

// select ball - Tu seras un homme papa


function HideAllAnnotationsUnHomme(){
  annotationIntroduction.classList.add("no-display");
  annotationPersonnages.classList.add("no-display");
  annotationSilence.classList.add("no-display");
  annotationSon3d.classList.add("no-display");
  annotationVoix.classList.add("no-display");
  annotationNarrateur.classList.add("no-display");
  annotationNarration.classList.add("no-display");
  annotationDialogue.classList.add("no-display");
  annotationEffetsSonores.classList.add("no-display");
  annotationBruitage.classList.add("no-display");
  annotationMusique.classList.add("no-display");
  annotationIsolement.classList.add("no-display");


  // personnages
  model3dUnHomme.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narrateur
  model3dUnHomme.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // silence
  model3dUnHomme.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narration
  model3dUnHomme.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // dialogue
  model3dUnHomme.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // son3d
  model3dUnHomme.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // effets sonores
  model3dUnHomme.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // voix
  model3dUnHomme.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // bruitage
  model3dUnHomme.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // musique
  model3dUnHomme.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // intro
  model3dUnHomme.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // isolement
  model3dUnHomme.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  
};

model3dUnHomme.addEventListener("load", () => {
  HideAllAnnotationsUnHomme();

  const changeColorUnHomme = async (event) => {
    let materialUnHomme = model3dUnHomme.materialFromPoint(event.clientX, event.clientY);

    // définir les 12 materiel
    let material0UnHomme = model3dUnHomme.model.materials[0];
    let material1UnHomme = model3dUnHomme.model.materials[1];
    let material2UnHomme = model3dUnHomme.model.materials[2];
    let material3UnHomme = model3dUnHomme.model.materials[3];
    let material4UnHomme = model3dUnHomme.model.materials[4];
    let material5UnHomme = model3dUnHomme.model.materials[5];
    let material6UnHomme = model3dUnHomme.model.materials[6];
    let material7UnHomme = model3dUnHomme.model.materials[7];
    let material8UnHomme = model3dUnHomme.model.materials[8];
    let material9UnHomme = model3dUnHomme.model.materials[9];
    let material10UnHomme = model3dUnHomme.model.materials[10];
    let material11UnHomme = model3dUnHomme.model.materials[11];
    

    // affichage et masquage des annotations
    if(materialUnHomme === material1UnHomme) {
      if (annotationNarrateur.classList.contains('no-display')) {
        HideAllAnnotationsUnHomme();
          annotationNarrateur.classList.remove('no-display');
          model3dUnHomme.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsUnHomme();
      }
    }

    if(materialUnHomme === material0UnHomme) {
      if (annotationPersonnages.classList.contains('no-display')) {
        HideAllAnnotationsUnHomme();
        annotationPersonnages.classList.remove('no-display');
        model3dUnHomme.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
      HideAllAnnotationsUnHomme();
    }
    }

    if(materialUnHomme === material2UnHomme) {
      if (annotationSilence.classList.contains('no-display')) {
        HideAllAnnotationsUnHomme();
          annotationSilence.classList.remove('no-display');
          model3dUnHomme.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsUnHomme();
      }
    }

    if(materialUnHomme === material3UnHomme) {
      if (annotationNarration.classList.contains('no-display')) {
        HideAllAnnotationsUnHomme();
          annotationNarration.classList.remove('no-display');
          model3dUnHomme.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsUnHomme();
      }
    }

    if(materialUnHomme === material4UnHomme) {
      if (annotationDialogue.classList.contains('no-display')) {
        HideAllAnnotationsUnHomme();
          annotationDialogue.classList.remove('no-display');
          model3dUnHomme.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsUnHomme();
      }
    }

    if(materialUnHomme === material5UnHomme) {
      if (annotationSon3d.classList.contains('no-display')) {
        HideAllAnnotationsUnHomme();
          annotationSon3d.classList.remove('no-display');
          model3dUnHomme.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsUnHomme();
      }
    }

    if(materialUnHomme === material6UnHomme) {
      if (annotationEffetsSonores.classList.contains('no-display')) {
        HideAllAnnotationsUnHomme();
          annotationEffetsSonores.classList.remove('no-display');
          model3dUnHomme.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsUnHomme();
      }
    }

    if(materialUnHomme === material7UnHomme) {
      if (annotationVoix.classList.contains('no-display')) {
        HideAllAnnotationsUnHomme();
          annotationVoix.classList.remove('no-display');
          model3dUnHomme.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsUnHomme();
      }
    }

    if(materialUnHomme === material8UnHomme) {
      if (annotationBruitage.classList.contains('no-display')) {
        HideAllAnnotationsUnHomme();
          annotationBruitage.classList.remove('no-display');
          model3dUnHomme.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsUnHomme();
      }
    }

    if(materialUnHomme === material9UnHomme) {
      if (annotationMusique.classList.contains('no-display')) {
        HideAllAnnotationsUnHomme();
          annotationMusique.classList.remove('no-display');
          model3dUnHomme.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsUnHomme();
      }
    }

    if(materialUnHomme === material10UnHomme) {
      if (annotationIntroduction.classList.contains('no-display')) {
        HideAllAnnotationsUnHomme();
          annotationIntroduction.classList.remove('no-display');
          model3dUnHomme.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsUnHomme();
      }
    }

    if(materialUnHomme === material11UnHomme) {
      if (annotationIsolement.classList.contains('no-display')) {
        HideAllAnnotationsUnHomme();
          annotationIsolement.classList.remove('no-display');
          model3dUnHomme.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsUnHomme();
      }
    }
  }

  model3dUnHomme.addEventListener("click", changeColorUnHomme);
});


// select ball - Spotify en mode 3D


function HideAllAnnotationsSpotify(){
  annotationIntroduction.classList.add("no-display");
  annotationPersonnages.classList.add("no-display");
  annotationSilence.classList.add("no-display");
  annotationSon3d.classList.add("no-display");
  annotationVoix.classList.add("no-display");
  annotationNarrateur.classList.add("no-display");
  annotationNarration.classList.add("no-display");
  annotationDialogue.classList.add("no-display");
  annotationEffetsSonores.classList.add("no-display");
  annotationBruitage.classList.add("no-display");
  annotationMusique.classList.add("no-display");
  annotationIsolement.classList.add("no-display");


  // personnages
  model3dSpotify.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narrateur
  model3dSpotify.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // silence
  model3dSpotify.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // narration
  model3dSpotify.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // dialogue
  model3dSpotify.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // son3d
  model3dSpotify.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // effets sonores
  model3dSpotify.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // voix
  model3dSpotify.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // bruitage
  model3dSpotify.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // musique
  model3dSpotify.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // intro
  model3dSpotify.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  // isolement
  model3dSpotify.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
  
};

model3dSpotify.addEventListener("load", () => {
  HideAllAnnotationsSpotify();

  const changeColorSpotify = async (event) => {
    let materialSpotify = model3dSpotify.materialFromPoint(event.clientX, event.clientY);

    // définir les 12 materiel
    let material0Spotify = model3dSpotify.model.materials[0];
    let material1Spotify = model3dSpotify.model.materials[1];
    let material2Spotify = model3dSpotify.model.materials[2];
    let material3Spotify = model3dSpotify.model.materials[3];
    let material4Spotify = model3dSpotify.model.materials[4];
    let material5Spotify = model3dSpotify.model.materials[5];
    let material6Spotify = model3dSpotify.model.materials[6];
    let material7Spotify = model3dSpotify.model.materials[7];
    let material8Spotify = model3dSpotify.model.materials[8];
    let material9Spotify = model3dSpotify.model.materials[9];
    let material10Spotify = model3dSpotify.model.materials[10];
    let material11Spotify = model3dSpotify.model.materials[11];
    

    // affichage et masquage des annotations
    if(materialSpotify === material1Spotify) {
      if (annotationNarrateur.classList.contains('no-display')) {
        HideAllAnnotationsSpotify();
          annotationNarrateur.classList.remove('no-display');
          model3dSpotify.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsSpotify();
      }
    }

    if(materialSpotify === material0Spotify) {
      if (annotationPersonnages.classList.contains('no-display')) {
        HideAllAnnotationsSpotify();
        annotationPersonnages.classList.remove('no-display');
        model3dSpotify.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
      HideAllAnnotationsSpotify();
    }
    }

    if(materialSpotify === material2Spotify) {
      if (annotationSilence.classList.contains('no-display')) {
        HideAllAnnotationsSpotify();
          annotationSilence.classList.remove('no-display');
          model3dSpotify.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsSpotify();
      }
    }

    if(materialSpotify === material3Spotify) {
      if (annotationNarration.classList.contains('no-display')) {
        HideAllAnnotationsSpotify();
          annotationNarration.classList.remove('no-display');
          model3dSpotify.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsSpotify();
      }
    }

    if(materialSpotify === material4Spotify) {
      if (annotationDialogue.classList.contains('no-display')) {
        HideAllAnnotationsSpotify();
          annotationDialogue.classList.remove('no-display');
          model3dSpotify.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsSpotify();
      }
    }

    if(materialSpotify === material5Spotify) {
      if (annotationSon3d.classList.contains('no-display')) {
        HideAllAnnotationsSpotify();
          annotationSon3d.classList.remove('no-display');
          model3dSpotify.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsSpotify();
      }
    }

    if(materialSpotify === material6Spotify) {
      if (annotationEffetsSonores.classList.contains('no-display')) {
        HideAllAnnotationsSpotify();
          annotationEffetsSonores.classList.remove('no-display');
          model3dSpotify.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsSpotify();
      }
    }

    if(materialSpotify === material7Spotify) {
      if (annotationVoix.classList.contains('no-display')) {
        HideAllAnnotationsSpotify();
          annotationVoix.classList.remove('no-display');
          model3dSpotify.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsSpotify();
      }
    }

    if(materialSpotify === material8Spotify) {
      if (annotationBruitage.classList.contains('no-display')) {
        HideAllAnnotationsSpotify();
          annotationBruitage.classList.remove('no-display');
          model3dSpotify.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsSpotify();
      }
    }

    if(materialSpotify === material9Spotify) {
      if (annotationMusique.classList.contains('no-display')) {
        HideAllAnnotationsSpotify();
          annotationMusique.classList.remove('no-display');
          model3dSpotify.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsSpotify();
      }
    }

    if(materialSpotify === material10Spotify) {
      if (annotationIntroduction.classList.contains('no-display')) {
        HideAllAnnotationsSpotify();
          annotationIntroduction.classList.remove('no-display');
          model3dSpotify.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsSpotify();
      }
    }

    if(materialSpotify === material11Spotify) {
      if (annotationIsolement.classList.contains('no-display')) {
        HideAllAnnotationsSpotify();
          annotationIsolement.classList.remove('no-display');
          model3dSpotify.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
      } 
      else {
        HideAllAnnotationsSpotify();
      }
    }
  }

  model3dSpotify.addEventListener("click", changeColorSpotify);
});






// CARROUSEL

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
    document.getElementById('model3dderniereseance').classList.add("no-display");
    dot4.classList.remove("selected");
    document.getElementById('hellodemain').classList.add("no-display");
    document.getElementById('model3dhellodemain').classList.add("no-display");
    dot5.classList.remove("selected");
    document.getElementById('lenuage').classList.add("no-display");
    document.getElementById('model3dlenuage').classList.add("no-display");
    dot6.classList.remove("selected");
    document.getElementById('appelabysses').classList.add("no-display");
    document.getElementById('model3dappelabysses').classList.add("no-display");
    dot7.classList.remove("selected");
    document.getElementById('raproll').classList.add("no-display");
    document.getElementById('model3draproll').classList.add("no-display");
    dot8.classList.remove("selected");
    document.getElementById('epopeetemporelle').classList.add("no-display");
    document.getElementById('model3depopeetemporelle').classList.add("no-display");
    dot9.classList.remove("selected");
    document.getElementById('popcorn').classList.add("no-display");
    document.getElementById('model3dpopcorns').classList.add("no-display");
    dot10.classList.remove("selected");
    document.getElementById('lamission').classList.add("no-display");
    document.getElementById('model3dlamission').classList.add("no-display");
    dot11.classList.remove("selected");
    document.getElementById('unhommepapa').classList.add("no-display");
    document.getElementById('model3dunhomme').classList.add("no-display");
    dot12.classList.remove("selected");
    document.getElementById('spotify3d').classList.add("no-display");
    document.getElementById('model3dspotify').classList.add("no-display");
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
    document.getElementById('model3dderniereseance').classList.remove("no-display");
    document.location.hash='#3';
}

function showDot4(){
    hideAllElements();
    dot4.classList.add("selected");
    document.getElementById('hellodemain').classList.remove("no-display");
    document.getElementById('model3dhellodemain').classList.remove("no-display");
    document.location.hash='#4';
}

function showDot5(){
    hideAllElements();
    dot5.classList.add("selected");
    document.getElementById('lenuage').classList.remove("no-display");
    document.getElementById('model3dlenuage').classList.remove("no-display");
    document.location.hash='#5';
}

function showDot6(){
    hideAllElements();
    dot6.classList.add("selected");
    document.getElementById('appelabysses').classList.remove("no-display");
    document.getElementById('model3dappelabysses').classList.remove("no-display");
    document.location.hash='#6';
}

function showDot7(){
    hideAllElements();
    dot7.classList.add("selected");
    document.getElementById('raproll').classList.remove("no-display");
    document.getElementById('model3draproll').classList.remove("no-display");
    document.location.hash='#7';
}

function showDot8(){
    hideAllElements();
    dot8.classList.add("selected");
    document.getElementById('epopeetemporelle').classList.remove("no-display");
    document.getElementById('model3depopeetemporelle').classList.remove("no-display");
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
    document.getElementById('model3dlamission').classList.remove("no-display");
    document.location.hash='#10';
}

function showDot11(){
    hideAllElements();
    dot11.classList.add("selected");
    document.getElementById('unhommepapa').classList.remove("no-display");
    document.getElementById('model3dunhomme').classList.remove("no-display");
    document.location.hash='#11';
}

function showDot12(){
    hideAllElements();
    dot12.classList.add("selected");
    document.getElementById('spotify3d').classList.remove("no-display");
    document.getElementById('model3dspotify').classList.remove("no-display");
    document.location.hash='#12';
}

function hideAnnotation(){
    document.getElementById('annotation-introduction').classList.add("no-display");
    document.getElementById('annotation-personnages').classList.add("no-display");
    document.getElementById('annotation-narrateur').classList.add("no-display");
    document.getElementById('annotation-silence').classList.add("no-display");
    document.getElementById('annotation-narration').classList.add("no-display");
    document.getElementById('annotation-dialogue').classList.add("no-display");
    document.getElementById('annotation-son3d').classList.add("no-display");
    document.getElementById('annotation-effetssonores').classList.add("no-display");
    document.getElementById('annotation-voix').classList.add("no-display");
    document.getElementById('annotation-bruitage').classList.add("no-display");
    document.getElementById('annotation-musique').classList.add("no-display");
    document.getElementById('annotation-isolement').classList.add("no-display");

    try {
      HideAllAnnotationsGodcast();
    } catch (error) {}

    try {
      HideAllAnnotationsMentalFM();
    } catch (error) {}

    try {
      HideAllAnnotationsDerniereSeance();
    } catch (error) {}

    try {
      HideAllAnnotationsHelloDemain();
    } catch (error) {}

    try {
      HideAllAnnotationsPopCorns();
    } catch (error) {}

    try {
      HideAllAnnotationsLeNuage();
    } catch (error) {}

    try {
      HideAllAnnotationsAppelAbysses();
    } catch (error) {}

    try {
      HideAllAnnotationsRapRoll();
    } catch (error) {}

    try {
      HideAllAnnotationsLaMission();
    } catch (error) {}

    try {
      HideAllAnnotationsSpotify();
    } catch (error) {}

}

// function defaultMaterial(){}

dot1.addEventListener('click', function (){
    showDot1();
    hideAnnotation();
})

dot2.addEventListener('click', function (){
    showDot2();
    hideAnnotation();
})

dot3.addEventListener('click', function(){
    showDot3();
    hideAnnotation();
})

dot4.addEventListener('click', function(){
    showDot4();
    hideAnnotation();
})

dot5.addEventListener('click', function(){
    showDot5();
    hideAnnotation();
})

dot6.addEventListener('click', function(){
    showDot6();
    hideAnnotation();
})

dot7.addEventListener('click', function(){
    showDot7();
    hideAnnotation();
})

dot8.addEventListener('click', function(){
    showDot8();
    hideAnnotation();
})

dot9.addEventListener('click', function(){
    showDot9();
    hideAnnotation();
})

dot10.addEventListener('click', function(){
    showDot10();
    hideAnnotation();
})

dot11.addEventListener('click', function(){
    showDot11();
    hideAnnotation();
})

dot12.addEventListener('click', function(){
    showDot12();
    hideAnnotation();
})

// CHANGEMENT PAGE ONGLET



function checkOnglet(){
    if (document.location.hash === "#2"){
        showDot2();
        hideAnnotation();
    }
    else if (document.location.hash === "#3"){
        showDot3();
        hideAnnotation();
    }
    else if (document.location.hash === "#4"){
        showDot4();
        hideAnnotation();
    }
    else if (document.location.hash === "#5"){
        showDot5();
        hideAnnotation();
    }
    else if (document.location.hash === "#6"){
        showDot6();
        hideAnnotation();
    }
    else if (document.location.hash === "#7"){
        showDot7();
        hideAnnotation();
    }
    else if (document.location.hash === "#8"){
        showDot8();
        hideAnnotation();
    }
    else if (document.location.hash === "#9"){
        showDot9();
        hideAnnotation();
    }
    else if (document.location.hash === "#10"){
        showDot10();
        hideAnnotation();
    }
    else if (document.location.hash === "#11"){
        showDot11();
        hideAnnotation();
    }
    else if (document.location.hash === "#12"){
        showDot12();
        hideAnnotation();
    }
}

checkOnglet()

