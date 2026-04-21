const { services } = require('../../data/mock');

Page({
    data: {
        service: services[0],
        dates: ['4/21 今天', '4/22 明天', '4/23 周四', '4/24 周五'],
        selectedDate: '4/21 今天',
        selectedSlotId: 'p1',
        peopleCount: 2
    },

    selectDate(event) {
        this.setData({
            selectedDate: event.currentTarget.dataset.date
        });
    },

    selectSlot(event) {
        const slot = event.currentTarget.dataset.slot;
        if (slot.status === 'full') {
            wx.showToast({
                title: '这个时段已满',
                icon: 'none'
            });
            return;
        }
        this.setData({
            selectedSlotId: slot.id
        });
    },

    changePeople(event) {
        const next = this.data.peopleCount + Number(event.currentTarget.dataset.delta);
        if (next < 1 || next > 6) {
            return;
        }
        this.setData({
            peopleCount: next
        });
    }
});
