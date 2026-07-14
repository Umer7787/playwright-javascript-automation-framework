const {epect, expect} = require ('@playwright/test')
const { URLS } = require ('../TestData/Urls')
const { JavaScriptLocator} = require ('../Locators/JavaScriptAlertLocator')

exports.AlertConfirmPage = class AlertConfirmPage{

    constructor(page){
        this.page = page;
        this.locator = JavaScriptLocator;
    }

    async gotoWebPage(){
        await this.page.goto(URLS.javascriptAlerts)
    }

    async acceptConfirm(){
        this.page.once('dialog', async (dialog)=>{
            await dialog.accept();
        });

        await this.page.click(this.locator.jsConfirmButton)
    }

    async verifyConfirmMessage(){
        await expect(this.page.locator(this.locator.resultMessage))
        .toHaveText('You clicked: Ok');

    }
}