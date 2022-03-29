/// <reference types="cypress" />

const example_data = require("../../fixtures/example.json")
const HomePage = require("../../support/pages/homePage")
const MyPlanPage = require("../../support/pages/myPlanPage")
const AppointmentsPage = require("../../support/pages/appointmentsPage")
const MyProvidersPage = require("../../support/pages/myProvidersPage")
const MyHealthPage = require("../../support/pages/myHealthPage")

describe('Patient-App Smoke Navigation', async function () {

  beforeEach(() => {
    cy.visit(example_data.baseUrl)
  })

  it("Validate smoke navigation", async function () {
    // page references
    const homePage = new HomePage()
    const myPlanPage = new MyPlanPage()
    const appointmentsPage = new AppointmentsPage()
    const myProvidersPage = new MyProvidersPage()
    const myHealthPage = new MyHealthPage()

    // validate Patient-App   tray links
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

    cy.checkElementVisibilutyWithTextAndNotSelected(appointmentsPage.pastAppointmentTab, example_data.pastTab)

    cy.clickOnElement(appointmentsPage.pastAppointmentTab)

    cy.checkElementVisibilityWithTextAndSelected(appointmentsPage.pastAppointmentTab, example_data.pastTab)

    cy.verifyPresenceOfList(appointmentsPage.pastAppointmentList)

    // first element in the Past Appointment list 
    cy.get(appointmentsPage.firstAppointment).invoke('text').as('appointmentName')
    cy.get(appointmentsPage.firstAppointment)
      .then(($patientLink) => {
        const name2 = $patientLink.text()
        cy.log(name2)
        cy.wrap(name2).as('name1')
        cy.clickOnElement(appointmentsPage.firstAppointment)
        // Verify Appointment details
        cy.checkVisibilityOfElement(appointmentsPage.appointmentDetailsHeader)
        cy.checkElementVisibilityWithText(appointmentsPage.appointmentForName, name2)
        cy.checkVisibilityOfWebElementWithSpecificText('button', 'RESCHEDULE')
        cy.checkVisibilityOfWebElementWithSpecificText('button', 'CANCEL')
        cy.checkVisibilityOfWebElementWithSpecificText('div', 'Woundcare')
        cy.checkVisibilityOfWebElementWithSpecificText('h6', 'Covid screening')
        cy.clickOnElement(appointmentsPage.appointmentDetailsBackButton)
      })

    // Navigating to My Providers
    cy.clickOnElement(homePage.myProvidersLink)

    // validate My Providers page
    cy.url().should('include', '/care-team')

    cy.checkElementVisibilityWithText(myProvidersPage.myProvidersHeader, 'Primary providers')
    cy.checkElementVisibilityWithText(myProvidersPage.careTeamHeader, 'Care Team')
    cy.verifyPresenceOfList(myProvidersPage.myProvidersList)
    cy.get(myProvidersPage.firstProviderName)
      .then(($firstProvider) => {
        const firstProviderNameVal = $firstProvider.text()
        cy.clickOnElement(myProvidersPage.firstProviderName)
        // Verify CareTeam Details
        cy.checkVisibilityOfWebElementWithSpecificText('div', 'CareTeam Details')
        // cy.checkVisibilityOfWebElementWithSpecificText('div', firstProviderNameVal)
        cy.checkElementVisibilityWithText(myProvidersPage.careTeamName, firstProviderNameVal.substring(0, firstProviderNameVal.length - 1))
        cy.checkVisibilityOfWebElementWithSpecificText('span', 'Contact')
        cy.checkVisibilityOfWebElementWithSpecificText('span', 'Address')
        cy.clickOnElement(myProvidersPage.careTeamDetailsBackButton)
      })
    
    // Navigating to My Health
    cy.clickOnElement(homePage.healthLink)

    // validate My Health page
    cy.url().should('include', '/my-health')

    cy.checkVisibilityOfWebElementWithSpecificText('div', 'My Health')
    cy.verifyListLength(myHealthPage.myHealthOptionsList, example_data.myHealthOptions.length)
    //verify options list
    cy.get(myHealthPage.myHealthOptionsList).each((item, index) => {
      cy.wrap(item).should('contain.text', example_data.myHealthOptions[index])
    })

    // Navigate and Verify My Health Option Tabs
    

  })
})