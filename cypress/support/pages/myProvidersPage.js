class MyProvidersPage {
    //----------------- Locators -----------------//
    myProvidersList = "div[class*='MuiListItem-secondaryAction']"
    careTeamHeader = "div[class*='page-content-container_scrollbar-hidden']>div>div:nth-child(3) h6"
    myProvidersHeader = "div[class*='page-content-container_scrollbar-hidden']>div>div:nth-child(1) h6"
    firstProviderName = "div[class*='page-content-container_scrollbar-hidden']>div>div:nth-child(2) div[class*='provider-card-title']"
    careTeamDetailsBackButton = "div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-md-2 MuiGrid-grid-lg-2'] button"
    careTeamName = "div[class='MuiGrid-root MuiGrid-container MuiGrid-justify-content-xs-space-between']>div>div"
}
module.exports = MyProvidersPage;