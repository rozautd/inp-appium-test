import { testUser } from '../constants/userData.js';
import { backpack } from '../constants/productsData.js';
import LoginPage from '../pageobjects/login.page.js';
import ListingPage from '../pageobjects/listing.page.js';
import CartPage from '../pageobjects/cart.page.js';

describe('Product order flow', () => {
    it('order one product for logged user', async () => {

        await LoginPage.waitForLoginScreen()
        await LoginPage.typeCredentials(
            testUser.username,
            testUser.password
        );
        await LoginPage.clickLoginButton();

        await ListingPage.assertProductNameDisplayed(backpack.name);
        await ListingPage.assertProductPriceDisplayed(backpack.price);
        await ListingPage.clickAddToCartButtonOnPosition(1);
        await ListingPage.assertRemoveButtonDisplayed()
        await ListingPage.clickCart();

        await CartPage.clickCheckoutButton();
        await CartPage.assertProductNameAndPriceDisplayed(
            backpack.name,
            backpack.price
        )
    });
});