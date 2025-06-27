import { waitForElementToBeDisplayed } from '../utils/wait.js';

class LoginPage {
    
    get username() { return $('~test-Username'); }
    get password() { return $('~test-Password'); }
    get loginButton() { return $('~test-LOGIN'); }

    async typeCredentials(user: string, password: string): Promise<this> {
        await this.username.setValue(user);
        await this.password.setValue(password); 
        return this;
    }

    async clickLoginButton(): Promise<this> {
        await this.loginButton.click();
        return this;
    }

    async waitForLoginScreen(): Promise<this> {
        await waitForElementToBeDisplayed(this.loginButton);
        return this;
    }
}

export default new LoginPage();