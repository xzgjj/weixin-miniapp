const homeData = {
    brandName: '珂珂手作',
    headline: '把今天做成一件作品',
    subtitle: '陶艺、木作、香氛、课程与礼盒定制',
    store: {
        name: '珂珂手作城市工作室',
        address: '城市中心手作街 18 号',
        hours: '周二至周日 10:00-21:00',
        phone: '请在上线前替换为门店电话'
    },
    quickEntries: [
        { name: '陶艺', tone: 'clay' },
        { name: '木作', tone: 'wood' },
        { name: '香氛', tone: 'soft' },
        { name: '课程', tone: 'warm' },
        { name: '礼盒', tone: 'soft' },
        { name: '定制', tone: 'clay' }
    ],
    featuredServices: ['pottery-cup', 'wood-tray', 'fragrance-candle'],
    featuredProducts: ['gift-candle', 'ceramic-cup', 'wood-box'],
    cases: [
        '纪念日陶瓷杯',
        '木质首饰盒',
        '婚礼伴手香氛'
    ]
};

const services = [
    {
        id: 'pottery-cup',
        title: '陶艺拉坯体验',
        category: '陶艺',
        price: 12800,
        priceText: '¥128 起',
        duration: '120 分钟',
        coverLabel: '陶土、拉坯、釉色样片',
        description: '从一团泥开始，完成一只属于自己的手作杯。适合第一次体验陶艺的朋友。',
        result: '完成拉坯作品，烧制后到店自提或快递。',
        tags: ['新手友好', '可烧制', '情侣/亲子'],
        steps: ['选泥与示范', '拉坯成型', '修整口沿', '选择釉色'],
        rules: ['建议提前 10 分钟到店', '烧制周期约 14-21 天', '开课前 24 小时可申请改期'],
        slots: [
            { id: 'p1', date: '4/21 今天', time: '10:00-12:00', remaining: 3, teacher: '阿青', status: 'open' },
            { id: 'p2', date: '4/21 今天', time: '14:00-16:00', remaining: 0, teacher: '阿青', status: 'full' },
            { id: 'p3', date: '4/21 今天', time: '19:00-21:00', remaining: 1, teacher: '小珂', status: 'open' },
            { id: 'p4', date: '4/22 明天', time: '10:00-12:00', remaining: 6, teacher: '小珂', status: 'open' }
        ]
    },
    {
        id: 'wood-tray',
        title: '木作托盘体验',
        category: '木作',
        price: 26800,
        priceText: '¥268 起',
        duration: '180 分钟',
        coverLabel: '浅木、砂纸、安全工具',
        description: '在老师指导下完成一个桌面木托盘，学习打磨、组装和木蜡油处理。',
        result: '完成木质托盘，可当天带走。',
        tags: ['工具指导', '团建热门', '可当天带走'],
        steps: ['认识工具', '打磨木料', '组装固定', '表面养护'],
        rules: ['建议 12 岁以上参与', '工具环节需听从老师指导', '团体预约请提前联系'],
        slots: [
            { id: 'w1', date: '4/21 今天', time: '15:00-18:00', remaining: 2, teacher: '木木', status: 'open' },
            { id: 'w2', date: '4/22 明天', time: '14:00-17:00', remaining: 4, teacher: '木木', status: 'open' }
        ]
    },
    {
        id: 'fragrance-candle',
        title: '香氛蜡烛体验',
        category: '香氛',
        price: 9800,
        priceText: '¥98 起',
        duration: '90 分钟',
        coverLabel: '精油、干花、暖色蜡杯',
        description: '选择香型、花材和容器，完成一份适合送礼的香氛蜡烛。',
        result: '完成香氛蜡烛，可当天带走。',
        tags: ['礼物推荐', '可当天带走', '轻松入门'],
        steps: ['闻香选择', '调配蜡液', '装饰花材', '包装完成'],
        rules: ['适合 8 岁以上参与', '蜡液冷却约 20 分钟', '可加购礼盒包装'],
        slots: [
            { id: 'f1', date: '4/21 今天', time: '11:00-12:30', remaining: 5, teacher: '小珂', status: 'open' },
            { id: 'f2', date: '4/22 明天', time: '16:00-17:30', remaining: 1, teacher: '小珂', status: 'open' }
        ]
    }
];

const products = [
    {
        id: 'gift-candle',
        title: '手作香薰蜡烛礼盒',
        priceText: '¥88 - ¥128',
        coverLabel: '香氛礼盒、贺卡、干花',
        tags: ['礼盒', '可配送', '可自提'],
        description: '适合生日、纪念日和伴手礼，可选木质、花香、果香三类香型。',
        skus: ['木质香普通装', '花香礼盒装', '果香贺卡装']
    },
    {
        id: 'ceramic-cup',
        title: '陶瓷手作杯',
        priceText: '¥168',
        coverLabel: '釉面陶杯、手作纹理',
        tags: ['限量', '到店自提'],
        description: '每只杯子都有轻微手作差异，适合自用或纪念日礼物。',
        skus: ['雾白釉', '灰蓝釉', '浅绿釉']
    },
    {
        id: 'wood-box',
        title: '木质桌面收纳盒',
        priceText: '¥198',
        coverLabel: '浅木收纳、桌面礼物',
        tags: ['木作', '可刻字'],
        description: '可作为桌面收纳、首饰盒或定制礼物，支持刻字需求提交。',
        skus: ['原木色', '胡桃色']
    }
];

const customOptions = {
    categories: ['陶艺', '木作', '香氛', '礼盒'],
    purposes: ['生日', '纪念日', '家居', '团建'],
    budgets: ['¥100-300', '¥300-800', '¥800+'],
    styles: ['自然', '极简', '复古', '可爱']
};

const orders = [
    {
        id: 'BK202604210001',
        type: '预约',
        title: '陶艺拉坯体验',
        status: '待到店',
        time: '4/21 10:00-12:00',
        amount: '¥236',
        action: '查看核销码'
    },
    {
        id: 'PD202604210002',
        type: '商品',
        title: '手作香薰蜡烛礼盒',
        status: '待自提',
        time: '珂珂手作城市工作室',
        amount: '¥88',
        action: '查看自提信息'
    },
    {
        id: 'CU202604210003',
        type: '定制',
        title: '木质首饰盒定制',
        status: '待报价',
        time: '店员将在 24 小时内联系',
        amount: '待确认',
        action: '查看需求'
    }
];

module.exports = {
    homeData,
    services,
    products,
    customOptions,
    orders
};
