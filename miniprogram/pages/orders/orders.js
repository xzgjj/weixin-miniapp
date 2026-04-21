const { orders } = require('../../data/mock');

Page({
    data: {
        orders,
        account: {
            loggedIn: false,
            nickname: '未登录',
            phoneLinked: false
        },
        assets: [
            { name: '积分', desc: '120', icon: '积' },
            { name: '优惠券', desc: '2 张', icon: '券' },
            { name: '余额', desc: '0.00', icon: '额' },
            { name: '礼品卡', desc: '查看', icon: '卡' }
        ],
        functions: [
            { name: '我的地址', icon: '址' },
            { name: '会员码', icon: '码' },
            { name: '联系客服', icon: '客' },
            { name: '用户福利', icon: '福' },
            { name: '建议反馈', icon: '反' },
            { name: '储值有礼', icon: '储' }
        ]
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
    },

    handlePanelAction(event) {
        wx.showToast({
            title: event.currentTarget.dataset.name,
            icon: 'none'
        });
    }
});
