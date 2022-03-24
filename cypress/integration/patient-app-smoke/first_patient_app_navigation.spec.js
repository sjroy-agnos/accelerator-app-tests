/// <reference types="cypress" />

const example_data = require("../../fixtures/example.json")
const HomePage = require("../../support/pages/homePage")

describe('Patient-App Smoke Navigation', () => {

    beforeEach(() => {
      cy.visit(example_data.baseUrl)
    })

    it("Validate smoke navigation", async function () {
      // page references
      const homePage = new HomePage()
      // validate Patient-App navigation tray links
      homePage.getHomePageImage()
        .should('have.attr', 'src')
        .and('include', 'Agnos-logo')

      // homePage.getMyPlanLink().should('be.visible')
      cy.checkVisibilityOfElement(homePage.myPleanLink)
        
      homePage.getAppointmentsLink().should('be.visible')
      
      homePage.getMyProvidersLink().should('be.visible')

      homePage.getHealthLink().should('be.visible')
        
      homePage.getMoreBreadcrumbLink().should('be.visible')

      // Navigating to My Plan
      // cy.get("a[href='/my-plan'] div[class='menu-icon-label menu-caption-style']").click()
      homePage.clickOnMyPlanLink()
      // validate My Plan page
      cy.url().should('include', '/my-plan')
      cy.get("div[class*='MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-']:nth-child(1) span")
        .should('be.visible')
        .should('have.text', 'Member Id')
      
      cy.get("div[class*='MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-']:nth-child(2) span")
        .should('be.visible')
        .should('have.text', 'Subscriber')
      
      cy.get("div[class*='MuiPaper-elevation1 MuiPaper-rounded']>div[class*='card-title']")
        .should('be.visible')
        .should('have.text', 'Contact Health Plan')

      // Navigating to Appointments
      cy.get("a[href='/appointments'] div[class='menu-icon-label menu-caption-style']").click()
      // validate Appointments page
      cy.url().should('include', '/appointments')
      cy.get("div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true']>span[class*='MuiBox-root']>span")
        .should('be.visible')
        .should('have.text', ' Appointments')
      
      cy.get("div[class='MuiTabs-scroller MuiTabs-fixed'] button:nth-child(1)")
        .should('be.visible')
        .should('have.text', 'Upcoming')
        .should('have.attr', 'class').and('include', 'Mui-selected')
  
      cy.get("svg[title='Schedule Appointment']").should('be.visible')

      cy.get("div[class='MuiTabs-scroller MuiTabs-fixed'] button:nth-child(2)")
        .should('be.visible')
        .should('have.text', 'Past')
        .should('have.attr', 'class').and('not.include', 'Mui-selected')
      
      cy.get("div[class='MuiTabs-scroller MuiTabs-fixed'] button:nth-child(2)").click()
        .should('have.attr', 'class').and('include', 'Mui-selected')

      cy.get("div[class*='mobileViewList']>div")
        .its('length').should('be.greaterThan', 0)
      // cy.log(cy.get("div[class*='mobileViewList']>div").its('length'))

      // first element in the Past Appointment list 
      let name1;
      cy.get("div[class*='mobileViewList']>div:nth-child(1) div[style*='overflow-wrap:']")
        .then(($patientLink) => {
          // const name2 = $patientLink.text()
          name1 = $patientLink.text();
          // cy.log(name1 + " -- " + name2)
        })
        .click()
      cy.log(name1)
    })
})