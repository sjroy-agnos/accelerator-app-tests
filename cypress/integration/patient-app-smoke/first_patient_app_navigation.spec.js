/// <reference types="cypress" />

const example_data = require("../../fixtures/example.json")
const HomePage = require("../../support/pages/homePage")
const MyPlanPage = require("../../support/pages/myPlanPage")
const AppointmentsPage = require("../../support/pages/appointmentsPage")

describe('Patient-App Smoke Navigation', () => {

    beforeEach(() => {
      cy.visit(example_data.baseUrl)
    })

    it("Validate smoke navigation", async function () {
      // page references
      const homePage = new HomePage()
      const myPlanPage = new MyPlanPage()
      const appointmentsPage = new AppointmentsPage()

      // validate Patient-App navigation tray links
      cy.verifyElementPropertyAndValueIncluded(homePage.homePageImageLink, 'src', example_data.logoName)

      cy.checkVisibilityOfElement(homePage.myPlanLink)

      cy.checkVisibilityOfElement(homePage.appointmentsLink)
        
      cy.checkVisibilityOfElement(homePage.myProvidersLink)
      
      cy.checkVisibilityOfElement(homePage.healthLink)

      cy.checkVisibilityOfElement(homePage.moreBreadcrumbLink)

      // Navigating to My Plan
      cy.clickOnElement(homePage.myPlanLink)

      // validate My Plan page
      cy.url().should('include', '/my-plan')

      cy.checkElementVisibilityWithText(myPlanPage.memberIdLabel, example_data.memberIDLabel)

      cy.checkElementVisibilityWithText(myPlanPage.subscriberLabel, example_data.subscriberLabel)
      
      cy.checkElementVisibilityWithText(myPlanPage.contactHealthPlanLabel, example_data.contactHealthPlanLabel)

      // Navigating to Appointments
      cy.clickOnElement(homePage.appointmentsLink)

      // validate Appointments page
      cy.url().should('include', '/appointments')

      cy.checkElementVisibilityWithText(appointmentsPage.appointmentsHeader, example_data.appointmentsHeader)
      
      cy.checkElementVisibilityWithTextAndSelected(appointmentsPage.upcomingTab, example_data.upcomingTab)
  
      cy.checkVisibilityOfElement(appointmentsPage.newScheduleAppointmentButton)

      cy.checkElementVisibilutyWithTextAndNotSelected(appointmentsPage.pastAppointmentTab)
      
      cy.clickOnElement(appointmentsPage.pastAppointmentTab)
      cy.checkElementVisibilityWithTextAndSelected(appointmentsPage.pastAppointmentTab, example_data.pastTab)

      cy.verifyPresenceOfList(appointmentsPage.pastAppointmentList)

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