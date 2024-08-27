import HomePage from "../pageobjects/home.page.js";
import LoginPage from "../pageobjects/login.page.js";
import CartPage from "../pageobjects/cart.page.js";

describe('Test Saucedemo', () => {

    // tugas sesi 10
    it('Test 1 - Login Successfully and add product to cart', async () => {

        // login
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        // validate user on home page
        await HomePage.validateOnHomePage();

        // add product to cart
        await HomePage.addProductToCart();

        // go to cart page
        await HomePage.goToCartPage();

        // validate product added to cart page
        await CartPage.validateProductAddedToCart();

        await browser.pause(3000);
    });
});