import { testUser, deliveryAddress } from '../constants/userData.js';
import { backpack } from '../constants/productsData.js';
import { loginUser } from '../utils/flows.js';
import { logStep } from '../logger/customLog.js';
import ListingPage from '../pageobjects/listing.page.js';
import CartPage from '../pageobjects/cart.page.js';
import CheckoutPage from '../pageobjects/checkout.page.js';
import OverviewPage from '../pageobjects/overview.page.js';
import ThankYouPage from '../pageobjects/thankyou.page.js';

describe('Product order flow', () => {
    it('order one product for logged user', async () => {

        logStep('Logging in as standard user');
        await loginUser(
            testUser.username,
            testUser.password
        );

        logStep('Asserting product name and price on listing');
        await ListingPage.assertProductNameDisplayed(backpack.name);
        await ListingPage.assertProductPriceDisplayed(backpack.price);

        logStep('Adding product to cart');
        await ListingPage.clickAddToCartButtonOnPosition(1);
        await ListingPage.assertRemoveButtonDisplayed();

        logStep('Opening cart');
        await ListingPage.clickCart();

        logStep('Verifying product in cart and clicking checkout');
        await CartPage.clickCheckoutButton();
        await CartPage.assertProductNameAndPriceDisplayed(
            backpack.name,
            backpack.price
        );

        logStep('Filling delivery details');
        await CheckoutPage.fillUserData(
            deliveryAddress.name,
            deliveryAddress.lastName,
            deliveryAddress.postCode
        );
        await CheckoutPage.clickContinueButton();

        logStep('Verifying order summary and finishing order');
        await OverviewPage.assertProductItemDisplayed();
        await OverviewPage.assertSummaryDetailsSectionsDisplayed();
        await OverviewPage.assertPriceSectionDisplayed(backpack.price);
        await OverviewPage.clickFinishOrder();

        logStep('Verifying thank you screen');
        await ThankYouPage.assertThankYouPageDisplayed();
        await ThankYouPage.clickBackToHomeButton();

        logStep('Asserting product is still visible on listing');
        await ListingPage.assertProductNameDisplayed(backpack.name);
    });
});