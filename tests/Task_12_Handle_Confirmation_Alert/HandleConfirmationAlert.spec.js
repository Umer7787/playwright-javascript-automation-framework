const {test} = require ('@playwright/test')
const {AlertConfirmPage} = require ('../../Pages/AlertConfirmPage')

test('Verify JavaScript confirmation alert can be accepted and dismissed', async({page})=>{

    const confirmAlert = new AlertConfirmPage(page);

    await confirmAlert.gotoWebPage();

    await confirmAlert.acceptConfirm();

    await confirmAlert.verifyConfirmMessage();
})