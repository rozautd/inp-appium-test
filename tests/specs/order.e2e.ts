import { testUser } from '../constants/userData.js';
import LoginPage from '../pageobjects/login.page.js';

describe('Product order flow', () => {
    it('order one product for logged user', async () => {

        await LoginPage.waitForLoginScreen()
        await LoginPage.typeCredentials(
            testUser.username,
            testUser.password
        );
        await LoginPage.clickLoginButton();
    });
});