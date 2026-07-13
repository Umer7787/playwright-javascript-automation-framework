const {expect} = require ('@playwright/test')
const {URLS} = require ('../TestData/Urls')
const {ButtonLocator} = require ('../Locators/ButtonLocator')

exports.ButtonPage = class ButtonPAge{

    constructor(page){
        this.page = page;
        this.locator = ButtonLocator;
    }

    async gotoButtonPage(){
        await this.page.goto(URLS.buttons);
    }

    async performDoubleClick() {

        await this.page.dblclick(this.locator.doubleClickButton);
        
    }

    async performRightClick(){
        await this.page.click(this.locator.rightClicButton,{
            button: 'right'
        });
    }

    async performDynamicClick(){
        await this.page.click(this.locator.dynamicClickButton);
    }


    async verifyDoubleClickMessage() {

        await expect (this.page.locator(this.locator.doubleClickMessage))
            .toHaveText('You have done a double click');

    }

    async verifyRightClickMessage() {

        await expect(this.page.locator(this.locator.rightClicMessage))
            .toHaveText("You have done a right click");

    }

    async verifydynamicClickMessage() {

        await expect(this.page.locator(this.locator.dynamicClickMessage))
            .toHaveText("You have done a dynamic click");
            
    }
}