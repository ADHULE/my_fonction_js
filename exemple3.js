//une fonction pour le calcul du volume de cylindre (V)
function claclulVolume(h, r){
    let reponse=(Math.PI*(r*r)*h)
    console.log("le volume du cylindre V= "+reponse.toFixed(2)+" us")
    return reponse
}
//demandez la valeur d'hauteur et du rayon
let rayon=parseFloat(prompt('entrez la valeur de votre rayon',''))
let hauteur=parseFloat(prompt('entrez la valeur de votre hauteur',''))
//appelle de la fonction
claclulVolume(hauteur,rayon)