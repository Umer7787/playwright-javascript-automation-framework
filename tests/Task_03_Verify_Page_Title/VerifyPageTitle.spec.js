import{test, expect} from '@playwright/test'
import { HomePage } from '../../Pages/HomePage'

test('Verify Page title', async({page})=>{

    const Home = new HomePage(page)

    await Home.gotoLoginPage();
    await Home.VerifyPageTitle()


})