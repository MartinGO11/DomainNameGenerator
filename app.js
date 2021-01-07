
let pron = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dom = ['.com']
/*se declaran funciones de cada paso*/

var arraypronAndAdjAndNoun = [];
function domainNameGenerator() {

     for (i = 0; i < pron.length; i++)/*comienzo con el primer pronombre*/ {

        for (j = 0; j < adj.length; j++)/* se junta el pronombre con cada adjetivo */ {


            for (k = 0; k < noun.length; k++) {
                arraypronAndAdjAndNoun.push(pron[i] + adj[j] + noun[k] + ".com");
            }

        }
    }
    console.log(arraypronAndAdjAndNoun);
}

domainNameGenerator();