/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getBreweries, displayResults, and watchSubmit functions. When you're done, this app should allow a user to search for a state, and display a list of breweries in that state. The list should include the brewery's name and a link to their website. You should make requests to this API: https://www.openbrewerydb.org/ . Make any necessary adjustments to make this app accessible. */

"use strict";

function getBreweries(state) {
  const url = `https://api.openbrewerydb.org/breweries?by_state=${state}`;
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $("#js-error-message").text(`Something went wrong: ${err.message}`);
    });
}

function displayResults(responseJson) {
  $("#results").empty();

  $("#results").append(`${responseJson[19].name}`);

  $("#results").removeClass("hidden");
}

function watchForm() {
  $("form").submit(event => {
    event.preventDefault();
    const state = $("#state").val();
    getBreweries(state);
  });
}

$(watchForm);
