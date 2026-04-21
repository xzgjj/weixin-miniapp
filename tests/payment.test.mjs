import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { validatePaymentParams } = require('../miniprogram/utils/payment.js');

test('payment params validation guards wx.requestPayment inputs', () => {
    const empty = validatePaymentParams({});
    assert.equal(empty.ok, false);
    assert.deepEqual(empty.missing, ['timeStamp', 'nonceStr', 'package', 'signType', 'paySign']);

    const ready = validatePaymentParams({
        timeStamp: '1713679200',
        nonceStr: 'nonce',
        package: 'prepay_id=demo',
        signType: 'RSA',
        paySign: 'signature'
    });
    assert.equal(ready.ok, true);
    assert.deepEqual(ready.missing, []);
});
