import { test as base } from '@playwright/test';
import { ContextPagesFixture, contextPagesFixture } from '../fixtures/context-pages';
import { PlaywrightPagesFixture, pagesFixture } from '../fixtures/playwright-pages';
import { combineFixtures } from '../utils/fixtures';

export const searchTest = base.extend<ContextPagesFixture, PlaywrightPagesFixture>(
  combineFixtures(contextPagesFixture, pagesFixture)
);
