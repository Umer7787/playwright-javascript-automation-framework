const { expect } = require('@playwright/test');
const { URLS } = require('../TestData/Urls');
const { DynamicContentLocator } = require('../Locators/DynamicContentLocator');

exports.DynamicContentPage = class DynamicContentPage {

    constructor(page) {

        this.page = page;
        this.locator = DynamicContentLocator;

    }

    async gotoDynamicContentPage() {

        await this.page.goto(URLS.dynamicContent);

    }

    async getFirstContent() {

    return await this.page
        .locator(this.locator.firstContent)
        .first()
        .textContent();

    }

    async refreshContent() {

        await this.page.click(this.locator.clickHereLink);

    }

    async verifyContentChanged(oldContent) {

        const newContent = await this.getFirstContent();

        expect(newContent).not.toBe(oldContent);

    }

}