import { scrollToElementByAccessibilityId } from '../utils/scroll.js';
import { assertTextDisplayed } from '../utils/assert.js';
import { backpack } from '../constants/productsData.js';

class OverviewPage {
  
  get btnFinish() { return $('~test-FINISH'); }
  get productItem() { return $('~test-Item'); }

  async clickFinishOrder(): Promise<this> {
    await this.btnFinish.click();
    return this;
  }

  async assertSummaryDetailsSectionsDisplayed(): Promise<this> {
    assertTextDisplayed("Payment Information:");
    assertTextDisplayed("Shipping Information:");
    await scrollToElementByAccessibilityId('test-FINISH');
    return this;
  }

  async assertProductItemDisplayed(): Promise<this> {
    await expect(this.productItem).toBeDisplayed();
    return this;
  }

  async assertPriceSectionDisplayed(price: string): Promise<this> {
    const tax = "2.40";
    const total = parseFloat(backpack.price) + parseFloat(tax);

    assertTextDisplayed(`Item total: $${price}`);
    assertTextDisplayed(`Tax: $${tax}`);
    assertTextDisplayed(`Total: $${total}`);
    return this;
  }
}

export default new OverviewPage();
