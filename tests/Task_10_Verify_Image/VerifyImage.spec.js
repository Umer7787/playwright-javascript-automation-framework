const { test } = require('@playwright/test');
const { HomePageImage } = require('../../Pages/HomePageImage');

test('Task 10 - Verify Homepage Logo Visibility', async ({ page }) => {

    const homePage = new HomePageImage(page);

    await homePage.gotoImage();

    await homePage.verifyLogoVisible();

});