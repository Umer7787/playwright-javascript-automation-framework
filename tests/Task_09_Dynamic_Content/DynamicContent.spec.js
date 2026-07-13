const { test } = require('@playwright/test');
const { DynamicContentPage } = require('../../Pages/DynamicContentPage');

test('Task 09 - Verify Dynamic Content Changes', async ({ page }) => {

    const dynamicContent = new DynamicContentPage(page);

    await dynamicContent.gotoDynamicContentPage();

    const oldContent = await dynamicContent.getFirstContent();

    await dynamicContent.refreshContent();

    await dynamicContent.verifyContentChanged(oldContent);

});