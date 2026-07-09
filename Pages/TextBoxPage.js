const { URLS } = require('../TestData/Urls');
const { expect } = require('@playwright/test');
const { TextBoxLocator } = require('../Locators/TextBoxLocator');

exports.TextBoxPage = class TextBoxPage {

    constructor(page){
        this.page = page;
        this.locator = TextBoxLocator;
    }

    async gotoTextBoxPage(){
        await this.page.goto(URLS.demoQA);
    }

    async enterFullName(name){
        await this.page.fill(this.locator.fullName,name);
    }

    async enterEmail(email){
        await this.page.fill(this.locator.email,email);
    }

    async enterCurrentAddress(address){
        await this.page.fill(this.locator.currentAddress,address);
    }

    async enterPermanentAddress(address){
        await this.page.fill(this.locator.permanentAddress,address);
    }

    async ClickSubmit(){
        await this.page.locator(this.locator.submitButton).scrollIntoViewIfNeeded();
        await this.page.click(this.locator.submitButton);
    }

    async verifyName(name){
    await expect(this.page.locator(this.locator.outputName)).toContainText(name);
    }

    async verifyEmail(email){
    await expect(this.page.locator(this.locator.outputEmail)).toContainText(email);
    }

    async verifyCurrentAddress(address){
    await expect(this.page.locator(this.locator.outputCurrentAddress)).toContainText(address);
    }

    async verifyPermanentAddress(address){
    await expect(this.page.locator(this.locator.outputPermanentAddress)).toContainText(address);
    }
}

