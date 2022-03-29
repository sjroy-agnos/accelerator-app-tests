class AppointmentsPage {
    //----------------- Locators -----------------//
    appointmentsHeader = "div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true']>span[class*='MuiBox-root']>span"
    upcomingTab = "div[class='MuiTabs-scroller MuiTabs-fixed'] button:nth-child(1)"
    newScheduleAppointmentButton = "svg[title='Schedule Appointment']"
    pastAppointmentTab = "div[class='MuiTabs-scroller MuiTabs-fixed'] button:nth-child(2)"
    pastAppointmentList = "div[class*='mobileViewList']>div"
    appointmentDetailsHeader = "div[class='MuiGrid-root MuiGrid-container']>div:nth-child(2)>div"
    appointmentForName = "div[class*='appointment-form_detailsContainer__'] div[role='pointer']"
    firstAppointment = "div[class*='mobileViewList']>div:nth-child(1) div[style*='overflow-wrap:']"
    appointmentDetailsBackButton = "div[class='MuiGrid-root MuiGrid-container'] button"
}
module.exports = AppointmentsPage;