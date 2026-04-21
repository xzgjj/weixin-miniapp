const { homeData, products } = require('../../data/mock');

Page({
    data: {
        hero: homeData.visuals.shop,
        products,
        product: products[0],
        selectedSku: products[0].skus[0]
    },

    selectProduct(event) {
        const product = this.data.products.find((item) => item.id === event.currentTarget.dataset.id);
        this.setData({
            product,
            selectedSku: product.skus[0]
        });
    },

    selectSku(event) {
        this.setData({
            selectedSku: event.currentTarget.dataset.sku
        });
    }
});
