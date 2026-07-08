const { expect } = require("@playwright/test");

exports.HomePage = 
class HomePage{

    constructor(page){
        this.page= page;
    }

    async gotoLoginPage(){
        await this.page.goto('https://demoqa.com/');
    }

    async VerifyPageTitle(){

        await expect (this.page).toHaveTitle('demosite')
    }
}

