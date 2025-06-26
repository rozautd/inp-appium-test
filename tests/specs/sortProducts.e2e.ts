import ListingPage from '../pageobjects/listing.page.js';
import { loginUser } from '../utils/flows.js';
import { testUser } from '../constants/userData.js';
import { backpack, onesie, bikeLight } from '../constants/productsData.js';

describe('Sort products by price', () => {
    it('sort products by price ascending', async () => {

        loginUser(
            testUser.username,
            testUser.password
        )

        await ListingPage.assertProductNameDisplayed(backpack.name)
        await ListingPage.assertProductPriceDisplayed(backpack.price)
        await ListingPage.openSortMenu();

        await ListingPage.selectSortingOption('Price (low to high)');

        await ListingPage.assertProductNameDisplayed(onesie.name)
        await ListingPage.assertProductPriceDisplayed(onesie.price)
        await ListingPage.assertProductNameDisplayed(bikeLight.name)
        await ListingPage.assertProductPriceDisplayed(bikeLight.price)
    });
});