let myTab = [
    {
        nom : "Wissal",
        note :11,
    },
    {
        nom : "imad",
        note :10,
    },
    {
        nom : "Manal",
        note :15,
        
    },
    {
        nom : "Nawal",
        note :  5,
    }
];

let myObjet = {
    nom:"Nawfal",
    note:1,
}
 
 
myTab.push(myObjet);

console.log(myTab);

function bulletin($nom,$note,$moyenne){
    
    if ($note > $moyenne) {
        return($nom + " " + "t'es un génie !");
        
    }else{
        if ($note === $moyenne) {
            return($nom + " " + "pas mal peu mieux faire");
        }if ($note < $moyenne) {
            return($nom + " " + "pitoyable, tu vas doubler si tu ne réagis pas");
        }

    }
     
}

let reussite = [];
let doubler = []; 

myTab.forEach(e => {
    let monBulletin = bulletin(e.nom,e.note,10);
    console.log(monBulletin);

    if (e.note >= 10) {
        reussite.push(e);
    }else{
        doubler.push(e);
    }
    
});

reussite.forEach(e => {
    console.log("tu passes en 2ème"+ " " + e.nom);
});

doubler.forEach(e => {
    console.log("tu restes en première, il fallait plus travailler"+ " " + e.nom);
});
// console.log( maMoyenne[0].nom); 








let eleve1 = {
    nom : "imad",
    note : [12,15,20],
}

let eleve2 = {
    nom : "manal",
    note : [12,15,22],
}
 
function my_name($a) {
    let somme = 0;
    $a.forEach(e => {
        somme += e;
    });
    return somme/$a.length;
    
}

let monEleve_1 = my_name(eleve1.note);
let monEleve_2 = my_name(eleve2.note);

if (monEleve_1 > monEleve_2) {
    console.log(eleve1.nom + " " + "t'as battu" + " " + eleve2.nom);    
}else{
    if (monEleve_1 === monEleve_2) {
        console.log(eleve1.nom + " et " +  eleve2.nom  + " " + "sont ex aequo");            
    }else{
        console.log(eleve2.nom + " " + "t'as battu" + " " + eleve1.nom);    

    }
}