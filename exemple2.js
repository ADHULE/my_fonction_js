//calcul de la fonction de f(x) si x<0 f(x)=x*x+7 sinon f(x)=x*2+7
function fonction( x){
    let reponse;
    if(x<0){
        reponse=((x*3)+7)
    }else{
        reponse=((x*2)+7)
    }
    console.log("f(x)= "+reponse)
    return reponse
}

//demande d'un nombre
let nombre=parseInt(prompt("entrez un nombre"))
//appelle de la fonction 
fonction(nombre)

