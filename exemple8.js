/**
 * Écrire une fonction qui cherche combien de fois un caractère est présent dans une chaîne de caractères. Le caractère à chercher et la chaîne seront passés en paramètres.
 */

//declaratrion de la fonction
function nombrePresentCaratere(texte, caratere) {
    let nombreRepetion = 0; i=0
    while(texte[i]!==0){
    console.log("dans votre phrase  on retrouve "+ nombreRepetion)

        nombreRepetion+=1
        i++
    }
   return nombreRepetion
}

//appelle de la fonction
let phrase = prompt('entrez une phrase: ', '')
let caraterRechercher = prompt('entrez le caractere que vous recherchez : ', '')
nombrePresentCaratere(phrase, caraterRechercher)


