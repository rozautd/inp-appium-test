class ListingPage {

    get cart() { return $('~test-Cart'); }
    get removeButton() { return $('~test-REMOVE'); }
    get sortButton() { return $('~test-Modal Selector Button'); }

    option(optionText: string) { return $(`//android.widget.TextView[@text="${optionText}"]`); }

    addToCart(index: number) { return $(`(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[${index}]`); }
    productItemTitle(productName: string) {
        return $(`//android.widget.TextView[@content-desc="test-Item title" and @text="${productName}"]`);
    }
    productPrice(price: string) {
        return $(`//android.widget.TextView[@content-desc="test-Price" and @text="$${price}"]`);
    }

    async clickAddToCartButtonOnPosition(position: number) {
        await this.addToCart(position).click();
    }

    async clickCart() {
        await this.cart.click();
    }

    async assertProductNameDisplayed(productName: string) {
        await expect(this.productItemTitle(productName)).toBeDisplayed();
    }

    async assertProductPriceDisplayed(price: string) {
        await expect(this.productPrice(price)).toBeDisplayed();
    }

    async assertRemoveButtonDisplayed() {
        await expect(this.removeButton).toBeDisplayed();
    }

    async openSortMenu() {
        await this.sortButton.click();
    }

    async selectSortingOption(optionText: string) {
        await this.option(optionText).click();
    }
}

export default new ListingPage();