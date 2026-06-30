import assert from "node:assert/strict";
import { Builder, By, until } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";
import firefox from "selenium-webdriver/firefox.js";

describe("Tugas Sesi 9 - SauceDemo", function () {
  let driver;

  afterEach(async function () {
    if (driver) {
      await driver.quit();
      driver = null;
    }
  });

  describe("Chrome", function () {
    it("Login chrome berhasil", async function () {
      driver = await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(new chrome.Options())
        .build();

      await driver.get("https://www.saucedemo.com");

      const inputUsername = await driver.findElement(
        By.css('[data-test="username"]'),
      );
      const inputPassword = await driver.findElement(
        By.css('[data-test="password"]'),
      );
      const buttonLogin = await driver.findElement(
        By.css('[data-test="login-button"]'),
      );

      await inputUsername.sendKeys("standard_user");
      await inputPassword.sendKeys("secret_sauce");
      await buttonLogin.click();

      const inventoryContainer = await driver.wait(
        until.elementLocated(By.css('[data-test="inventory-container"]')),
        10000,
      );
      await driver.wait(
        until.elementIsVisible(inventoryContainer),
        5000,
        "Halaman inventory harus tampil",
      );

      const inventoryTitle = await driver.findElement(
        By.css('[data-test="title"]'),
      );
      const titleText = await inventoryTitle.getText();
      assert.strictEqual(titleText, "Products");

      const shoppingCartLink = await driver.findElement(
        By.css('[data-test="shopping-cart-link"]'),
      );
      await driver.wait(
        until.elementIsVisible(shoppingCartLink),
        5000,
        "Shopping cart harus tampil",
      );
      assert.strictEqual(await shoppingCartLink.isDisplayed(), true);
    });

    it("Sorting chrome berhasil dari Z ke A", async function () {
      driver = await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(new chrome.Options())
        .build();

      await driver.get("https://www.saucedemo.com");

      const inputUsername = await driver.findElement(
        By.css('[data-test="username"]'),
      );
      const inputPassword = await driver.findElement(
        By.css('[data-test="password"]'),
      );
      const buttonLogin = await driver.findElement(
        By.css('[data-test="login-button"]'),
      );

      await inputUsername.sendKeys("standard_user");
      await inputPassword.sendKeys("secret_sauce");
      await buttonLogin.click();

      const inventoryContainer = await driver.wait(
        until.elementLocated(By.css('[data-test="inventory-container"]')),
        10000,
      );
      await driver.wait(
        until.elementIsVisible(inventoryContainer),
        5000,
        "Halaman inventory harus tampil",
      );

      const dropdownSort = await driver.findElement(
        By.css('[data-test="product-sort-container"]'),
      );
      await dropdownSort.click();

      const optionSortZA = await driver.findElement(
        By.xpath('//option[text()="Name (Z to A)"]'),
      );
      await optionSortZA.click();

      const firstProductName = await driver
        .findElement(By.css(".inventory_item_name"))
        .getText();
      assert.strictEqual(firstProductName, "Test.allTheThings() T-Shirt (Red)");
    });
  });

  describe("Firefox", function () {
    it("Login firefox berhasil", async function () {
      driver = await new Builder()
        .forBrowser("firefox")
        .setFirefoxOptions(new firefox.Options())
        .build();

      await driver.get("https://www.saucedemo.com");

      const inputUsername = await driver.findElement(
        By.css('[data-test="username"]'),
      );
      const inputPassword = await driver.findElement(
        By.css('[data-test="password"]'),
      );
      const buttonLogin = await driver.findElement(
        By.css('[data-test="login-button"]'),
      );

      await inputUsername.sendKeys("standard_user");
      await inputPassword.sendKeys("secret_sauce");
      await buttonLogin.click();

      const inventoryContainer = await driver.wait(
        until.elementLocated(By.css('[data-test="inventory-container"]')),
        10000,
      );
      await driver.wait(
        until.elementIsVisible(inventoryContainer),
        5000,
        "Halaman inventory harus tampil",
      );

      const inventoryTitle = await driver.findElement(
        By.css('[data-test="title"]'),
      );
      const titleText = await inventoryTitle.getText();
      assert.strictEqual(titleText, "Products");

      const shoppingCartLink = await driver.findElement(
        By.css('[data-test="shopping-cart-link"]'),
      );
      await driver.wait(
        until.elementIsVisible(shoppingCartLink),
        5000,
        "Shopping cart harus tampil",
      );
      assert.strictEqual(await shoppingCartLink.isDisplayed(), true);
    });

    it("Sorting firefox berhasil dari Z ke A", async function () {
      driver = await new Builder()
        .forBrowser("firefox")
        .setFirefoxOptions(new firefox.Options())
        .build();

      await driver.get("https://www.saucedemo.com");

      const inputUsername = await driver.findElement(
        By.css('[data-test="username"]'),
      );
      const inputPassword = await driver.findElement(
        By.css('[data-test="password"]'),
      );
      const buttonLogin = await driver.findElement(
        By.css('[data-test="login-button"]'),
      );

      await inputUsername.sendKeys("standard_user");
      await inputPassword.sendKeys("secret_sauce");
      await buttonLogin.click();

      const inventoryContainer = await driver.wait(
        until.elementLocated(By.css('[data-test="inventory-container"]')),
        10000,
      );
      await driver.wait(
        until.elementIsVisible(inventoryContainer),
        5000,
        "Halaman inventory harus tampil",
      );

      const dropdownSort = await driver.findElement(
        By.css('[data-test="product-sort-container"]'),
      );
      await dropdownSort.click();

      const optionSortZA = await driver.findElement(
        By.xpath('//option[text()="Name (Z to A)"]'),
      );
      await optionSortZA.click();

      const firstProductName = await driver
        .findElement(By.css(".inventory_item_name"))
        .getText();
      assert.strictEqual(firstProductName, "Test.allTheThings() T-Shirt (Red)");
    });
  });
});
