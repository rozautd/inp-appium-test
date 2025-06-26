import { testUser, deliveryAddress } from '../constants/userData.js';
import { backpack } from '../constants/productsData.js';
import { loginUser } from '../utils/flows.js';
import ListingPage from '../pageobjects/listing.page.js';
import CartPage from '../pageobjects/cart.page.js';
import CheckoutPage from '../pageobjects/checkout.page.js';
import OverviewPage from '../pageobjects/overview.page.js';
import ThankYouPage from '../pageobjects/thankyou.page.js';

describe('Product order flow', () => {
    it('order one product for logged user', async () => {

        loginUser(
            testUser.username,
            testUser.password
        )

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

        await CheckoutPage.fillUserData(
            deliveryAddress.name,
            deliveryAddress.lastName,
            deliveryAddress.postCode
        );
        await CheckoutPage.clickContinueButton();

        await OverviewPage.assertProductItemDisplayed()
        await OverviewPage.assertSummaryDetailsSectionsDisplayed();
        await OverviewPage.assertPriceSectionDisplayed(backpack.price);
        await OverviewPage.clickFinishOrder();

        await ThankYouPage.assertThankYouPageDisplayed();
        await ThankYouPage.clickBackToHomeButton()

        await ListingPage.assertProductNameDisplayed(backpack.name);
    });
});