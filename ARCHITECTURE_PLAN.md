# DIY 手作门店微信小程序 0-1 架构规划

更新时间：2026-04-21

## 项目名称/类型

项目名称：DIY 手作门店微信小程序。

项目类型：实体门店 O2O 小程序 + 轻量商城 + 预约履约系统 + 定制工单系统 + 会员运营系统。

## 项目说明

系统服务陶艺、木工、香氛、材料包、礼盒、课程活动等实体 DIY 手作门店，把“被内容吸引”到“预约/购买/定制/复购”的路径做成完整闭环。0-1 阶段优先确保能上线、能接单、能收款、能核销、能后台维护。

## 1. 核心业务目标与技术总方案

### 核心业务目标

用一个小程序把手作门店的展示、预约、售卖、定制和会员沉淀串成可交易、可履约、可审计的业务闭环。

### 关键功能需求

- 首页：门店氛围、主推体验、热门商品、活动课程、定制案例、会员入口、地图导航。
- 体验预约：项目详情、日期时段、名额锁定、联系人、规则确认、支付、核销、改期/取消。
- 商品购买：商品分类、SKU、库存、购物车/立即购买、配送/自提、订单、售后。
- 课程活动：活动日历、报名、名额、签到核销、课后评价。
- 定制需求：品类、用途、预算、风格、参考图、报价、定金、制作进度、交付。
- 会员运营：积分、优惠券、会员等级、生日权益、复购提醒。
- 后台管理：门店、项目、时段、商品、订单、核销、定制、会员、内容配置。

### 调研资料、参考项目与准备清单

| 类型 | 参考对象 | 使用原因 | 放弃/限制理由 |
|---|---|---|---|
| 官方规范 | 微信小程序官方文档 | 登录、支付、订阅消息、组件、审核必须遵守官方边界 | 官方示例不是完整商业系统 |
| 组件库 | TDesign MiniProgram | 组件完整、风格现代、适合业务型小程序 | 需要二次品牌化，避免过度企业后台感 |
| 后端平台 | CloudBase | 0-1 阶段降低后端和运维复杂度，内置数据库、云函数、云存储、日志监控 | 复杂 SQL、多系统集成、强报表时需演进 |
| 零售参考 | tdesign-miniprogram-starter-retail / wechat-app-mall | 学习商城、订单、用户中心、首页模块组织 | 不理解预约时段和定制工单 |
| 预约参考 | HairOrder / TaoYue-Express | 学习服务预约、时段、人员、核销 | 视觉和会员运营通常不足 |
| 高质感品牌 | 观夏、野兽派、气味图书馆类私域零售 | 学习内容种草、礼盒、品牌氛围、私域复购 | 不能直接复制，手作门店更重到店履约 |

准备清单：

- 门店素材：门头、工作台、材料墙、老师、制作过程、成品图。
- 业务规则：退款、改期、迟到、取件、烧制周期、定制取消、发货/自提。
- 支付资料：微信支付商户号、证书、回调域名、退款权限。
- 小程序资料：AppID、类目、隐私协议、服务条款、地图定位说明。
- 数据准备：体验项目、时段、商品 SKU、活动课程、优惠券、会员等级。

### 最佳参考对象展开分析

最值得展开的参考对象不是单一项目，而是“TDesign MiniProgram + 零售模板 + 预约案例”的组合。

采用原因：

- TDesign 提供稳定的表单、按钮、弹窗、标签、结果页、空状态等基础组件，减少从零造 UI 轮子。
- 零售模板提供商品、订单、用户中心的成熟组织方式。
- 预约案例补齐时段、名额、核销、退款和履约状态。

不能直接照搬的原因：

- 纯商城模板会把体验项目错误建模成商品。
- 纯预约模板无法支撑材料包、礼盒、会员复购和定制。
- 手作门店需要强视觉表达，通用模板需要品牌化。

### 技术栈推荐

0-1 阶段推荐：

- 小程序前端：微信小程序原生。
- UI 组件：TDesign MiniProgram。
- 后端：CloudBase 云函数 + HTTP 云函数/云托管 API。
- 数据库：CloudBase 文档型数据库起步；订单、支付、库存复杂后可演进到 CloudBase MySQL 或独立 MySQL。
- 存储：CloudBase 云存储。
- 支付：微信支付。
- 后台：0-1 用 CloudBase 云后台/轻量管理页；增长期再做独立管理后台。
- CI/CD：GitHub Actions 做 lint/test/build；CloudBase CLI 做部署。

