import { Given, When, Then } from "@wdio/cucumber-framework";
import loginPage from "../../../pageobject/login.page";
import productsPage from "../../../pageobject/products.page";
import userCredentials from "../../../data/user.credential";
import shoppingCartPage from "../../../pageobject/shoppingcart.page";
import checkoutInformationPage from "../../../pageobject/checkout.Information.page";
import checkoutOverviewPage from "../../../pageobject/checkout.overview.page";
import checkoutCompletePage from "../../../pageobject/checkout.complete.page";

Given('User open page', async () => {
    await loginPage.openPage();
    await loginPage.waitForPageToBeLoaded();
});

When('User logins as standardUser', async () => {
    await loginPage.login(userCredentials.standardUser);
});

When('User adds first product from list to cart', async () => {
    await productsPage.addFirstProductToCart();
});

When('User clicks on shoppingCartLink', async () => {
    await productsPage.shoppingCartLink().click();
});


When('User clicks on Checkout', async () => {
    await shoppingCartPage.clickOnCheckout();
});

When('User fill In Checkout Information {string}, {string} and {string}', async (firstName, lastName, postCode) => {
    await checkoutInformationPage.fillInCheckoutInformation(firstName, lastName, postCode);
});

When('User clicks Finish button on the Checkout Overview page', async () => {
    await checkoutOverviewPage.clickOnFinish();
});

Then('Checkout Overview page contains {string}', async (message) => {
    const messageFromPage = await checkoutCompletePage.message().getText();
    expect(messageFromPage).toEqual(message);
});
