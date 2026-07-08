exports.RadioButtonPage =
class RadioButtonPage{

    constructor(page){
        this.page = page;
        this.RadioBtn = '#yesRadio'

    }

    async gotoLoginPage(){
        await this.page.goto('https://demoqa.com/radio-button')
    }

    async RadioButton(){
        await this.page.click(this.RadioBtn)
    }
}