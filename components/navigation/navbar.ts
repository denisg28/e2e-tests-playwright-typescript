import { Page } from '@playwright/test';
import { Button } from '../../page-factory/button';

export class Navbar {

  private readonly loginButton: Button;
  private readonly menuButton: Button;

  constructor(public page: Page) {
    this.loginButton = new Button({ page, locator: '[href*="/auth"]', name: 'Login button' });
    this.menuButton = new Button({ page, locator: '.headline__personal-icon > svg', name: 'Menu' });
  }

  async visitLogin(): Promise<void> {
    await this.loginButton.shouldBeVisible();

    await this.loginButton.hover();
    await this.loginButton.click();
    await this.loginButton.page.waitForNavigation();
  }

  async openMenu(): Promise<void> {
    await this.menuButton.shouldBeVisible();

    await this.menuButton.hover();
    await this.menuButton.click();
  }

}
