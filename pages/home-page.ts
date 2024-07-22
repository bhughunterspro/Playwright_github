import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchProductInput: Locator;
  readonly searchButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.searchProductInput = page.locator('input[id="twotabsearchtextbox"]');
    this.searchButton = page.locator('input[id="nav-search-submit-button"]');
  }

  async goto() {
    await this.page.goto('https://amazon.in');
  }

  async searchProduct(productName: string){
    await this.searchProductInput.click();
    await this.searchProductInput.fill(productName);
    await this.searchButton.click();
  }
  
  async clickOnProductLink(productName: string){
    await this.page.locator('a', {
        hasText: productName,
      }).first().click();
  }
}