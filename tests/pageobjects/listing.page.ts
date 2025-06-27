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

    async clickAddToCartButtonOnPosition(position: number): Promise<this> {
        await this.addToCart(position).click();
        return this;
    }

    async clickCart(): Promise<this> {
        await this.cart.click();
        return this;
    }

    async assertProductNameDisplayed(productName: string): Promise<this> {
        await expect(this.productItemTitle(productName)).toBeDisplayed();
        return this;
    }

    async assertProductPriceDisplayed(price: string): Promise<this> {
        await expect(this.productPrice(price)).toBeDisplayed();
        return this;
    }

    async assertRemoveButtonDisplayed(): Promise<this> {
        await expect(this.removeButton).toBeDisplayed();
        return this;
    }

    async openSortMenu(): Promise<this> {
        await this.sortButton.click();
        return this;
    }

    async selectSortingOption(optionText: string): Promise<this> {
        await this.option(optionText).click();
        return this;
    }
}

export default new ListingPage();