import {test, expect } from "@playwright/test";
import { LoginPage_1 } from "../../Pages/LoginPage_1";

test('Verify Login Functionality', async({page})=>{

    const login = new LoginPage_1(page);

    await login.gotoLoginPage();
    await login.login('standard_user','secret_sauce')
    await page.waitForTimeout(3000)
    
})