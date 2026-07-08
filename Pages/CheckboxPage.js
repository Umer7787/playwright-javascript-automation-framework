const { expect } = require("@playwright/test");

exports.CheckboxPage =
class CheckboxPage{

    constructor(page){
        this.page = page;
        this.Checkbox = "//span[@aria-label='Select Home']";
        // this.VerifyCheckBox ="div[id='result'] span:nth-child(1)"
    }

    async gotoLoginPage(){
        await this.page.goto('https://demoqa.com/checkbox')
    }

    async CheckboxSelect(){
        await this.page.click(this.Checkbox)
    }


}