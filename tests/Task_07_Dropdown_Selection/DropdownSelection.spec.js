const { test } = require('@playwright/test');
const { DropdownPage } = require('../../Pages/DropdownPage');
const { DropdownData } = require('../../TestData/DropdownData');

test('Task 07 - Verify Dropdown Selection', async ({ page }) => {

    const dropdown = new DropdownPage(page);

    await dropdown.gotoDropdownPage();

    await dropdown.selectOption(DropdownData.option1);

    await dropdown.verifySelectedOption(DropdownData.option1);

});