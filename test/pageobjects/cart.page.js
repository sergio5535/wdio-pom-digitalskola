import Page from "./page.js"

class CartPage extends Page {

    get checkoutButton() {
        return $('#checkout')
    }
    get continueShoppingButton() {
        return $('#continue-shopping')
    }
    get product1() {
        return $('#item_4_title_link');
    }
    get product2() {
        return $('#item_1_title_link');
    }

    async validateProductAddedToCart() {
        await expect(this.product1).toBeExisting();
        await expect(this.product2).toBeExisting();
    }

    open() {
        return super.open('cart.html')
    }
}

export default new CartPage();