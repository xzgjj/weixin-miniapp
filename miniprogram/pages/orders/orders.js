const { orders } = require('../../data/mock');

Page({
    data: {
        orders,
        account: {
            loggedIn: false,
            nickname: '未登录',
            phoneLinked: false
        }
    },

    loginWithWechat() {
        wx.login({
            success: (res) => {
                this.setData({
                    account: {
                        loggedIn: true,
                        nickname: '微信用户',
                        phoneLinked: this.data.account.phoneLinked,
                        loginCode: res.code ? '已获取' : '待获取'
                    }
                });
                wx.showToast({
                    title: '微信登录已就绪',
                    icon: 'success'
                });
            },
            fail: () => {
                wx.showToast({
                    title: '登录失败',
                    icon: 'none'
                });
            }
        });
    },

    handlePhoneLogin(event) {
        const hasCode = Boolean(event.detail && event.detail.code);
        this.setData({
            account: {
                ...this.data.account,
                loggedIn: true,
                nickname: '手机用户',
                phoneLinked: hasCode
            }
        });
        wx.showToast({
            title: hasCode ? '手机号已授权' : '需要真机授权',
            icon: hasCode ? 'success' : 'none'
        });
    },

    handleOrderAction(event) {
        wx.showToast({
            title: event.currentTarget.dataset.action,
            icon: 'none'
        });
    }
});
