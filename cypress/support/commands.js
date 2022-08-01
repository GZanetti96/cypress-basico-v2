Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function(){
    cy.get('#firstName').type("Gabriel")
    cy.get('#lastName').type("Zanetti")
    cy.get('#email').type("email@email.com.br")
    cy.get('#open-text-area').type("teste")
    cy.contains('button', "Enviar").click()  
})