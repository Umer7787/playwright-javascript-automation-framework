const { expect } = require("@playwright/test");

exports.LoginPage_1 = 
class LoginPage_1{

    constructor(page) {
        this.page = page;
        this.InputUsername = '#user-name';
        this.InputPassword = '#password';
        this.LoginBtn = '#login-button';
    }

    async gotoLoginPage(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password){
        await this.page.locator(this.InputUsername).fill(username);
        await this.page.locator(this.InputPassword).fill(password);
        await this.page.locator(this.LoginBtn).click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')

    }
}