import { searchTest as test } from './tests';

test.beforeEach(async ({ yaHomePage }) => {
  await yaHomePage.visit('/e2e-tests/site/page1.html');
});

test('Enter "Яндекс" in search bar, press "Найти" - should be opened search results', async ({ yaHomePage }) => {

  await yaHomePage.fillSearchField('Текст который надо найти');

  await yaHomePage.clickSearchButton();

  const collapsedListIcon = await yaHomePage.getCollapsedListIcon();
  
  await test.step(`Wait for element "▶" to be visible`, async () => {
  await test.expect(collapsedListIcon).toBeVisible();
  });

  const requiredClicks = 2;
  for (let i = 0; i < requiredClicks; i++) {
    await collapsedListIcon.click();
  }

  const listItem = await yaHomePage.getListItemByText('Текст который надо найти');
  await test.step(`Check text "Текст который надо найти" to be presented`, async () => {
  await test.expect(listItem).toBeVisible();
  });
});