选择理由：

- 简单优先：减少服务器、网关、鉴权、部署链路的早期成本。
- 可观测优先：CloudBase 提供日志监控，业务侧补 requestId、orderNo、paymentNo。
- 可回滚优先：所有配置和数据库结构用版本化脚本管理，部署保留上一个稳定版本。
- AI 调用必须可审计：如果后续加入 AI 推荐、客服、文案生成，所有 prompt、输入摘要、输出、模型、耗时、调用人和业务 ID 必须记录。

### 遵循标准与工程惯例

- 微信小程序官方开发、审核、隐私与支付规范。
- TDesign MiniProgram 组件使用规范。
- CloudBase 官方数据库、云函数、云存储、日志监控、CLI 规范。
- REST 风格 API，统一响应结构和错误码。
- 所有写操作支持幂等键。
- 数据库迁移必须脚本化，可回滚。
- Secret 不进仓库。
- 所有用户输入做验证、清洗、长度限制。

### 技术调研与原型验证

启动开发前必须完成 5 个 Spike：

1. 小程序原生 + TDesign 首屏渲染、主题变量、组件按需引入。
2. CloudBase 登录、云函数调用、数据库读写、云存储上传。
3. 预约名额并发扣减原型。
4. 微信支付预下单、回调幂等、订单状态更新原型。
5. 后台配置首页模块、项目、时段、商品的最小管理原型。

### 系统架构设计思路与推荐方案

推荐 0-1 架构：模块化单体 + Serverless 后端。

对比：

| 架构 | 优点 | 缺点 | 结论 |
|---|---|---|---|
| 纯 SaaS 模板 | 快速上线 | 视觉和业务控制弱，定制受限 | 只适合验证，不适合长期产品 |
| 原生小程序 + CloudBase | 上线快、运维轻、微信生态集成顺 | 复杂查询和强事务需谨慎设计 | 0-1 推荐 |
| 原生小程序 + 自建 Node/Java + MySQL | 控制力强、关系模型清晰 | 运维、鉴权、部署、支付链路更重 | 增长期演进 |
| 微服务 | 可扩展强 | 0-1 过度设计，交付慢 | 暂不采用 |

逻辑架构：

```text
用户/会员
  -> 小程序前端
    -> API Client
      -> 用户模块
      -> 内容/首页模块
      -> 体验预约模块
      -> 商品订单模块
      -> 定制工单模块
      -> 支付模块
      -> 核销模块
      -> 会员营销模块
      -> 后台管理模块
```

物理架构：

```text
微信客户端
  -> 微信小程序原生前端
    -> CloudBase 云函数 / HTTP API
      -> CloudBase 数据库 / MySQL
      -> CloudBase 云存储
      -> 微信支付
      -> 订阅消息
      -> 日志监控

店员/店长
  -> 云后台/管理端
    -> 同一套后端 API
```

组件选型：

- UI：TDesign MiniProgram。
- 状态管理：页面级 state + 轻量 store；0-1 不引入复杂状态库。
- 网络：统一 request 封装，自动附加 token/requestId。
- 表单：TDesign Form + 自定义校验规则。
- 上传：微信上传 API + CloudBase 云存储。
- 日志：前端埋点 + 后端结构化日志。

## 2. 项目和业务的核心逻辑

这个项目的本质不是“页面集合”，而是四类业务状态的协同：

1. 预约名额状态：时段是否可约、是否满员、是否锁定、是否释放。
2. 商品库存状态：SKU 是否可售、库存是否锁定、支付后是否扣减。
3. 订单支付状态：待支付、已支付、已关闭、已退款。
4. 履约状态：待到店、已核销、制作中、待自提、已完成。

最适合抓住架构本质的视角：

- 领域模型：识别 User、Store、Service、Slot、Product、Sku、Order、Payment、Verification、CustomRequest。
- 状态机：约束预约、商品、定制、支付、核销的合法流转。
- 数据流：从用户点击、接口调用、数据库变更、支付回调、核销完成串联全链路。

映射到代码结构：

```text
src/
  domain/
    booking/
    product/
    order/
    payment/
    custom/
    member/
  services/
    booking-service.ts
    payment-service.ts
  repositories/
    booking-repository.ts
  api/
    booking-controller.ts
  shared/
    validators/
    errors/
    logger/
    idempotency/
```

