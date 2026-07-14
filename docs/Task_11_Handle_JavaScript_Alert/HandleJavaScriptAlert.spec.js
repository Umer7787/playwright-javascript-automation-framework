const {test} = require ('@playwright/test')
const {AlertPage} = require ('../../Pages/AlertPage')

test('Verify JavaScript alert can be accepted successfully', async({page})=>{

    const Alert = new AlertPage(page);

    await Alert.gotoAlertPage();

    await Alert.acceptAlert();

    await Alert.verifyAlertMessage();
})