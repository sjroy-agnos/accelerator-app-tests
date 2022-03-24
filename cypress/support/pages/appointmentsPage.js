class AppointmentsPage {
    //----------------- Locators -----------------//
    appointmentsHeader = "div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true']>span[class*='MuiBox-root']>span"
    upcomingTab = "div[class='MuiTabs-scroller MuiTabs-fixed'] button:nth-child(1)"
    newScheduleAppointmentButton = "svg[title='Schedule Appointment']"
    pastAppointmentTab = "div[class='MuiTabs-scroller MuiTabs-fixed'] button:nth-child(2)"
    pastAppointmentList = "div[class*='mobileViewList']>div"
}
module.exports = AppointmentsPage;