小程序前端映射：

```text
miniprogram/
  pages/
    home/
    service-list/
    service-detail/
    slot-select/
    booking-confirm/
    product-detail/
    custom-request/
    orders/
  components/
    service-card/
    slot-card/
    product-card/
    order-card/
  services/
    api/
    auth/
    payment/
  utils/
    validators/
    formatters/
```

## 3. 设计与核心抽象

### 领域抽象

- `Service`：可预约体验项目，描述“做什么”。
- `ServiceSlot`：某项目在某时间的可售名额，描述“什么时候能做”。
- `ProductSku`：商品可售规格，描述“买哪个版本”。
- `Order`：统一交易外壳，承载金额、用户、支付、优惠、状态。
- `Booking`：预约履约细节，绑定项目、时段、人数和核销码。
- `CustomRequest`：定制工单，承载需求、报价、沟通、制作和交付。
- `Payment`：支付事实记录，必须独立于订单保存。
- `Verification`：核销事实记录，不可随意覆盖。

### 核心状态机

预约：

```text
pending_payment -> paid -> reserved -> verified -> completed
pending_payment -> expired/cancelled
paid/reserved -> refund_requested -> refunded
reserved -> rescheduled
```

商品：

```text
pending_payment -> paid -> waiting_fulfillment -> shipped/waiting_pickup -> completed
paid -> refund_requested -> refunded
```

定制：

```text
submitted -> contacted -> quoting -> deposit_pending -> deposit_paid -> making -> final_payment_pending -> delivering -> completed
submitted/contacted/quoting -> closed
```

### 关键抽象原则

- 订单统一，履约分型：`orders` 做交易主表，`bookings/order_items/custom_requests` 承载业务差异。
- 支付独立：`payments` 记录支付事实，避免订单状态被重复回调污染。
- 核销独立：`verifications` 记录谁、何时、核销什么。
- 规则显式：退款、改期、迟到、取件规则进入配置和快照，不只写在页面文案。
- 快照保存：下单时保存项目/商品/价格/规则快照，避免后续改价影响历史订单。

## 4. 工程交付物

### 项目目录结构

```text
weixin-miniapp/
  miniprogram/
    app.js
    app.json
    app.wxss
    pages/
      home/
      service-list/
      service-detail/
      slot-select/
      booking-confirm/
      booking-success/
      mall/
      product-detail/
      custom-request/
      orders/
      mine/
    components/
      service-card/
      slot-card/
      product-card/
      order-card/
      empty-state/
    services/
      api/
      auth/
      payment/
    utils/
      format.js
      validate.js
      request.js
  cloudfunctions/
    api/
      index.ts
      modules/
        auth/
        home/
        booking/
        product/
        order/
        payment/
        verification/
        custom/
        member/
      shared/
        errors/
        logger/
        validators/
        idempotency/
  migrations/
    0001_init_collections.ts
    0002_add_order_indexes.ts
  admin/
    README.md
  tests/
    unit/
    integration/
  docs/
    api.openapi.yaml
  project.config.json
  package.json
```

### 核心模块接口定义

```ts
interface CreateBookingInput {
    userId: string;
    serviceId: string;
    slotId: string;
    peopleCount: number;
    contactName: string;
    contactPhone: string;
    couponId?: string;
    idempotencyKey: string;
}

interface CreateBookingResult {
    orderNo: string;
    bookingId: string;
    payAmount: number;
    expireAt: string;
}

interface BookingService {
    createBooking(input: CreateBookingInput): Promise<CreateBookingResult>;
    cancelBooking(orderNo: string, reason: string): Promise<void>;
    rescheduleBooking(orderNo: string, targetSlotId: string): Promise<void>;
    verifyBooking(verifyCode: string, operatorId: string): Promise<void>;
}

interface PaymentService {
    createPrepay(orderNo: string): Promise<WechatPrepayParams>;
    handleWechatCallback(payload: unknown, headers: Record<string, string>): Promise<void>;
}

interface InventoryService {
    lockSkuStock(skuId: string, quantity: number, orderNo: string): Promise<void>;
    confirmSkuStock(orderNo: string): Promise<void>;
    releaseSkuStock(orderNo: string): Promise<void>;
}

interface CustomRequestService {
    submit(input: SubmitCustomRequestInput): Promise<{ requestId: string }>;
    quote(requestId: string, amount: number, operatorId: string): Promise<void>;
    updateStatus(requestId: string, status: CustomRequestStatus): Promise<void>;
}
```

