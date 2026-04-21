const requiredPaymentFields = ['timeStamp', 'nonceStr', 'package', 'signType', 'paySign'];

const validatePaymentParams = (params = {}) => {
    const missing = requiredPaymentFields.filter((field) => !params[field]);
    return {
        ok: missing.length === 0,
        missing
    };
};

const requestWechatPayment = (params, callbacks = {}) => {
    const result = validatePaymentParams(params);
    if (!result.ok) {
        callbacks.fail?.({
            errMsg: `missing payment params: ${result.missing.join(',')}`
        });
        return;
    }

    wx.requestPayment({
        ...params,
        success: callbacks.success,
        fail: callbacks.fail,
        complete: callbacks.complete
    });
};

module.exports = {
    requiredPaymentFields,
    validatePaymentParams,
    requestWechatPayment
};
