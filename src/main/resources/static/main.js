const elementProbleme = document.querySelector(".problem");
const monForm = document.querySelector(".our-form");

let state = {
    score: 0,
    mauvaisesReponses: 0
}

function nouveauProbleme() {
    state.probleme = genererUnProbleme();
    elementProbleme.innerHTML =
        `${state.probleme.premierChiffre} ${state.probleme.operateur} ${state.probleme.deuxiemeChiffre}`
}

nouveauProbleme();

function genererNombre(max) {
    return Math.floor(Math.random() * (max + 1));
}

function genererUnProbleme() {
    return {
        premierChiffre: genererNombre(10),
        deuxiemeChiffre: genererNombre(10),
        operateur: ['+', '-', 'x'][genererNombre(2)]
    }
}

function handleSubmit(e) {
    e.preventDefault();
}

/**
 * En js, lorsqu'on a un objet qui représente un élément HTML,
 * on peut invoquer la méthode addEventListener avec 2 arguments:
 * Le premier argument est le type d'évènement que l'on écoute.
 * Le second argument est une fonction à déclencher lorsque l'évènement écouté survient.
 */
monForm.addEventListener("submit", handleSubmit)