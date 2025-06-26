import { scrollToElementByAccessibilityId } from '../utils/scroll.js';
import { assertTextDisplayed } from '../utils/assert.js';
import { backpack } from '../constants/productsData.js';

class OverviewPage {
  
  get btnFinish() { return $('~test-FINISH'); }
  get productItem() { return $('~test-Item'); }

  async clickFinishOrder() {
    await this.btnFinish.click();
  }

  async assertSummaryDetailsSectionsDisplayed() {
    assertTextDisplayed("Payment Information:");
    assertTextDisplayed("Shipping Information:");
    await scrollToElementByAccessibilityId('test-FINISH');
  }

  async assertProductItemDisplayed() {
    await expect(this.productItem).toBeDisplayed();
  }

  async assertPriceSectionDisplayed(price: string) {
    const tax = "2.40";
    const total = parseFloat(backpack.price) + parseFloat(tax);

    assertTextDisplayed(`Item total: $${price}`);
    assertTextDisplayed(`Tax: $${tax}`);
    assertTextDisplayed(`Total: $${total}`);
  }
}

export default new OverviewPage();
