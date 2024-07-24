import { ListItem } from '../page-factory/list-item';
import { Page } from '@playwright/test';

export class ServiceSuggest {
  private readonly serviceSuggestList: ListItem;

  constructor(private readonly page: Page) {
    this.serviceSuggestList = new ListItem({ page: this.page, locator: '.services-suggest__list', name: 'service suggest list' });
  }

  async assertServiceSuggestListIsVisible(): Promise<void> {
    return this.serviceSuggestList.shouldBeVisible();
  }
}
