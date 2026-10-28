const livres = [
    { titre: "1984", auteur: "George Orwell", annee: 1949, disponible: true },
    { titre: "Le Seigneur des anneaux", auteur: "J.R.R. Tolkien", annee: 1954, disponible: false },
    { titre: "Dune", auteur: "Frank Herbert", annee: 1965, disponible: true },
    { titre: "Fahrenheit 451", auteur: "Ray Bradbury", annee: 1953, disponible: true },
    { titre: "Le messie de Dune", auteur: "Frank Herbert", annee: 1969, disponible: true },

];

//.join même ligne

console.log(livres)

livres.push({ titre: "Neuromancien", auteur: "William Gibson", annee: 1984, disponible: false })

//let livredispo = livres.filter(livres.disponible === true);



/**
 * @param{string[]}livre tableau de livres
 * @returns{string} une map
 */
void affichrCatalogue(livres)

let tableautrier = livres.sort((a, b) => a.annee - b.annee);

let dispo = livres.disponible ? "Disponible" : "Non disponible"
return '=> ${ livre.titre } (${livre.annee}) - ${dispo}'





livres.map("=> " + titre + "(" + auteur + ") - "[Disponible / Non disponible]"")
// => titre(auteur) - [Disponible / Non disponible]
