/**
 * Écrire une fonction qui permet de retourner le nombre de caractères d’une chaîne de caractères passée en paramètre. 
 */

//declaration de la fonction
function nombreChaineCaractere(chaine) {
    let texte = chaine
    let nombreCaratere = 0
    for (let phrase of texte) {
        nombreCaratere++
        console.log(phrase)

    }
    console.log("votre texte contient " + nombreCaratere + "  caracteres")
}
//demande d'un texte
let demandeTexte = prompt("entrez une phrase ", '')
//appelle de la fonction
nombreChaineCaractere(demandeTexte)