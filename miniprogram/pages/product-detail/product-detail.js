const { homeData, products } = require('../../data/mock');
const { validatePaymentParams } = require('../../utils/payment');

Page({
    data: {
        hero: homeData.visuals.shop,
        products,
        product: products[0],
        selectedSku: products[0].skus[0],
        quantity: 1,
        cartCount: 0,
        sheetVisible: false,
        pendingOrder: null
    },

    selectProduct(event) {
        const product = this.data.products.find((item) => item.id === event.currentTarget.dataset.id);
        this.setData({
            product,
            selectedSku: product.skus[0],
            quantity: 1,
            sheetVisible: true
        });
    },

    selectSku(event) {
        this.setData({
            selectedSku: event.currentTarget.dataset.sku
        });
    },

    closeSheet() {
        this.setData({
            sheetVisible: false
        });
    },

    changeQuantity(event) {
        const next = Math.max(1, this.data.quantity + Number(event.currentTarget.dataset.delta));
        this.setData({
            quantity: next
        });
    },

    addCart() {
        this.setData({
            cartCount: this.data.cartCount + this.data.quantity,
            sheetVisible: false
        });
        wx.showToast({
            title: '已加入购物车',
            icon: 'success'
        });
    },

    buyNow() {
        const pendingOrder = {
            productId: this.data.product.id,
            title: this.data.product.title,
            sku: this.data.selectedSku,
            quantity: this.data.quantity,
            status: '待支付'
        };
        const paymentCheck = validatePaymentParams({});
        this.setData({
            pendingOrder,
            sheetVisible: false
        });
        wx.showModal({
            title: '已生成待支付单',
            content: `${pendingOrder.title} · ${pendingOrder.sku} · ${pendingOrder.quantity} 件。还缺少后端返回的微信支付参数：${paymentCheck.missing.join('、')}。`,
            confirmText: '知道了',
            showCancel: false
        });
    }
});
