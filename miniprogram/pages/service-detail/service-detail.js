const { services } = require('../../data/mock');

Page({
    data: {
        service: services[0]
    },

    goSlot() {
        wx.navigateTo({
            url: '/pages/slot-select/slot-select'
        });
    }
});
