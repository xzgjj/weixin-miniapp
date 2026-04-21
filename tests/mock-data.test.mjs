import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { homeData, services, products, customOptions, orders } = require('../miniprogram/data/mock.js');

test('home data exposes brand and core entries', () => {
    assert.equal(homeData.brandName, '珂珂手作');
    assert.ok(homeData.quickEntries.length >= 6);
    assert.ok(homeData.featuredServices.length >= 3);
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
    assert.ok(customOptions.categories.includes('陶艺'));
    assert.ok(orders.some((order) => order.type === '预约'));
});
