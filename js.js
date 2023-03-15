const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };

const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.querySelector(".card-body");
const btn = document.querySelector(".btn");
const cardBody = document.querySelector(".card-body");

let getPokeData = (e) =>{
    
    let id = Math.floor(Math.random() * 150) +1;
    const realUrl = "https://pokeapi.co/api/v2/pokemon/"+id;
    fetch(realUrl).then(response => response.json())
    .then((data) => generatePokemon(data))

}

btn.addEventListener("click", getPokeData);
window.addEventListener("load",getPokeData);

function generatePokemon(data){
    console.log(data);
    const name = document.querySelector(".name");
    name.innerText = data.name[0].toUpperCase() + data.name.slice(1);
    
    const hp = document.querySelector(".hp");
    hp.innerText = "HP "+data.stats[0].base_stat;

    const attack =  document.querySelector(".attack h3");
    attack.innerText = data.stats[1].base_stat;

    const defense =  document.querySelector(".defense h3");
    defense.innerText = data.stats[2].base_stat;

    const speed =  document.querySelector(".speed h3");
    speed.innerText = data.stats[3].base_stat;

    const types = document.querySelector(".types");
    types.textContent = ""
    const typesList = typeNames(data);
    console.log(typesList);
    appendTypes(typesList);
    
    const imgSrc = data.sprites.other.dream_world.front_default;
    const img = document.querySelector("img");
    console.log(imgSrc);

    img.src = imgSrc;

    radialColor(typesList[0]);
}

function typeNames(data) {
    typeNameList = [];
    for(let i = 0; i < data.types.length ; ++i ){
        typeNameList.push(data.types[i].type.name);
    }
    return typeNameList
    
}

function appendTypes(typesList){
    const types = document.querySelector(".types");

    typesList.forEach(type => {
        let span = document.createElement("span");
        span.textContent = type;
        types.appendChild(span);
    });
}

function radialColor(type){
   
    
    card.style.background = `radial-gradient(circle at 50% 0%, ${type} 36%, #ffffff 36%)`;
    
   
}