const { expect } = require('@playwright/test');
const { URLS } = require ('../TestData/Urls')
const { HomePageLocator } = require('../Locators/HomePageLocator');

exports.HomePageImage = class HomePageImage {

    constructor(page) {

        this.page = page;
        this.locator = HomePageLocator;

    }

    async gotoImage(){

        await this.page.goto(URLS.automationExercise)
    }

    async verifyLogoVisible() {

        await expect(this.page.locator(this.locator.logo)).toBeVisible();

    }

}