### 示例配置文件

```json
{
    "env": "dev",
    "cloudbase": {
        "envId": "your-cloudbase-env-id",
        "storageBucket": "miniapp-assets"
    },
    "wechat": {
        "appId": "your-miniapp-app-id",
        "merchantId": "your-merchant-id",
        "payNotifyUrl": "https://api.example.com/payments/wechat/callback"
    },
    "featureFlags": {
        "enableCoupon": false,
        "enableAiAssistant": false,
        "enableCustomFinalPayment": false
    },
    "observability": {
        "logLevel": "info",
        "enableRequestTrace": true
    }
}
```

### 基础 CI/CD 配置示例

```yaml
name: ci

on:
  pull_request:
  push:
    branches:
      - main
      - v1

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run build
```

部署策略：

- `main` 只部署生产。
- `v1` 或 `develop` 部署测试环境。
- 生产部署必须人工确认。
- 失败自动停止，不继续发布。

### 风险检查清单

- 是否有任何密钥进入 Git。
- 支付回调是否验签。
- 支付回调是否幂等。
- 订单金额是否以后端计算为准。
- 预约名额是否事务/乐观锁保护。
- 商品库存是否锁定和释放。
- 上传文件是否校验类型和大小。
- 用户是否只能访问自己的订单。
- 店员核销是否有权限校验。
- 后台操作是否记录审计日志。
- 小程序隐私协议是否覆盖手机号、定位、图片上传。

### 实施路线图与交付标准

MVP 阶段：

- 目标：跑通展示、预约、支付、核销、商品下单、定制提交。
- 交付：可真机预览，可后台配置项目/时段/商品，可支付回调更新订单。
- 验收：10 条核心用例通过，支付和核销闭环通过。

增长阶段：

- 目标：提升复购和运营效率。
- 交付：优惠券、积分、活动日历、内容专题、评价晒图、数据看板。
- 验收：运营可独立发布活动和优惠，核心埋点可追踪转化。

稳定阶段：

- 目标：提升可靠性、审计和扩展能力。
- 交付：退款、改期、异常补偿、审计日志、权限细化、备份恢复、告警。
- 验收：关键链路具备回放、排错、回滚能力。

## 5. 核心难点与应对策略

### 三个最可能崩溃的技术点

1. 预约名额并发超卖。
   - 预案：事务/乐观锁、订单过期释放、幂等键、压力测试。
2. 支付状态错乱。
   - 预案：以后端回调为准、验签、金额校验、回调幂等、支付单独立表。
3. 后台运营能力不足。
   - 预案：MVP 后台必须覆盖项目、时段、商品、订单、核销和定制，不把后台推迟到最后。

### 项目规范、标注和要求

- 状态枚举必须集中定义。
- 接口必须有 requestId。
- 订单、支付、核销必须有业务编号。
- 所有金额使用分，不使用浮点。
- 所有时间保存 ISO 字符串或数据库 datetime，展示时按 Asia/Hong_Kong 格式化。
- 所有数据库变更必须走迁移脚本。
- 所有 AI 生成内容必须标注来源和人工确认状态。

### 实现步骤建议

1. 建立小程序原生脚手架和 TDesign。
2. 建立 request、auth、config、logger 基础层。
3. 建立 CloudBase 环境和本地 dev 配置。
4. 实现首页 mock 数据和组件。
5. 实现体验项目、详情、时段选择。
6. 实现预约订单和名额锁定。
7. 接入支付预下单和回调。
8. 实现核销。
9. 实现商品 SKU 和订单。
10. 实现定制表单和后台跟进。
11. 补齐测试、埋点、日志和上线检查。

### 模块分解

- 首页模块：负责聚合内容，不直接承载复杂交易。
- 预约模块：负责项目、时段、名额、预约订单和核销。
- 商品模块：负责商品、SKU、库存、配送/自提。
- 订单模块：负责统一订单、金额、状态和查询。
- 支付模块：负责预下单、回调、退款和支付审计。
- 定制模块：负责需求、报价、沟通、制作和交付。
- 会员模块：负责等级、积分、优惠券和权益。
- 后台模块：负责配置、审核、核销、运营和权限。

## 6. 开发者上手路径

### 环境准备

