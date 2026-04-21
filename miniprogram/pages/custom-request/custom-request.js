const { customOptions } = require('../../data/mock');

Page({
    data: {
        options: customOptions,
        selectedCategory: customOptions.categories[0],
        form: {
            category: '玉石',
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

    chooseCategory(event) {
        const name = event.currentTarget.dataset.name;
        const selectedCategory = this.data.options.categories.find((item) => item.name === name);
        this.setData({
            selectedCategory,
            'form.category': name
        });
    },

    submitDemo() {
        wx.showToast({
            title: '灵感已收到',
            icon: 'success'
        });
    }
});
