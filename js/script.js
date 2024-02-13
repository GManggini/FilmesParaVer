const $searchButton = document.getElementById("searchButton"); // opcional nomeclatura: $searchButton ou searchButtonElement
const overlay = document.getElementById("modalOverlay");
const movieName = document.getElementById("movieName");
const movieYear = document.getElementById("movieYear");

async function searchButtonClickHandler() {
    try {
        let url=`http://www.omdbapi.com/?apikey=${key}&t&=${movieNameParameter}&y=${movieYearParameter}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log("data: ", data)
            if(data.Error) {
                throw new Error("Filme não encontrado")
            }
        createModal(data);
        overlay.classList.add("open");
        } catch (error) {
            notie.alert({type: "error", text: error.message})
    }
}


function movieNameParameter(){
    if(movieName.value === ''){
        throw new Error("Insira um nome válido");
    }
    return movieName.value.split(' ').join('+');
}

function movieYearParameter(){
    if(movieYear !== 4 || Number.isNaN(Number(movieYear.value))){
        throw new Error("Insira um ano válido")
    }
    return `&y={movieYear.value}`
}
$searchButton.addEventListener("click", searchButtonClickHandler);
//utiliza $var para nomear uma variável que armazenam uma referencia à um elemento da pág
