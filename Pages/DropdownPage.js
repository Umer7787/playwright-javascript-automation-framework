const { expect } = require('@playwright/test');
const { URLS } = require('../TestData/Urls');
const { DropdownLocator } = require('../Locators/DropdownLocator');

exports.DropdownPage = class DropdownPage {

    constructor(page) {

        this.page = page;
        this.locator = DropdownLocator;

    }

    async gotoDropdownPage() {

        await this.page.goto(URLS.dropdown);

    }

    async selectOption(option) {

        await this.page.selectOption(this.locator.dropdown, {
            label: option
        });

    }

    async verifySelectedOption(option) {

        await expect(this.page.locator(this.locator.dropdown)).toHaveValue(
            option === 'Option 1' ? '1' : '2'
        );

    }

}