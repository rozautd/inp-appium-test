import ListingPage from '../pageobjects/listing.page.js';
import { loginUser } from '../utils/flows.js';
import { testUser } from '../constants/userData.js';
import { backpack, onesie, bikeLight } from '../constants/productsData.js';
import { logStep, logError } from '../logger/customLog.js';

describe('Sort products by price', () => {
    it('sort products by price ascending', async () => {
        try {
            logStep('Logging in as standard user');
            await loginUser(
                testUser.username,
                testUser.password
            );

            logStep(`Asserting product name and price on listing`);
            await ListingPage.assertProductNameDisplayed(backpack.name);
            await ListingPage.assertProductPriceDisplayed(backpack.price);

            logStep('Opening sort menu');
            await ListingPage.openSortMenu();

            logStep('Selecting sort option "Price (low to high)"');
            await ListingPage.selectSortingOption('Price (low to high)');

            await ListingPage.assertProductNameDisplayed(onesie.name);
            await ListingPage.assertProductPriceDisplayed(onesie.price);
            await ListingPage.assertProductNameDisplayed(bikeLight.name);
            await ListingPage.assertProductPriceDisplayed(bikeLight.price);

        } catch (error: any) {
            logError(`Test failed: ${error.message}`);
            throw error;
        };
    });
});
