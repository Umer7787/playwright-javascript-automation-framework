// import{test, expect} from '@playwright/test'
// const { TextBoxPage } = require('../../Pages/TextBoxPage');
// const {TextBoxData} = require('../../TestData/TextBoxData');

// test('Task 06 - Verify Text Box Submission', async({page})=>{
//     const textBox = new TextBoxPage(page);

//     await textBox.gotoTextBoxPage();
//     await textBox.enterfull

// })

const { test } = require('@playwright/test');

const { TextBoxPage } = require('../../Pages/TextBoxPage');

const { TextBoxData } = require('../../TestData/TextBoxData');

test('Task 06 - Verify Text Box Submission', async ({ page }) => {

    const textBox = new TextBoxPage(page);

    await textBox.gotoTextBoxPage();

    await textBox.enterFullName(TextBoxData.fullName);

    await textBox.enterEmail(TextBoxData.email);

    await textBox.enterCurrentAddress(TextBoxData.currentAddress);

    await textBox.enterPermanentAddress(TextBoxData.permanentAddress);

    await textBox.ClickSubmit();

    await textBox.verifyName(TextBoxData.fullName);

    await textBox.verifyEmail(TextBoxData.email);

    await textBox.verifyCurrentAddress(TextBoxData.currentAddress);

    await textBox.verifyPermanentAddress(TextBoxData.permanentAddress);

});