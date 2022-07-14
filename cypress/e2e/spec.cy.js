import PracticeForm from "../pageObject/Form"
import Interact from "../pageObject/Interaction"
describe('part 2', () => {
  it('Forms - Practice forms', () => {
    PracticeForm.visit()
    PracticeForm.firstName.type('Markuss')
    PracticeForm.lastName.type('Haritonovs')
    PracticeForm.email.type('markussha123@gmail.com')
    PracticeForm.gender.eq(0).click()
    PracticeForm.mobile.type('1234567891')
    PracticeForm.birth.click()
    PracticeForm.year.select('1984')
    PracticeForm.month.select('February')
    PracticeForm.day.contains('28').click()
    PracticeForm.subjects.type('math')
    PracticeForm.math.click()
    PracticeForm.hobbies.eq(0).click()
    PracticeForm.CurrenCity.type('London')
    PracticeForm.State.click()
    PracticeForm.ncr.click()
    PracticeForm.city.click()
    PracticeForm.delhi.click()
    PracticeForm.submit.click()
    PracticeForm.validate.contains('td', 'Student Name').parent().should('contain','Markuss Haritonovs')
    PracticeForm.validate.contains('td', 'Student Email').parent().should('contain','markussha123@gmail.com')
    PracticeForm.validate.contains('td', 'Gender').parent().should('contain','Male')
    PracticeForm.validate.contains('td', 'Mobile').parent().should('contain','1234567891')
    PracticeForm.validate.contains('td', 'Date of Birth').parent().should('contain','28 February,1984')
    PracticeForm.validate.contains('td', 'Subjects').parent().should('contain','Maths')
    PracticeForm.validate.contains('td', 'Hobbies').parent().should('contain','Sports')
    PracticeForm.validate.contains('td', 'Address').parent().should('contain','London')
    PracticeForm.validate.contains('td', 'State and City').parent().should('contain','NCR Delhi')

  })
  it.only('Interactions - Sortable', ()=>{
   
    Interact.visit()
    Interact.list.should("have.text","OneTwoThreeFourFiveSix");
    Interact.numbers.trigger('mousedown', cy.get('.vertical-list-container > :nth-child(6)'))
    .trigger('mousemove', cy.get('.vertical-list-container > :nth-child(1)'))
    .trigger('mouseup');
    Interact.numbers.trigger('mousedown', cy.get('.vertical-list-container > :nth-child(6)'))
    .trigger('mousemove', cy.get('.vertical-list-container > :nth-child(2)'))
    .trigger('mouseup');
    Interact.numbers.trigger('mousedown', cy.get('.vertical-list-container > :nth-child(6)'))
    .trigger('mousemove', cy.get('.vertical-list-container > :nth-child(3)'))
    .trigger('mouseup');
    Interact.numbers.trigger('mousedown', cy.get('.vertical-list-container > :nth-child(6)'))
    .trigger('mousemove', cy.get('.vertical-list-container > :nth-child(4)'))
    .trigger('mouseup');
    Interact.numbers.trigger('mousedown', cy.get('.vertical-list-container > :nth-child(6)'))
    .trigger('mousemove', cy.get('.vertical-list-container > :nth-child(5)'))
    .trigger('mouseup');
    Interact.list.should("have.text","SixFiveFourThreeTwoOne");
  })
})