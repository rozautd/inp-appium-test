import { assertTextDisplayed } from '../utils/assert.js';

class ThankYouPage {

  get backHomeButton() { return $('~test-BACK HOME'); }

  async assertThankYouPageDisplayed(): Promise<this> {
    assertTextDisplayed("THANK YOU FOR YOU ORDER")
    assertTextDisplayed("Your order has been dispatched, and will arrive just as fast as the pony can get there!")
    return this;
  }

  async clickBackToHomeButton(): Promise<this> {
    await this.backHomeButton.click();
    return this;
  }
}

export default new ThankYouPage();