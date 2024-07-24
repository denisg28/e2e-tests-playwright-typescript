import { BasePage } from './base-page';
import { Input } from '../page-factory/input';
import { Page } from '@playwright/test';

export class YaHomePage extends BasePage {
  private readonly searchInput: Input;

  constructor(page: Page) {
    super(page);
    this.searchInput = new Input({ page, locator: '.mini-suggest__input', name: 'Search Input' });
  }

  async clickOnSearchInput() {
    return this.searchInput.click();
  }
}

