import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { homeData, services, products, customOptions, orders } = require('../miniprogram/data/mock.js');

test('home data exposes brand and core entries', () => {
    assert.equal(homeData.brandName, '玉珂diy手作');
    assert.ok(homeData.visuals.hero.endsWith('home-hero.jpg'));
    assert.ok(homeData.chapters.some((chapter) => chapter.title === '成品去商城'));
    assert.ok(homeData.featuredServices.length >= 4);
});

test('service demo data includes slot states', () => {
    const slots = services.flatMap((service) => service.slots);
    assert.ok(slots.some((slot) => slot.status === 'open'));
    assert.ok(slots.some((slot) => slot.status === 'full'));
    assert.ok(slots.some((slot) => slot.remaining === 1));
});

test('product and custom demo data cover purchase and custom flows', () => {
    assert.ok(products.length >= 3);
    assert.ok(products.every((product) => product.skus.length > 0));
    assert.ok(customOptions.categories.some((category) => category.name === '玉石'));
    assert.ok(customOptions.categories.every((category) => category.name !== '礼盒'));
    assert.ok(orders.some((order) => order.type === '预约'));
});
