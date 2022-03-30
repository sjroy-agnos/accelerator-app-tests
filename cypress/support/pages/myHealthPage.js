class MyHealthPage {
    //----------------- Locators -----------------//
    myHealthOptionsList = "div[class*='page-content-container_scrollbar-hidden'] div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true']"
    myHealthSubOptionsList = "div[class*='page-content-container_scrollbar-hidden'] div[role='pointer']"
    myHealthSubOptionsBackButton = "div[class*='fixed-top_fixed-top'] div[class='MuiGrid-root']>div:nth-child(1) svg"
    activeMedicationsButton = "div[class*='page-content-container_scrollbar-hidden'] div>button:nth-child(1)"
    inactiveMedicationsButton = "div[class*='page-content-container_scrollbar-hidden'] div>button:nth-child(2)"
    allMedicationsButton = "div[class*='page-content-container_scrollbar-hidden'] div>button:nth-child(3)"

    //----------------- Methods -----------------//

    clickOptionFromMyHealthOptionList = async (value) => {
        cy.get(this.myHealthOptionsList).each(($el) => {
            if ($el.text() === value) {
                cy.wrap($el).click()
            }
        })
    }
}
module.exports = MyHealthPage;