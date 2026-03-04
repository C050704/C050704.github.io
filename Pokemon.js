const cache = {};
let currentPokemon = null;

document.getElementById("findBtn").addEventListener("click", fetchPokemon);
document.getElementById("addBtn").addEventListener("click", addToTeam);

function fetchPokemon() {

    const input = document.getElementById("pokemonInput").value.toLowerCase();
    if (!input) return;

    if (cache[input]) {
        displayPokemon(cache[input]);
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(response => {
            if (!response.ok) throw new Error("Not found");
            return response.json();
        })
        .then(data => {
            cache[input] = data;
            displayPokemon(data);
        })
        .catch(() => alert("Pokemon not found"));
}

function displayPokemon(data) {

    currentPokemon = data;

    document.getElementById("pokemonImage").src =
        data.sprites.front_default;

    document.getElementById("pokemonAudio").src =
        `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${data.id}.ogg`;

    const selects = [
        document.getElementById("move1"),
        document.getElementById("move2"),
        document.getElementById("move3"),
        document.getElementById("move4")
    ];

    selects.forEach(select => select.innerHTML = "");

    data.moves.forEach(moveObj => {
        selects.forEach(select => {
            const option = document.createElement("option");
            option.value = moveObj.move.name;
            option.textContent = moveObj.move.name;
            select.appendChild(option);
        });
    });
}

function addToTeam() {

    if (!currentPokemon) return;

    const teamDiv = document.getElementById("team");

    const memberDiv = document.createElement("div");
    memberDiv.className = "team-member";

    const img = document.createElement("img");
    img.src = currentPokemon.sprites.front_default;
    img.width = 80;

    const list = document.createElement("ul");

    [
        move1.value,
        move2.value,
        move3.value,
        move4.value
    ].forEach(move => {
        const li = document.createElement("li");
        li.textContent = move;
        list.appendChild(li);
    });

    memberDiv.appendChild(img);
    memberDiv.appendChild(list);
    teamDiv.appendChild(memberDiv);
}