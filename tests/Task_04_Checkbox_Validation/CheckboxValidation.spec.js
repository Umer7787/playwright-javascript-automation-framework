import{test, expect} from '@playwright/test'
import { CheckboxPage } from '../../Pages/CheckboxPage'

test('Verify application URL after page load', async({page})=>{

    const Checkbox = new CheckboxPage(page)

    await Checkbox.gotoLoginPage();
    await Checkbox.CheckboxSelect()

    await expect (page.locator("div[id='result'] span:nth-child(1)")).toHaveText('You have selected :')

    
})