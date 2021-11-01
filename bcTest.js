//**********************************************************************************************************************************
// 1. Navigate to www.bettercloud.com 
// 2. Locate and click on “Company” in the navigation bar 
// 3. Check that “About BetterCloud” is visible as an H1.  
// 4. Locate and click the “Board” tab in the navigation bar on the page.  
// 5. Locate and extract the names and excerpts from the profile cards of all board members into a CSV spreadsheet.  
// 6. Save the CSV file in a dedicated folder of the root directory of your code, named ‘export’.  
// Bonus: 
// Use your desired automated solution to save snapshots, videos, or report results of your test 
// Setup a CI environment to run your automated test. 
//.....need to delete export file before....
//**************************************************************************************************************************************

describe('Test My TE Skills', () => {
    it('successfully loads & click company & check about bettercloud header & click leaders', () => {
        //Navigate to www.bettercloud.com
        cy.visit('www.bettercloud.com')

        //Locate and click on “Company” in the navigation bar
        cy.get('.sub-menu-toggle').invoke('show').eq(4).click()

        //Check that “About BetterCloud” is visible as an H1.
        cy.visit('https://www.bettercloud.com/company/')

        cy.get('h1')
            .should('contain', 'About BetterCloud')
            .should('be.visible')

        //Locate and click the “Board” tab in the navigation bar on the page.
        cy.get('.sub-menu-1').invoke('show').eq(9)
        cy.contains('Leadership').click({force: true})
      })

  //Locate and extract the names and excerpts from the profile cards of all board members into a CSV spreadsheet.
    it('locate and extract 1', () => {
        cy.get('.TeamBubbles-person_overlay').eq(0).invoke('show').click({force: true})
          .screenshot()
        cy.get('.TeamBubbles-modal_name')
          .then(($h3) => {
                 const nameText1 = ($h3.text())
              //   console.log('this is the name 1: ' + nameText1)
                 cy.writeFile('modalContent.csv', nameText1, {flag:'a+'})
             })
        cy.get('.TeamBubbles-modal_content')
           .find('span').then(($s) => {
                 const bio = $s.map((i, el) => Cypress.$(el).text())
                 const spanText = bio.get()
              //   console.log('this is the spanText 1: ' + spanText)
                 cy.writeFile('modalContent.csv', spanText, {flag:'a+'})
           })
        cy.get('.closeSymbol').invoke('show').click({force: true})
      })

    it('locate and extract 2', () => {
        cy.get('.TeamBubbles-person_overlay').eq(1).invoke('show').click({force: true})
        //  .screenshot()
        cy.get('.TeamBubbles-modal_name')
          .then(($h3) => {
                     const nameText2 = ($h3.text())
                     //console.log('this is the name 2: ' + nameText2)
                     cy.writeFile('modalContent.csv', nameText2, {flag:'a+'})
                 })
         cy.get('.TeamBubbles-modal_content')
             .find('span').then(($s) => {
                   const bio = $s.map((i, el) => Cypress.$(el).text())
                   const spanText = bio.get()
                  // console.log('this is the spanText 2: ' + spanText)
                   cy.writeFile('modalContent.csv', spanText, {flag:'a+'})
                  //expect(spanText, 'testing 4').to.have.length(4)
             })
        cy.get('.closeSymbol').invoke('show').click({force: true})
      })

    it('locate and extract 3', () => {
        cy.get('.TeamBubbles-person_overlay').eq(2).invoke('show').click({force: true})
        cy.get('.TeamBubbles-modal_name')
          .then(($h3) => {
                     const nameText3 = ($h3.text())
                  //   console.log('this is the name 3: ' + nameText3)
                     cy.writeFile('modalContent.csv', nameText3, {flag:'a+'})
                 })
            cy.get('.TeamBubbles-modal_content')
              .find('span').then(($s) => {
                    const bio = $s.map((i, el) => Cypress.$(el).text())
                    const spanText = bio.get()
                //    console.log('this is the spanText 3: ' + spanText)
                    cy.writeFile('modalContent.csv', spanText, {flag:'a+'})
                    //expect(spanText, 'testing 4').to.have.length(4)
              })
        cy.get('.closeSymbol').invoke('show').click({force: true})
      })

      it('locate and extract 4', () => {
        cy.get('.TeamBubbles-person_overlay').eq(3).invoke('show').click({force: true})
        cy.get('.TeamBubbles-modal_name')
          .then(($h3) => {
                     const nameText4 = ($h3.text())
              //       console.log('this is the name 4: ' + nameText4)
                     cy.writeFile('modalContent.csv', nameText4, {flag:'a+'})
                 })
            cy.get('.TeamBubbles-modal_content')
              .find('span').then(($s) => {
                    const bio = $s.map((i, el) => Cypress.$(el).text())
                    const spanText = bio.get()
                //    console.log('this is the spanText 4: ' + spanText)
                    cy.writeFile('modalContent.csv', spanText, {flag:'a+'})
                    //expect(spanText, 'testing 4').to.have.length(4)
              })
        cy.get('.closeSymbol').invoke('show').click({force: true})
      })
  })
