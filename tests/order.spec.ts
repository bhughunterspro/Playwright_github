import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { ProductPage } from '../pages/product-page';

test('Order product', async ({ page,context }) => {
  const homepage = new HomePage(page);
  await homepage.goto();
  await homepage.searchProduct('iphone 15 pro max');
  const pagePromise = context.waitForEvent('page');
  await homepage.clickOnProduct('iphone 15 pro max');
  const NewPage = await pagePromise;
  const productPage = new ProductPage(NewPage);
  await productPage.clickOnAddtoCart();
  await productPage.clickOnProceedBtn();
});