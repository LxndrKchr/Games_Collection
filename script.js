const addGame = document.querySelector("#add_game").addEventListener("click", () => {
    if (addGameForm.style.display === "none") {
        addGameForm.style.display = "";
    } else {
        addGameForm.style.display = "none";
    }
});
const addGameForm = document.querySelector("#add_game_form");
addGameForm.addEventListener("submit", () => {
    addGameFormValue();
});
const clear = document.querySelector("#clear").addEventListener("click", () => {
    localStorage.clear();
    window.location.reload();
});
const gamesContainer = document.querySelector("#collection_list_game");

const title = document.querySelector("#collection_list_game_title");
const time = document.querySelector("#collection_list_game_time");
const ganre = document.querySelector("#collection_list_game_ganre");
const age = document.querySelector("#collection_list_game_age");
const rating = document.querySelector("#collection_list_game_rating");
const deleteBtn = document.querySelector("#collection_list_game_deleteBtn");

let gamesStorage = [];
let newGamesStorage = JSON.parse(localStorage.getItem("gamesStorage"));

displayGame(gamesContainer, newGamesStorage);

function addGameFormValue() {
    if (newGamesStorage === null) newGamesStorage = [];

    let formTitle = document.querySelector("#title").value;
    let formTime = document.querySelector("#time").value;
    let formGanre = document.querySelector("#ganre").value;
    let formAge = document.querySelector("#age").value;
    let formRating = document.querySelector("#rating").value;

    let obj = {
        title: `${formTitle}`,
        time: `${formTime}`,
        ganre: `${formGanre}`,
        age: `${formAge}`,
        rating: `${formRating}`,
    };
    localStorage.setItem("obj", JSON.stringify(obj));
    newGamesStorage.unshift(obj);
    localStorage.removeItem("obj");

    localStorage.setItem("gamesStorage", JSON.stringify(newGamesStorage));
};

function displayGame(parent, games) {
    let html = "";
    if (games) {
        games.forEach((game) => {
            let gameItemTemplate = `
                <div id="collection_list_game" 
                class="grid grid-cols-5 place-content-center gap-4 rounded border-2 p-2 mt-2 bg-cyan-300 text-xl cursor-default">
                    <div id="collection_list_game_title">${game.title}</div>
                    <div id="collection_list_game_time">${game.time}</div>
                    <div id="collection_list_game_ganre">${game.ganre}</div>
                    <div id="collection_list_game_age">${game.age}</div>
                    <div id="collection_list_game_rating">${game.rating}</div>
                </div>`;
            html += gameItemTemplate;
        });
        parent.innerHTML += html;
    } else {
        parent.innerHTML = `
            <p class="flex place-content-evenly items-center m-4 cursor-default">no games</p >`
    }
};
