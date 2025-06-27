class CheckoutPage {
    
    get firstNameTextField() { return $('~test-First Name'); }
    get lastNameTextField() { return $('~test-Last Name'); }
    get postCodeTextField() { return $('~test-Zip/Postal Code'); }
    get continueButton() { return $('~test-CONTINUE'); }

    async fillUserData(first: string, last: string, postCode: string): Promise<this> {
        await this.firstNameTextField.setValue(first);
        await this.lastNameTextField.setValue(last);
        await this.postCodeTextField.setValue(postCode);
        return this;
    }

    async clickContinueButton(): Promise<this> {
        await this.continueButton.click();
        return this;
    }
}

export default new CheckoutPage();