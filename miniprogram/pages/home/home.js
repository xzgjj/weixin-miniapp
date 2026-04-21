const { homeData, services, products } = require('../../data/mock');

Page({
    data: {
        home: homeData,
        services,
        products
    },

    goService() {
        wx.switchTab({
            url: '/pages/service-detail/service-detail'
        });
    },

    goProduct() {
        wx.switchTab({
            url: '/pages/product-detail/product-detail'
        });
    },

    goCustom() {
        wx.navigateTo({
            url: '/pages/custom-request/custom-request'
        });
    },

    goOrders() {
        wx.switchTab({
            url: '/pages/orders/orders'
        });
    },

    handleQuickEntry(event) {
        const name = event.currentTarget.dataset.name;
        if (name === '定制') {
            this.goCustom();
            return;
        }
        if (name === '礼盒') {
            this.goProduct();
            return;
        }
        this.goService();
    }
});
