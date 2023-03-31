import loginPage from "../../pageobject/login.page";
import productsPage from "../../pageobject/products.page";
import userCredentials from "../../data/user.credential";
import shoppingCartPage from "../../pageobject/shoppingcart.page";
import checkoutInformationPage from "../../pageobject/checkout.Information.page";
import checkoutOverviewPage from "../../pageobject/checkout.overview.page";
import checkoutCompletePage from "../../pageobject/checkout.complete.page";

describe('Checkout tests', () => {

    beforeEach(async () => {
        await loginPage.openPage();
        await loginPage.waitForPageToBeLoaded();
    });

    it('Checkout with one product', async () => {
        await loginPage.login(userCredentials.standardUser);

        await productsPage.addFirstProductToCart();

        await productsPage.shoppingCartLink().click();

        await shoppingCartPage.clickOnCheckout();

        await checkoutInformationPage.fillInCheckoutInformation('first name', 'last name', 'B555');

         await checkoutOverviewPage.clickOnFinish();

        const messageFromPage = await checkoutCompletePage.message().getText();
        expect(messageFromPage).toEqual('Thank you for your order!');
    })

})