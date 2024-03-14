/*
Écrire une procédure qui permet d'afficher si un nombre entier passé en paramètre est pair ou impair.
**/

//declaration de fonction
function afficherValeur(number){
    let reponse=number
    if(reponse%2===0){
        console.log(reponse+" pair")
    }else{
        console.log(reponse+" impair")

    }
}
//demande de nombre
let numbre=parseInt(prompt('entrez un nombre'))
//appelle de la fonction
afficherValeur(numbre)