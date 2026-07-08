import {test, expect } from "@playwright/test";
import { LoginPage_1 } from "../../Pages/LoginPage_1";

test('Verify Login Functionality', async({page})=>{

    const login = new LoginPage_1(page);

    await login.gotoLoginPage();
    await login.login('standard_user','secret_sauce')
    await page.waitForTimeout(1000)

    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')

    
})

test.only('Login with Inavlid Credentials', async({page})=>{

    const Login = new LoginPage_1(page)

    await Login.gotoLoginPage();
    await Login.login('Umer','1234')
    await page.waitForTimeout(1000)
    await Login.VerifyErrorMassege()
    
})