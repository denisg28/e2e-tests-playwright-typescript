import { searchTest as test } from './tests';

test.beforeEach(async ({ yaHomePage }) => {
  await yaHomePage.visit('/e2e-tests/site/page1.html');
});

test('Click on search input - search suggest list should be visible', async ({ yaHomePage, yaMenuPage }) => {
  await yaHomePage.clickOnSearchInput();

  await yaMenuPage.serviceSuggest.assertServiceSuggestListIsVisible();

  await yaHomePage.navbar.page.waitForTimeout(2000);
});
