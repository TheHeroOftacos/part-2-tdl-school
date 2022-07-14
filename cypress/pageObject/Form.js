import BasePage from "./BasePage";

class PracticeForm extends BasePage {
    static get url() {
        return "/#/";
      }
    static get bikeAddToCart(){
        return cy.get('[id="add-to-cart-sauce-labs-bike-light"]')
    }

    
}

export default PracticeForm;
