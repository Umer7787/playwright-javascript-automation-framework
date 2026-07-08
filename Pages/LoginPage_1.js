const { expect } = require("@playwright/test");

exports.LoginPage_1 = 
class LoginPage_1{

    constructor(page) {
        this.page = page;
        this.InputUsername = '#user-name';
        this.InputPassword = '#password';
        this.LoginBtn = '#login-button';
        this.ErrorMassege = "h3[data-test='error']"
    }

    async gotoLoginPage(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password){
        await this.page.locator(this.InputUsername).fill(username);
        await this.page.locator(this.InputPassword).fill(password);
        await this.page.locator(this.LoginBtn).click();

    }


    async VerifyErrorMassege(){
        
        await expect(this.page.locator(this.ErrorMassege)).toHaveText('Epic sadface: Username and password do not match any user in this service')
    }
}