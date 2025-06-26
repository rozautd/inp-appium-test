import type { ChainablePromiseElement } from 'webdriverio';

export async function waitForElementToBeDisplayed(
  element: ChainablePromiseElement<WebdriverIO.Element>,
  timeout = 5000
) {
  await element.waitForDisplayed({ timeout });
}