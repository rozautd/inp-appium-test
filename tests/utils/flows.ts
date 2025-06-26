import LoginPage from '../pageobjects/login.page.js';

export async function loginUser(login: string, password: string) {
    await LoginPage.waitForLoginScreen()
    await LoginPage.typeCredentials(
        login,
        password
    );
    await LoginPage.clickLoginButton();

}