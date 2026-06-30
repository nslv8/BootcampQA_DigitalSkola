import assert from "node:assert/strict";
import { Builder, By, until } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";

describe("Google Search Test", function () {
  let driver;

  it("Visit SauceDemo dan cek page title", async function () {
    const options = new chrome.Options();
    // // options.addArguments("--incognito"); // option ke chrome supaya gaada popup password nya
    // driver = await new Builder()
    //   .forBrowser("chrome")
    //   .setChromeOptions(options)
    //   .build();

    driver = await new Builder().forBrowser('chrome').build();

    await driver.get("https://www.saucedemo.com");
    const title = await driver.getTitle();

    // assert: memastikan object sama persis
    assert.strictEqual(title, "Swag Labs");

    // inputs
    let inputUsername = await driver.findElement(
      By.css('[data-test="username"]'),
    );
    let inputPassword = await driver.findElement(
      By.xpath('//*[@data-test="password"]'),
    );
    let buttonLogin = await driver.findElement(
      By.className("submit-button btn_action"),
    );
    await inputUsername.sendKeys("standard_user");
    await inputPassword.sendKeys("secret_sauce");
    await buttonLogin.click();

    // tunggu element tampil
    let buttonCart = await driver.wait(
      until.elementLocated(By.xpath('//*[@data-test="shopping-cart-link"]')),
      10000,
    );
    await driver.wait(
      until.elementIsVisible(buttonCart),
      5000,
      "Shopping cart harus tampil",
    );

    // assert: elememt ada
    await buttonCart.isDisplayed();

    // assert: text dalam element benar
    let textAppLogo = await driver.findElement(By.className("app_logo"));
    let logotext = await textAppLogo.getText();
    assert.strictEqual(logotext, "Swag Labs");

    await driver.sleep(1700);

    // dropdown search
    let dropdownSort = await driver.findElement(
      By.xpath('//select[@data-test="product-sort-container"]'),
    );
    await dropdownSort.click();
    let option = await driver.findElement(
      By.xpath('//option[text()="Price (low to high)"]'),
    );
    await option.click();

    await driver.quit();
  });

  it("Visit SauceDemo headless dan cek page title", async function () {
    const options = new chrome.Options();
    options.addArguments("--headless=new");
    options.addArguments("--incognito");

    driver = await new Builder()
      .forBrowser("firefox")
      .setChromeOptions(options)
      .build();

    await driver.get("https://www.saucedemo.com");
    const title = await driver.getTitle();
    assert.strictEqual(title, "Swag Labs");

    await driver.quit();
  });
});
