const { products } = require('../../data/mock');

Page({
    data: {
        product: products[0],
        selectedSku: products[0].skus[0]
    },

    selectSku(event) {
        this.setData({
            selectedSku: event.currentTarget.dataset.sku
        });
    }
});
