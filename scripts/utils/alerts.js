import { getRecipes } from "../api.js";
import { RecipeCard } from "../constructor/displayCards.js";
//import { searchBarInput } from "./searchBar.js";
//import { filteredCards } from "./searchBar.js";

// condition to see the different alert success or danger
export class Alerts {
  handleAlert() {    
    const alertBox = document.querySelector(".alert");
    if (searchBarInput.value.length != 0 && RecipeCard.length == 0) {
      this.dangerAlert(alertBox);
      console.log(searchBarInput);
    } else if (
      searchBarInput.value.length < 3 &&
      RecipeCard.length == filteredCards.length
    ) {
      alertBox.classList.remove("displayed");
    } else {
      this.successAlert(alertBox);
    }
    this.closeAlert(alertBox);
    
    //console.log(userInput);
  }
  // when the research on the search bar is a success
  // create display
  successAlert(alertBox) {
    alertBox.classList.add("alert-success");
    alertBox.classList.add("displayed");
    alertBox.classList.remove("alert-danger");
    if (RecipeCard.length > 1) {
      alertBox.innerHTML = `
                  ${RecipeCard.length} recettes correspondent à votre recherche
                  <i class="close-alert far fa-times-circle"></i>
                  `;
    } else {
      alertBox.innerHTML = `
                  ${RecipeCard.length} recettes correspondent à votre recherche
                  <i class="close-alert far fa-times-circle"></i>
                  `;
    }
    
  }
  // no success research on searchBar alert remove
  // create display dangerAlert
  dangerAlert(alertBox) {
    alertBox.classList.add("alert-danger");
    alertBox.classList.add("displayed");
    alertBox.classList.remove("alert-success");
    return alertBox.innerHTML = `
                Aucune recette ne correspond à votre critère... 
                Vous pouvez chercher "tarte aux pommes", "poisson", etc.
                <i class="close-alert far fa-times-circle"></i>
                `;
  }

  // final close the alertBox
  closeAlert(alertBox) {
    if (alertBox.classList.contains("displayed")) {
      const closeAlertBox = document.querySelector(".close-alert");
      closeAlertBox.addEventListener("click", () => {
        alertBox.classList.remove("displayed");
      });
    }
  }
};

