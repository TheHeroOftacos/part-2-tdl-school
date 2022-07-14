import BasePage from "./BasePage";

class PracticeForm extends BasePage {
    static get url() {
        return "/#/";
      }
    static get firstName(){
        return cy.get('[id="firstName"]')
    }
    static get lastName(){
        return cy.get('[id="lastName"]')
    }
    static get email(){
        return cy.get('[id="userEmail"]')
    }
    static get gender(){
        return cy.get('[class="custom-control custom-radio custom-control-inline"]')
    }
    static get mobile(){
        return cy.get('[id="userNumber"]')
    }
    static get birth(){
        return cy.get('[id="dateOfBirthInput"]')
    }
    static get year(){
        return cy.get('[class="react-datepicker__year-select"]')
    }
    static get month(){
        return cy.get('[class="react-datepicker__month-select"]')
    }
    static get day(){
        return cy.get('[class="react-datepicker__month"]')
    }
    static get subjects(){
        return cy.get('[id="subjectsContainer"]')
    }
    static get math(){
        return cy.get('[id="react-select-2-option-0"]')
    }
    static get hobbies(){
        return cy.get('[class="custom-control custom-checkbox custom-control-inline"]')
    }
    static get CurrenCity(){
        return cy.get('[id="currentAddress"]')
    }
    static get State(){
        return cy.get('[id="state"]')
    }
    static get ncr(){
        return cy.get('[id="react-select-3-option-0"]')
    }
    static get city(){
        return cy.get('[id="city"]')
    }
    static get delhi(){
        return cy.get('[id="react-select-4-option-0"]')
    }
    static get submit(){
        return cy.get('[id="submit"]')
    }
    static get validate(){
        return cy.get('[class="table table-dark table-striped table-bordered table-hover"]')
    }
    

    
}

export default PracticeForm;
