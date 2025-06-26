import { assertTextDisplayed } from '../utils/assert.js';

class CartPage {

  get checkoutButton() { return $('~test-CHECKOUT'); }

  async clickCheckoutButton() {
    await this.checkoutButton.click();
  }

  async assertProductNameAndPriceDisplayed(name: string, price: string) {
    assertTextDisplayed(name)
    assertTextDisplayed(price)
  }
}
export default new CartPage();