- Node.js 20 LTS。
- 微信开发者工具。
- Git。
- CloudBase CLI。
- 小程序 AppID。
- CloudBase 环境。
- 微信支付商户号和测试配置。

### 要读/跑内容

先读：

1. `README.md`
2. `DESIGN_REFERENCE.md`
3. `PROJECT_DOCUMENTATION.md`
4. `ARCHITECTURE_PLAN.md`

再跑：

1. 小程序空项目。
2. TDesign 示例按钮/表单。
3. CloudBase 登录和云函数。
4. 预约下单 mock 流程。

### 上手模块顺序

1. 首页和组件。
2. 体验列表/详情。
3. 时段选择。
4. 预约确认。
5. 订单中心。
6. 商品详情。
7. 定制表单。
8. 后台和核销。

### 高频任务索引

- 新增体验项目：后台项目表 + 图片 + 规则 + 时段。
- 新增商品：商品表 + SKU + 库存 + 配送/自提。
- 调整首页：home 配置 + banner + 推荐项目。
- 处理退款：订单状态 + 支付退款 + 名额/库存释放。
- 排查支付：orderNo、paymentNo、providerTradeNo、回调日志。

### 变更安全清单

- 是否影响订单、支付、库存、名额。
- 是否需要数据库迁移。
- 是否需要灰度或回滚。
- 是否增加新权限。
- 是否影响小程序审核。
- 是否更新测试用例和文档。

### 常见故障排查索引

- 登录失败：检查 AppID、CloudBase 环境、openid 获取。
- 图片上传失败：检查云存储权限、文件大小、临时路径。
- 名额不释放：检查待支付过期任务和订单状态。
- 支付成功但订单未更新：检查回调域名、验签、金额、幂等记录。
- 核销失败：检查核销码、订单状态、店员权限。

### 必须掌握

- JavaScript/TypeScript 基础、异步 Promise、模块化。
- 微信小程序 WXML/WXSS/JS/JSON、生命周期、组件、分包。
- TDesign MiniProgram 组件使用。
- CloudBase 云函数、数据库、云存储、日志。
- 微信支付基础流程、回调、验签和幂等。
- REST API、错误码、输入校验。
- Git 分支、提交、回滚、PR。

### 建议了解

- 领域建模和状态机。
- 并发控制、事务、乐观锁。
- OpenAPI/Swagger。
- CI/CD。
- 安全审计和日志脱敏。
- 数据埋点和转化漏斗。

### 学习资源推荐

- 微信小程序官方文档。
- TDesign MiniProgram 官方文档和 GitHub。
- CloudBase 官方文档。
- 微信支付官方文档。
- Apple Human Interface Guidelines。

## 7. UI 设计演示

### 首页优先级

1. 门店氛围主视觉：建立信任和审美。
2. 立即预约/逛逛成品：承接主转化。
3. 分类入口：陶艺、木作、香氛、课程、礼盒、定制。
4. 本周可约：降低决策成本。
5. 热门体验和商品：推动转化。
6. 活动课程：增强内容感。
7. 定制案例：承接高客单价。
8. 门店信息：导航、营业时间、电话。

### 核心交互路径与技术约束

- 登录：尽量延后到下单、预约、收藏等需要身份时；手机号授权只在必要时触发。
- 预约：必须实时查询时段，提交时后端再次校验名额。
- 支付：前端只发起支付，不决定最终成功；状态以后端回调为准。
- 订阅消息：预约成功后再请求提醒订阅。
- 定位：只在用户点击导航或选择门店时申请权限。
- 离线能力：0-1 不做完整离线，只做加载失败和重试。

### 移动端差异化考虑

这是微信小程序，运行在 iOS/Android 微信容器中：

- 遵守微信导航和授权时机，不按原生 App 方式强行申请权限。
- iOS 底部安全区适配底部固定 CTA。
- Android 机型需重点测试长标题、价格、按钮换行和图片加载。
- 不依赖系统级推送，使用微信订阅消息。

### UI 组件库建议

- 使用 TDesign MiniProgram 做基础组件。
- 自定义品牌组件仅限：项目卡、时段卡、商品卡、订单卡、空状态、成功小票。
- 图标使用组件库或统一图标资源，不零散手绘。

### Markdown 原型

