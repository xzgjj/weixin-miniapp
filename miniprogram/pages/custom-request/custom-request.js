const { customOptions } = require('../../data/mock');

Page({
    data: {
        options: customOptions,
        form: {
            category: '陶艺',
            purpose: '纪念日',
            budget: '¥300-800',
            style: '自然'
        }
    },

    choose(event) {
        const { field, value } = event.currentTarget.dataset;
        this.setData({
            [`form.${field}`]: value
        });
    },

    submitDemo() {
        wx.showToast({
            title: '灵感已收到',
            icon: 'success'
        });
    }
});
