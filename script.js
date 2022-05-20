// fetch("https://restcountries.eu/rest/v2/all")
fetch("https://restcountries.com/v2/all")
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      var x = document.createElement("li")
      var content = `<div class="card" style="width:350px">
                         <img class="card-img-top" src="countryFlag" alt="Card image">
                        <div class="card-body">
                         <h4 class="card-title">countryName</h4>
                         <p class="card-text">Capital: capitalName</p>
                         <p class="card-text">Region & Subregion: regionAndSubregion</p>
                         <p class="card-text">Population: countryPopulation people</p>
                         <p class="card-text">Language: countryLanguage </p>
                         <p class="card-text">Currency Name ~ Code ~ Symbol: currencyInfo </p>
                         <a href="#" class="btn btn-primary">See Profile</a>
                        </div>
                      </div>`
      var test = content.replace("countryFlag", json[i].flag)
      test = test.replace("countryName", json[i].name)
      test = test.replace("capitalName", json[i].capital)
      test = test.replace("regionAndSubregion", json[i].region + " / " + json[i].subregion)
      test = test.replace("countryPopulation", json[i].population)
      test = test.replace("countryLanguage", json[i].languages[0].name)
      //test = test.replace("currencyInfo", json[i].currencies[0].name + " / " + json[i].currencies[0].code + " / " + json[i].currencies[0].symbol)
      if (json[i].currencies) {
        test = test.replace("currencyInfo", json[i].currencies[0].name + " / " + json[i].currencies[0].code + " / " + json[i].currencies[0].symbol)
      } else {
        test = test.replace("currencyInfo", "NA")
      }
      x.innerHTML = test
      x.className = "list-group-item"
      document.getElementById("myul").appendChild(x)
    }
  })