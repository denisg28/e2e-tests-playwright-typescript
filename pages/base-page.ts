import test, { Page } from '@playwright/test';
import { Navbar } from '../components/navigation/navbar';
import { ServiceSuggest } from '../components/service.suggest';

export class BasePage {
  readonly navbar: Navbar;
  readonly serviceSuggest: ServiceSuggest;

  constructor(protected page: Page) {
    this.navbar = new Navbar(page);
    this.serviceSuggest = new ServiceSuggest(page);
  }

  async visit(url: string): Promise<void> {
    await test.step(`Opening the url "${url}"`, async () => {
      await this.page.goto(url, { waitUntil: 'networkidle' });
    });
  }

  async reload(): Promise<void> {
    const currentUrl = this.page.url();

    await test.step(`Reloading page with url "${currentUrl}"`, async () => {
      await this.page.reload({ waitUntil: 'domcontentloaded' });
    });
  }

  async fillSearchField(text: string): Promise<void> {
    await test.step(`Fill the Search Field with text: "${text}"`, async () => {
    await this.page.fill('#text', text);
    });
  }

  async clickSearchButton(): Promise<void> {
    await test.step(`Click on "Найти" button`, async () => {
    await this.page.click('button[type="submit"]');
    });
  }

  async getCollapsedListIcon() {
    return this.page.locator('button.arrow-button');
  }

  async getListItemByText(text: string) {
    await test.step(`Find this element: "${text} on dynamicList`, async () => {
    });
    return this.page.locator(`li:has-text("${text}")`);
  }

}
