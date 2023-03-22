async function getData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=36", {
      method: "GET",
    });

    const json = await response.json();
    const results = json.results;

    let data = "";
    for (i = 0; i < results.length; i++) {
      const responseDetail = await fetch(results[i].url);
      const detailPokemon = await responseDetail.json();
      data =
        data +
        `<div class="card">
            <div class="card-wrapper">
                <p><span>${detailPokemon.id}</span> : <span>${detailPokemon.name}</span></p>
                <img src="${detailPokemon.sprites.front_default}" alt="${detailPokemon.name}" />
                <p>Type : <span class="type">${detailPokemon.types[0].type.name}</span></p>
            </div>
        </div>`;
    }

    document.getElementById("data-pokemon").innerHTML = data;

    // Get value type of pokemon
    const typePokemon = document.querySelectorAll(".type");

    // Change the bg color based on type of pokemon
    for (let i = 0; i < typePokemon.length; i++) {
      // Get bgcolor of card.wrapper
      const colorCard = document.querySelectorAll(".card-wrapper");
    //   if (typePokemon[i].innerHTML === "grass") {
    //   }
      switch (typePokemon[i].innerHTML) {
        case "grass":
          colorCard[i].classList.add("bg-grass");
          break;
        case "water":
          colorCard[i].classList.add("bg-water");
          break;
        case "fire":
          colorCard[i].classList.add("bg-fire");
          break;
        case "bug":
          colorCard[i].classList.add("bg-bug");
          break;
        case "normal":
          colorCard[i].classList.add("bg-normal");
          break;
        case "flying":
          colorCard[i].classList.add("bg-flying");
          break;
        case "rock":
          colorCard[i].classList.add("bg-rock");
          break;
        case "ground":
          colorCard[i].classList.add("bg-ground");
          break;
        case "psychic":
          colorCard[i].classList.add("bg-psychic");
          break;
        case "ghost":
          colorCard[i].classList.add("bg-ghost");
          break;
        case "dark":
          colorCard[i].classList.add("bg-dark");
          break;
        case "steel":
          colorCard[i].classList.add("bg-steel");
          break;
        case "poison":
          colorCard[i].classList.add("bg-poison");
          break;
        case "electric":
          colorCard[i].classList.add("bg-electric");
          break;
        case "fairy":
          colorCard[i].classList.add("bg-fairy");
          break;
        case "fighting":
          colorCard[i].classList.add("bg-fighting");
          break;
        case "dragon":
          colorCard[i].classList.add("bg-dragon");
          break;
        case "ice":
          colorCard[i].classList.add("bg-ice");
          break;
        default:
          break;
      }
    }
  } catch (error) {
    console.log(`Error Message : ${error}`);
  }
}

function resetCards() {
  document.querySelector("#data-pokemon").innerHTML = "";
}

