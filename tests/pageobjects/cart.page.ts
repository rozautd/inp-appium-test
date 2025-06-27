import { assertTextDisplayed } from '../utils/assert.js';

class CartPage {

  get checkoutButton() { return $('~test-CHECKOUT'); }

  async clickCheckoutButton(): Promise<this> {
    await this.checkoutButton.click();
    return this;
  }

  async assertProductNameAndPriceDisplayed(name: string, price: string): Promise<this> {
    assertTextDisplayed(name)
    assertTextDisplayed(price)
    return this;
  }
}
export default new CartPage();