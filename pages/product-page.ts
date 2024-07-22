import { expect, type Locator, type Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly addtocartBtn: Locator;
  readonly proceedBtn: Locator;
  constructor(page: Page) {
    this.page = page;
    this.addtocartBtn = page.getByRole('button', { name: 'Add to Cart' });
    this.proceedBtn = page.locator('span[id="attach-sidesheet-checkout-button"] input');
  }
  async clickAddToCart(){
    await this.addtocartBtn.click();
  }
  async clickOnproceedBtn(){
    await this.proceedBtn.click();
  }
  
}