```text
首页
┌────────────────────────┐
│ 门店氛围图 + 品牌标题     │
│ [立即预约] [逛逛成品]     │
├────────────────────────┤
│ 陶艺 木作 香氛 课程 礼盒 定制 │
├────────────────────────┤
│ 本周可约：项目卡横滑       │
├────────────────────────┤
│ 热门体验 / 成品材料包      │
├────────────────────────┤
│ 定制案例 / 门店信息        │
└────────────────────────┘
```

AI 生成图片提示词：

```text
高端但温暖的城市手作工作室微信小程序首页界面，陶艺、木工、香氛元素，真实门店工作台和材料墙，大面积留白，暖米白背景，鼠尾草绿主按钮，陶土红和蜂蜜黄小标签，移动端UI，精致卡片，清晰预约和购买入口，Apple HIG风格的清晰层次，非营销海报风。
```

## 8. 审计与方案评估

### 反对方视角批判

1. CloudBase 早期很快，但订单、支付、库存强一致逻辑可能被低估。
2. 原生小程序开发效率稳定，但如果团队没有小程序经验，组件和状态管理会踩坑。
3. 视觉要求高，若素材质量不足，界面再好也难达到预期。

### 三个可能导致失败的点

1. 范围膨胀：同时做商城、预约、会员、定制、活动、后台，交付延期。
2. 支付和履约状态设计不严谨：导致漏单、错单、重复核销。
3. 后台太弱：前台上线后门店无法维护内容和时段。

### 替代架构

替代方案 A：有赞/微盟先跑业务。

- 优点：最快上线，交易稳定。
- 缺点：视觉和定制能力受限。
- 适用：没有开发资源，先验证商业模式。

替代方案 B：原生小程序 + Node.js/NestJS + MySQL。

- 优点：强建模、强事务、长期可控。
- 缺点：0-1 成本更高。
- 适用：已有后端工程师和服务器运维能力。

替代方案 C：Taro/uni-app 多端。

- 优点：多端复用。
- 缺点：当前只做微信小程序时增加抽象成本。
- 适用：明确要同步 App/H5/多小程序。

### 兜底方案与最小环境依赖

最小依赖：

- 微信开发者工具。
- 小程序 AppID。
- CloudBase 环境。
- CloudBase 数据库/云函数/云存储。
- 微信支付商户号。

兜底：

- 支付未接入前先支持“提交预约 + 到店支付”。
- 后台未完成前先用种子数据和配置文件管理。
- 商品复杂 SKU 未完成前先支持单规格商品。
- 定制复杂报价未完成前先支持需求提交和人工联系。

### AI 协作编程规范

安全性：

- AI 不得接触真实密钥。
- AI 生成支付、权限、并发代码前必须先写设计和测试点。
- AI 改动必须说明文件、原因和影响。

效率：

- 先做小切片，从首页和预约闭环开始。
- 每次只改一个业务模块。
- 代码生成后必须运行 lint/test。

成本：

- 0-1 不引入微服务、复杂状态库、重型后台框架。
- 新依赖必须说明收益和替代方案。
- AI 调用功能默认关闭，开启前评估日志、费用和合规。

## 9. 专家总结、效果预演与调研来源

### 专家总结

本项目最优解不是追求架构复杂，而是把“预约名额、商品库存、订单支付、到店核销、定制工单”这五条状态链做清楚。0-1 阶段用原生小程序 + TDesign + CloudBase 能最快形成可上线系统；增长期再把订单、支付、会员、报表等高复杂模块迁移到更强的后端。

### 效果预演

用户第一次进入小程序，看到真实门店与作品图，能在首屏选择预约体验或购买成品；选择陶艺项目后，能看到成品、流程、价格、时长、规则和可约时段；支付后获得核销码和导航；到店完成体验后进入评价和会员复购。店员端能看到今日预约并扫码核销，店长能配置项目、时段、商品和活动。

### 调研来源

- 微信小程序官方开发文档：`https://developers.weixin.qq.com/miniprogram/dev/framework/`
- 微信小程序设计指南：`https://developers.weixin.qq.com/miniprogram/design/`
- TDesign MiniProgram：`https://tdesign.tencent.com/miniprogram/overview`
- TDesign MiniProgram GitHub：`https://github.com/Tencent/tdesign-miniprogram`
- CloudBase 官方文档：`https://docs.cloudbase.net/`
- 微信支付官方文档：`https://pay.weixin.qq.com/doc/`
- Apple Human Interface Guidelines：`https://developer.apple.com/design/human-interface-guidelines/`
