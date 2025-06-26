import { waitForElementToBeDisplayed } from '../utils/wait.js';

class LoginPage {
    
    get username() { return $('~test-Username'); }
    get password() { return $('~test-Password'); }
    get loginButton() { return $('~test-LOGIN'); }

    async typeCredentials(user: string, password: string) {
        await this.username.setValue(user);
        await this.password.setValue(password); 
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async waitForLoginScreen() {
        await waitForElementToBeDisplayed(this.loginButton);
    }
}

export default new LoginPage();