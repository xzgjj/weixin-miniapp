import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (filePath) => fs.readFileSync(path.join(root, filePath), 'utf8');

test('home page presents brand and primary actions', () => {
    const wxml = read('miniprogram/pages/home/home.wxml');
    assert.match(wxml, /品牌空间/);
    assert.match(wxml, /开始定制/);
    assert.match(wxml, /逛逛成品/);
    assert.match(wxml, /设计主题/);
});

test('service and slot pages cover booking decisions', () => {
    const service = read('miniprogram/pages/service-detail/service-detail.wxml');
    const slot = read('miniprogram/pages/slot-select/slot-select.wxml');
    assert.match(service, /预约须知/);
    assert.match(service, /体验流程/);
    assert.match(slot, /可预约时段/);
    assert.match(slot, /名额紧张|余 1 位/);
});

test('product, custom and order pages cover purchase and follow-up paths', () => {
    const product = read('miniprogram/pages/product-detail/product-detail.wxml');
    const custom = read('miniprogram/pages/custom-request/custom-request.wxml');
    const orders = read('miniprogram/pages/orders/orders.wxml');
    assert.match(product, /立即购买/);
    assert.match(product, /成品购买放在这里/);
    assert.match(custom, /定制一件专属作品/);
    assert.match(custom, /选择手作主题/);
    assert.match(orders, /我的记录/);
});
