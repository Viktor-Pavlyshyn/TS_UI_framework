import BasePage from "./base.page";
import url from "../data/urls";

class LoginPage extends BasePage {

    private usernameInput() { return $("//input[@id='user-name']"); }
    private passwordInput() { return $("//input[@id='password']"); }
    private loginButton() { return $("//input[@id='login-button']"); }

    async waitForPageToBeLoaded() {
        await this.usernameInput().waitForDisplayed({ timeout: 3000, reverse: false });

        return this;
    }

    async login(user) {
        await this.usernameInput().scrollIntoView();
        await this.usernameInput().setValue(user.username);
        await this.passwordInput().setValue(user.password);
        await this.loginButton().click();
    }

    async openPage() {
        await super.open(url.baseUrl);
    }
}
export default new LoginPage();
