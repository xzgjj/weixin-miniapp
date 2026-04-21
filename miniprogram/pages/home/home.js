const { homeData, services } = require('../../data/mock');

Page({
    data: {
        home: homeData,
        services
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
    }
});
