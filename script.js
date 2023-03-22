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
                <p><span>${detailPokemon.id}</span> : <span>${
          detailPokemon.name
        }</span></p>
                <img src="${detailPokemon.sprites.front_default}" alt="${
          detailPokemon.name
        }" />
                <p>Type : <span>${detailPokemon.types[0].type.name}</span></p>
            </div>
        </div>`;
    }

    document.getElementById("data-pokemon").innerHTML = data;
  } catch (error) {
    console.log(`Error Message : ${error}`);
  }
}

function resetCards() {
  document.querySelector("#data-pokemon").innerHTML = "";
}
