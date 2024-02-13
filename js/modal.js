const background = document.getElementById("modalBackground");

function backgroundClickHandler() {
    overlay.classList.remove("open");
}

function createModal(data) {
    modalContainer.innerHtml = `
    <section id="modalContainer">
                    <h2 id="movieTitle"> ${data.Title} - ${data.Year} </h2>
                    <section id="modalBody">
                        <img src= ${data.Poster} alt="Poster do Filme">
                        <div id="movieInfo">
                            <h3 id="moviePlot">${data.Plot}</h3>
                            <div id="movieGenre">
                                <h4>Gênero</h4>
                                <h5>${data.Genre}</div>
                            <p id="movieRating">
                                ${data.Rating} <br> 
                                Sua Avaliação: <input type="text">
                            </p>
                            <div id="movieCast">
                                <h4>Elenco: </h4>
                                <h5>${data.Actors}</h5> 
                            </div>
                        </div>
                    </section>  
                    `;
}
background.addEventListener("click", backgroundClickHandler);