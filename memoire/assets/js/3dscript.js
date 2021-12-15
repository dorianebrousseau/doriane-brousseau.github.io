// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
  } else {
    progressBar.classList.remove('hide');
    if (event.detail.totalProgress === 0) {
      event.target.querySelector('.center-pre-prompt').classList.add('hide');
    }
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

// Matériels

const model3dGodcast = document.getElementById("model3dgodcast");
const model3dMentalFM = document.getElementById("model3dmentalfm");
const model3dPopCorns = document.getElementById("model3dpopcorns");


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

    HideAllAnnotationsPopCorns();
    HideAllAnnotationsGodcast();
    HideAllAnnotationsMentalFM();

}

function defaultMaterial(){

}

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

