class Controller {

    procuraEMostraFilme (filme) {

        let model = new Model()
        model.requisicao(filme, () => {
            let view = new View()
            view.mostraFilme(model);
        });
    }
}

[...document.querySelectorAll('.cards-filmes')].forEach(function(card) {
    card.addEventListener("click", () => {
        let filme = card.id;

        let controller = new Controller();
        controller.procuraEMostraFilme(filme);
    })
})

let controlar = new Controller()