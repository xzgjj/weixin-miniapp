const { services } = require('../../data/mock');

Page({
    data: {
        services,
        service: services[0]
    },

    selectService(event) {
        const service = services.find((item) => item.id === event.currentTarget.dataset.id);
        this.setData({ service });
    },

    goSlot() {
        wx.navigateTo({
            url: '/pages/slot-select/slot-select'
        });
    }
});
