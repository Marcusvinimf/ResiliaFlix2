class View {


    mostraFilme(model) {
        let title = document.getElementById('title');
        let description = document.getElementById('description');
        let rating = document.getElementById('rating');
        let year = document.getElementById('year');
        let director = document.getElementById('director');
        let poster = document.getElementById('poster')

        title.textContent = model.titulo;
        description.textContent = model.descricao;
        rating.textContent = model.nota;
        year.textContent = model.ano;
        director.textContent = model.diretor;
        poster.src = model.poster;

    }
}