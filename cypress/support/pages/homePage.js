class HomePage {

    //----------------- Locators -----------------//
    homePageImageLink = "div[test-id='header'] img"
    myPlanLink = "a[href='/my-plan'] div[class='menu-icon-label menu-caption-style']"
    appointmentsLink = "a[href='/appointments'] div[class='menu-icon-label menu-caption-style']"
    myProvidersLink = "a[href='/care-team'] div[class='menu-icon-label menu-caption-style']"
    healthLink = "a[href='/my-health'] div[class='menu-icon-label menu-caption-style']"
    moreBreadcrumbLink = ".menu-more-icon"
    moreOptionsLinkList = "ul[role='menu'] a>div:nth-child(2)>span"
    myProfileLabels = "div[class*='page-content-container_scrollbar-hidden'] div[class='MuiGrid-root MuiGrid-container'] span[class$='MuiTypography-caption']"

    //----------------- Methods -----------------//

    getHomePageImage() {
        return cy.get(this.homePageImageLink)
    }

    getMyPlanLink() {
        return cy.get(this.myPleanLink)
    }


    getAppointmentsLink() {
        return cy.get(this.appointmentsLink)
    }

    getMyProvidersLink() {
        return cy.get(this.myProvidersLink)
    }

    getHealthLink() {
        return cy.get(this.healthLink)
    }

    getMoreBreadcrumbLink() {
        return cy.get(this.moreBreadcrumbLink)
    }

    verifyPresenceOfMyPlanLink() {
        this.getMyPlanLink().should('be.visible')
    }

    clickOnMyPlanLink() {
        this.getMyPlanLink().click()
    }
}

module.exports = HomePage;