import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  filterTherapeuticProducts,
  filterNewsByTopic,
  countNewsByTopics
} from '../src/utils/catalogFilters.js';
import {
  TWO_MINUTES_MS,
  pickFirstPromoAd,
  pickSecondPromoAd,
  getRemainingDelayMs
} from '../src/utils/promoScheduler.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const therapeuticProducts = JSON.parse(
  fs.readFileSync(path.join(rootDir, 'src/data/therapeuticProducts.json'), 'utf8')
);
const newsArticles = JSON.parse(
  fs.readFileSync(path.join(rootDir, 'src/data/news.json'), 'utf8')
);
const promotionsConfig = JSON.parse(
  fs.readFileSync(path.join(rootDir, 'src/data/promotions.json'), 'utf8')
);

test('therapeutic catalog includes all 26 formulations with valid public images and updated Boraflox png', () => {
  assert.equal(therapeuticProducts.length, 26);

  const boraflox = therapeuticProducts.find((p) => p.id === 'boraflox');
  assert.ok(boraflox);
  assert.equal(boraflox.imagePath, '/products_image/boraflox.png');

  const expectedIds = [
    'artesunate-injection-60mg',
    'artesunate-injection-120mg',
    'augborah-625',
    'tramadol-100mg',
    'borbact-cream',
    'skibora-cream',
    'venita-eye-ear-drops',
    'venicol-eye-drops',
    'boraclear-cream'
  ];

  for (const id of expectedIds) {
    const prod = therapeuticProducts.find((p) => p.id === id);
    assert.ok(prod, `Expected therapeutic product ${id} to exist`);
    const diskPath = path.join(rootDir, 'public', prod.imagePath);
    assert.ok(fs.existsSync(diskPath), `Expected image file to exist on disk: ${diskPath}`);
  }

  for (const prod of therapeuticProducts) {
    const diskPath = path.join(rootDir, 'public', prod.imagePath);
    assert.ok(fs.existsSync(diskPath), `Missing public asset for ${prod.id}: ${prod.imagePath}`);
  }
});

test('filterTherapeuticProducts supports Cream form, Skin & Topical Care, and ingredient queries', () => {
  const creams = filterTherapeuticProducts(therapeuticProducts, 'Skin & Topical Care', 'Cream', '');
  assert.equal(creams.length, 3);
  assert.deepEqual(
    creams.map((p) => p.id).sort(),
    ['boraclear-cream', 'borbact-cream', 'skibora-cream']
  );
  assert.ok(creams.every((c) => c.comingSoon === true));

  const eyeCare = filterTherapeuticProducts(therapeuticProducts, 'Eye care', 'Eye drops', '');
  assert.equal(eyeCare.length, 3);

  const artesunateSearch = filterTherapeuticProducts(therapeuticProducts, 'All', 'All', 'artesunate');
  assert.equal(artesunateSearch.length, 2);
});

test('news catalog covers Coming Soon, Now Selling, and Flash Sales with valid image assets', () => {
  const counts = countNewsByTopics(newsArticles);
  assert.ok(counts['Coming Soon'] >= 1);
  assert.ok(counts['Now Selling'] >= 1);
  assert.ok(counts['Flash Sales'] >= 1);
  assert.equal(
    counts.All,
    counts['Coming Soon'] + counts['Now Selling'] + counts['Flash Sales']
  );

  assert.equal(filterNewsByTopic(newsArticles, 'Coming Soon').length, counts['Coming Soon']);
  assert.equal(filterNewsByTopic(newsArticles, 'Now Selling').length, counts['Now Selling']);
  assert.equal(filterNewsByTopic(newsArticles, 'Flash Sales').length, counts['Flash Sales']);

  for (const article of newsArticles) {
    const diskPath = path.join(rootDir, 'public', article.featuredImage);
    assert.ok(fs.existsSync(diskPath), `Missing news image on disk: ${diskPath}`);
  }
});

test('coming-soon popup scheduler configures active 3-cream sequence and 2-minute second delay', () => {
  assert.equal(promotionsConfig.active, true);
  assert.equal(promotionsConfig.secondPopupDelayMs, TWO_MINUTES_MS);
  assert.equal(promotionsConfig.ads.length, 3);

  const first = pickFirstPromoAd(promotionsConfig.ads);
  const second = pickSecondPromoAd(promotionsConfig.ads, first.id);
  assert.ok(first);
  assert.ok(second);
  assert.notEqual(first.id, second.id);

  for (const ad of promotionsConfig.ads) {
    const diskPath = path.join(rootDir, 'public', ad.image);
    assert.ok(fs.existsSync(diskPath), `Missing promo ad image on disk: ${diskPath}`);
    assert.equal(ad.ctaText, 'View more');
  }

  assert.equal(getRemainingDelayMs(1000, 1000, TWO_MINUTES_MS), 120000);
  assert.equal(getRemainingDelayMs(1000, 61000, TWO_MINUTES_MS), 60000);
  assert.equal(getRemainingDelayMs(1000, 150000, TWO_MINUTES_MS), 0);
});
