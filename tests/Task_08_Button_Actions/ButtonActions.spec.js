const {test} = require('@playwright/test')
const {ButtonPage} = require ('../../Pages/ButtonPage')

test('Verify button click actions', async({page})=>{

    const button = new ButtonPage(page);

    await button.gotoButtonPage();

    await button.performDoubleClick();

    await button.performRightClick();

    await button.performDynamicClick();

    await button.verifyDoubleClickMessage();

    // await button.verifyRightClickMessage();

    // await button.verifydynamicClickMessage();
})