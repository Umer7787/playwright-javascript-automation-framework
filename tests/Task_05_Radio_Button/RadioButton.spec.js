import {test, expect} from '@playwright/test'
import { RadioButtonPage } from '../../Pages/RadioButtonPage'

test('Verify radio button selection functionality', async({page})=>{

    const LoginRB = new RadioButtonPage(page)

    await LoginRB.gotoLoginPage();
    await LoginRB.RadioButton();

    await expect(page.locator('.text-success')).toHaveText('Yes')

    await page.waitForTimeout(2000)
})