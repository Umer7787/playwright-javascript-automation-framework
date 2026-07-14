const {expect} = require ('@playwright/test')
const {URLS} = require ('../TestData/Urls')
const {JavaScriptLocator} = require ('../Locators/JavaScriptAlertLocator')

exports.AlertPage = class AlertPage {

    constructor(page){
        this.page = page;
        this.locator = JavaScriptLocator;
    }

    async gotoAlertPage(){
        await this.page.goto(URLS.javascriptAlerts);
    }

    async acceptAlert(){
        this.page.once('dialog', async (dialog) =>{
            await dialog.accept();
        })

        await this.page.click(this.locator.jsAlertButton)
    }

    async verifyAlertMessage(){
        await expect(this.page.locator(this.locator.resultMessage))
        .toHaveText('You successfully clicked an alert');
    }
}