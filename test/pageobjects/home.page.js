import Page from "./page.js"
import { $, expect } from "@wdio/globals"

class HomePage extends Page {

    get cartIcon() {
        return $('#shopping_cart_container')
    }
    get addToCartButton1() {
        return $('#add-to-cart-sauce-labs-backpack')
    }
    get addToCartButton2() {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt')
    }
    get productImage() {
        return $('#item_4_img_link')
    }

    async validateOnHomePage() {
        await expect(this.cartIcon).toBeExisting();
        await expect(this.productImage).toBeExisting();
        await expect(this.addToCartButton1).toBeExisting();
    }

    async addProductToCart() {
        await this.addToCartButton1.click();
        await this.addToCartButton2.click();
    }

    async goToCartPage() {
        await this.cartIcon.click();
    }

    open() {
        return super.open('inventory.html')
    }
}

export default new HomePage();