/**
 * Dans cet exemple 
 * Écrire une fonction qui permet de calculer le prix TTC , cette fonction va recevoir un paramètre de type Réel dont le nom est "prixHT" et un second paramètre de type Réel dont le nom est "tva".  
 */

//declaration de fonction 
function calculPrixTTC(prixHT, tva){
    let prixTTC=prixHT*(1+tva/100)
    console.log('votre prix est: '+prixTTC.toFixed(2)+ ' $')
return prixTTC
}
//demande de valeur de tva et le prix HT
let prixHT=parseFloat(prompt("entrez le prix HT",''))
let tva=parseFloat(prompt("entrez la valeur de votre tva ",''))
//appelle de la fonction
calculPrixTTC(prixHT, tva)