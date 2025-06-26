import { assertTextDisplayed } from '../utils/assert.js';

class ThankYouPage {

  get backHomeButton() { return $('~test-BACK HOME'); }

  async assertThankYouPageDisplayed() {
    assertTextDisplayed("THANK YOU FOR YOU ORDER")
    assertTextDisplayed("Your order has been dispatched, and will arrive just as fast as the pony can get there!")
  }

  async clickBackToHomeButton() {
    await this.backHomeButton.click();
  }
}

export default new ThankYouPage();