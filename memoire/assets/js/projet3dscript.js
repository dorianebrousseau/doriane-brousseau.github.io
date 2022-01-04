const model3dProjet = document.getElementById("model3dprojet");

model3dProjet.addEventListener("load", (ev) => {
    let material = model3dProjet.model.materials[0];
    material.pbrMetallicRoughness.setBaseColorFactor([0.7294, 0.5333, 0.0392]);
  });

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
  
  
function HideAllAnnotationsProjet(){
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
    model3dProjet.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
    // narrateur
    model3dProjet.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
    // silence
    model3dProjet.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
    // narration
    model3dProjet.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
    // dialogue
    model3dProjet.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
    // son3d
    model3dProjet.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
    // effets sonores
    model3dProjet.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
    // voix
    model3dProjet.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
    // bruitage
    model3dProjet.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
    // musique
    model3dProjet.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
    // intro
    model3dProjet.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
    // isolement
    model3dProjet.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.922, 0.73, 0.002])
};

model3dProjet.addEventListener("load", () => {
HideAllAnnotationsProjet();

const changeColor = async (event) => {
    let material = model3dProjet.materialFromPoint(event.clientX, event.clientY);

    // définir les 12 materiel
    let material0 = model3dProjet.model.materials[0];
    let material1 = model3dProjet.model.materials[1];
    let material2 = model3dProjet.model.materials[2];
    let material3 = model3dProjet.model.materials[3];
    let material4 = model3dProjet.model.materials[4];
    let material5 = model3dProjet.model.materials[5];
    let material6 = model3dProjet.model.materials[6];
    let material7 = model3dProjet.model.materials[7];
    let material8 = model3dProjet.model.materials[8];
    let material9 = model3dProjet.model.materials[9];
    let material10 = model3dProjet.model.materials[10];
    let material11 = model3dProjet.model.materials[11];
    

    // affichage et masquage des annotations
    if(material === material1) {
    if (annotationNarrateur.classList.contains('no-display')) {
        HideAllAnnotationsProjet();
        annotationNarrateur.classList.remove('no-display');
        model3dProjet.model.materials[1].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
        HideAllAnnotationsProjet();
        
    }
    }

    if(material === material0) {
    if (annotationPersonnages.classList.contains('no-display')) {
        HideAllAnnotationsProjet();
        annotationPersonnages.classList.remove('no-display');
        model3dProjet.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
    HideAllAnnotationsProjet();
    }
    }

    if(material === material2) {
    if (annotationSilence.classList.contains('no-display')) {
        HideAllAnnotationsProjet();
        annotationSilence.classList.remove('no-display');
        model3dProjet.model.materials[2].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
        HideAllAnnotationsProjet();
        
    }
    }

    if(material === material3) {
    if (annotationNarration.classList.contains('no-display')) {
        HideAllAnnotationsProjet();
        annotationNarration.classList.remove('no-display');
        model3dProjet.model.materials[3].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
        HideAllAnnotationsProjet();
        
    }
    }

    if(material === material4) {
    if (annotationDialogue.classList.contains('no-display')) {
        HideAllAnnotationsProjet();
        annotationDialogue.classList.remove('no-display');
        model3dProjet.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
        HideAllAnnotationsProjet();
        
    }
    }

    if(material === material5) {
    if (annotationSon3d.classList.contains('no-display')) {
        HideAllAnnotationsProjet();
        annotationSon3d.classList.remove('no-display');
        model3dProjet.model.materials[5].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
        HideAllAnnotationsProjet();
        
    }
    }

    if(material === material6) {
    if (annotationEffetsSonores.classList.contains('no-display')) {
        HideAllAnnotationsProjet();
        annotationEffetsSonores.classList.remove('no-display');
        model3dProjet.model.materials[6].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
        HideAllAnnotationsProjet();
        
    }
    }

    if(material === material7) {
    if (annotationVoix.classList.contains('no-display')) {
        HideAllAnnotationsProjet();
        annotationVoix.classList.remove('no-display');
        model3dProjet.model.materials[7].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
        HideAllAnnotationsProjet();
        
    }
    }

    if(material === material8) {
    if (annotationBruitage.classList.contains('no-display')) {
        HideAllAnnotationsProjet();
        annotationBruitage.classList.remove('no-display');
        model3dProjet.model.materials[8].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
        HideAllAnnotationsProjet();
        
    }
    }

    if(material === material9) {
    if (annotationMusique.classList.contains('no-display')) {
        HideAllAnnotationsProjet();
        annotationMusique.classList.remove('no-display');
        model3dProjet.model.materials[9].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
        HideAllAnnotationsProjet();
        
    }
    }

    if(material === material10) {
    if (annotationIntroduction.classList.contains('no-display')) {
        HideAllAnnotationsProjet();
        annotationIntroduction.classList.remove('no-display');
        model3dProjet.model.materials[10].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
        HideAllAnnotationsProjet();
        
    }
    }

    if(material === material11) {
    if (annotationIsolement.classList.contains('no-display')) {
        HideAllAnnotationsProjet();
        annotationIsolement.classList.remove('no-display');
        model3dProjet.model.materials[11].pbrMetallicRoughness.setBaseColorFactor([0.397, 0.317, 0.001])
    } 
    else {
        HideAllAnnotationsProjet();
        
    }
    }

}

model3dProjet.addEventListener("click", changeColor);

});