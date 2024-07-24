import { Page } from '@playwright/test';
import { BasePage } from './base-page';
import { Button } from '../page-factory/button';

export class YaMenuPage extends BasePage {
  private readonly mailButton: Button;

  constructor(public page: Page) {
    super(page);

    this.mailButton = new Button({ page, locator: '.MenuItem_mail', name: 'Mail Button', iframe: '.usermenu-portal__iframe' });
  }

  async mailButtonPresent() {
    await this.mailButton.shouldBeVisible();
  }
}
