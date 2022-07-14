import BasePage from "./BasePage";

class Interact extends BasePage {
    static get url() {
        return "https://demoqa.com/sortable";
      }
    static get list(){
        return cy.get("[class = 'vertical-list-container mt-4']");
    }
    static get numbers(){
        return cy.get('[class="list-group-item list-group-item-action"]').eq(0)
    }
    
    
    
}

export default Interact;
