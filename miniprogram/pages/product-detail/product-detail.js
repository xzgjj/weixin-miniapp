const { homeData, products } = require('../../data/mock');
const { validatePaymentParams } = require('../../utils/payment');

Page({
    data: {
        hero: homeData.visuals.shop,
        products,
        product: products[0],
        selectedSku: products[0].skus[0],
        quantity: 1,
        cartItems: [],
        cartVisible: false,
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

    openCart() {
        this.setData({
            cartVisible: true,
            sheetVisible: false
        });
    },

    closeCart() {
        this.setData({
            cartVisible: false
        });
    },

    changeQuantity(event) {
        const next = Math.max(1, this.data.quantity + Number(event.currentTarget.dataset.delta));
        this.setData({
            quantity: next
        });
    },

    addCart() {
        const cartItems = [
            {
                id: `${this.data.product.id}-${this.data.selectedSku}`,
                productId: this.data.product.id,
                title: this.data.product.title,
                sku: this.data.selectedSku,
                priceText: this.data.product.priceText,
                quantity: this.data.quantity,
                coverLabel: this.data.product.coverLabel
            },
            ...this.data.cartItems
        ];
        this.setData({
            cartItems,
            sheetVisible: false,
            cartVisible: true
        });
        wx.showToast({
            title: '已加入购物袋',
            icon: 'success'
        });
    },

    quickAddCart(event) {
        const product = products.find((item) => item.id === event.currentTarget.dataset.id);
        this.setData({
            product,
            selectedSku: product.skus[0],
            quantity: 1
        });
        this.addCart();
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
    },

    checkoutCart() {
        if (this.data.cartItems.length === 0) {
            wx.showToast({
                title: '购物袋是空的',
                icon: 'none'
            });
            return;
        }
        wx.showModal({
            title: '确认购物袋',
            content: `已选择 ${this.data.cartItems.length} 件作品。下一步会进入订单确认和微信支付。`,
            confirmText: '知道了',
            showCancel: false
        });
    }
});
