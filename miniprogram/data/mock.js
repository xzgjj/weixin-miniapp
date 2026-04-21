const homeData = {
    brandName: '玉珂diy手作',
    headline: '把手作变成可以带走的日常',
    subtitle: '玉石、陶艺、木作、香氛与到店体验',
    visuals: {
        hero: '/assets/visuals/home-hero.jpg',
        store: '/assets/visuals/store-space.jpg',
        custom: '/assets/visuals/custom-overview.jpg',
        shop: '/assets/visuals/shop-hero.jpg'
    },
    store: {
        name: '玉珂diy手作城市工作室',
        address: '城市中心手作街 18 号',
        hours: '周二至周日 10:00-21:00',
        phone: '请在上线前替换为门店电话'
    },
    chapters: [
        {
            title: '先看见空间',
            copy: '门店不是货架，而是一张可以坐下来慢慢选择材料的工作台。',
            image: '/assets/visuals/store-space.jpg'
        },
        {
            title: '再选择材料',
            copy: '玉石、陶土、木料和香氛各有气质，定制页会用主题图带你进入对应门类。',
            image: '/assets/visuals/custom-overview.jpg'
        },
        {
            title: '成品去商城',
            copy: '已经完成的作品、常备款和可自提商品统一放在商城，不打断首页的品牌叙事。',
            image: '/assets/visuals/shop-hero.jpg'
        }
    ],
    featuredServices: ['jade-bracelet', 'pottery-cup', 'wood-tray', 'fragrance-candle'],
    featuredProducts: ['jade-pendant', 'gift-candle', 'ceramic-cup', 'wood-box'],
    cases: [
        '玉石手串搭配',
        '纪念日陶瓷杯',
        '木质首饰盒',
        '婚礼伴手香氛'
    ]
};

const services = [
    {
        id: 'jade-bracelet',
        title: '玉石手串搭配体验',
        category: '玉石',
        price: 16800,
        priceText: '¥168 起',
        duration: '90 分钟',
        coverLabel: '玉石珠、配饰、手围测量',
        description: '选择玉石珠、隔珠和配饰，按手围完成一条专属手串。适合礼物、纪念日和日常佩戴。',
        result: '完成玉石手串，可当天带走，可选择基础包装。',
        tags: ['玉石搭配', '可当天带走', '纪念日'],
        steps: ['测量手围', '认识玉石色泽', '选择珠子配饰', '串制与收尾'],
        rules: ['天然玉石纹理会有差异', '体验价按基础珠材计算', '升级珠材需现场补差价'],
        slots: [
            { id: 'j1', date: '4/21 今天', time: '10:30-12:00', remaining: 4, teacher: '玉珂', status: 'open' },
            { id: 'j2', date: '4/21 今天', time: '16:00-17:30', remaining: 1, teacher: '玉珂', status: 'open' },
            { id: 'j3', date: '4/22 明天', time: '14:00-15:30', remaining: 0, teacher: '玉珂', status: 'full' }
        ]
    },
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
        description: '选择香型、花材和容器，完成一份适合自用或纪念日的香氛蜡烛。',
        result: '完成香氛蜡烛，可当天带走。',
        tags: ['香气搭配', '可当天带走', '轻松入门'],
        steps: ['闻香选择', '调配蜡液', '装饰花材', '包装完成'],
        rules: ['适合 8 岁以上参与', '蜡液冷却约 20 分钟', '可选择基础包装'],
        slots: [
            { id: 'f1', date: '4/21 今天', time: '11:00-12:30', remaining: 5, teacher: '小珂', status: 'open' },
            { id: 'f2', date: '4/22 明天', time: '16:00-17:30', remaining: 1, teacher: '小珂', status: 'open' }
        ]
    }
];

const products = [
    {
        id: 'jade-pendant',
        title: '玉石平安扣挂件',
        priceText: '¥128 - ¥268',
        coverLabel: '平安扣、编绳、基础包装',
        tags: ['玉石', '成品', '可定制'],
        description: '可选平安扣、编绳和流苏，适合日常佩戴、纪念日和到店自提。',
        skus: ['青玉基础款', '白玉编绳款', '平安扣定制款']
    },
    {
        id: 'gift-candle',
        title: '手作香薰蜡烛',
        priceText: '¥88 - ¥128',
        coverLabel: '香氛蜡烛、干花、香型',
        tags: ['香氛', '可配送', '可自提'],
        description: '适合生日、纪念日和日常空间香气，可选木质、花香、果香三类香型。',
        skus: ['木质香', '花香调', '果香调']
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
    categories: [
        {
            name: '玉石',
            summary: '手串、平安扣、编绳与配饰',
            image: '/assets/visuals/theme-jade.jpg'
        },
        {
            name: '陶艺',
            summary: '陶杯、泥料、釉色和烧制',
            image: '/assets/visuals/theme-pottery.jpg'
        },
        {
            name: '木作',
            summary: '小托盘、收纳、打磨和养护',
            image: '/assets/visuals/theme-wood.jpg'
        },
        {
            name: '香氛',
            summary: '蜡烛、精油、干花和香气搭配',
            image: '/assets/visuals/theme-fragrance.jpg'
        }
    ],
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
        title: '手作香薰蜡烛',
        status: '待自提',
        time: '玉珂diy手作城市工作室',
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
