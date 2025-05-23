:: BASE_DOC ::

## API

### Swiper Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
autoplay | Boolean | true | 是否自动播放 | N
current | Number | 0 | 当前轮播在哪一项（下标） | N
direction | String | horizontal | 轮播滑动方向，包括横向滑动和纵向滑动两个方向。可选项：horizontal/vertical | N
display-multiple-items | Number | 1 | `0.32.0`。同时显示的滑块数量 | N
duration | Number | 300 | 滑动动画时长 | N
easing-function | String | default | `0.32.0`。指定 swiper 切换缓动动画类型。可选项：default/linear/easeInCubic/easeOutCubic/easeInOutCubic | N
height | String / Number | 192 | 轮播的高度；默认单位 `px` | N
image-props | Object | - | `0.34.0`。透传至 Image 组件 | N
interval | Number | 5000 | 轮播间隔时间 | N
list | Array | - | `0.32.0`。图片列表。TS 类型：`string[] \| SwiperList[]` `interface SwiperList { value: string, ariaLabel: string }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swiper/type.ts) | N
loop | Boolean | true | 是否循环播放 | N
navigation | Boolean / Object / Slot | true | 导航器全部配置，true 的话使用默认配置。TS 类型：`SwiperNavProps \| boolean`，[SwiperNav API Documents](./swiper-nav?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swiper/type.ts) | N
next-margin | String / Number | 0 | `0.32.0`。后边距，可用于露出后一项的一小部分。默认单位 `px` | N
pagination-position | String | bottom | 页码信息展示位置。可选项：top-left/top/top-right/bottom-left/bottom/bottom-right | N
previous-margin | String / Number | 0 | `0.32.0`。前边距，可用于露出前一项的一小部分。默认单位 `px` | N
snap-to-edge | Boolean | false | `0.32.0`。当 swiper-item 的个数大于等于 2，关闭 circular 并且开启 previous-margin 或 next-margin 的时候，可以指定这个边距是否应用到第一个、最后一个元素 | N

### Swiper Events

名称 | 参数 | 描述
-- | -- | --
change | `(current: number, source: SwiperChangeSource)` | 轮播切换时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swiper/type.ts)。<br/>`type SwiperChangeSource = 'autoplay' \| 'touch' \| 'nav'`<br/>
click | `(index: number)` | `0.34.0`。点击轮播项时触发
image-load | `(index: number)` | `1.1.4`。图片加载时触发

### Swiper External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-image | 当前图片样式类
t-class-nav | 导航样式类
t-class-next-image | 下一图片样式类
t-class-prev-image | 上一图片样式类


### SwiperNav Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
current | Number | 0 | `0.34.0`。当前轮播在哪一项（下标） | N
direction | String | horizontal | `0.34.0`。轮播滑动方向，包括横向滑动和纵向滑动两个方向。可选项：horizontal/vertical | N
min-show-num | Number | 2 | 小于这个数字不会显示导航器 | N
pagination-position | String | bottom | `0.34.0`。页码信息展示位置。可选项：top-left/top/top-right/bottom-left/bottom/bottom-right | N
show-controls | Boolean | false | `0.32.0`。是否显示两侧的控制按钮 | N
total | Number | 0 | `0.34.0`。总共的项数 | N
type | String | dots | 导航器类型，点状(dots)、点条状(dots-bar)、分式(fraction)等。TS 类型：`SwiperNavigationType` `type SwiperNavigationType = 'dots' \| 'dots-bar' \| 'fraction'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/swiper-nav/type.ts) | N

### SwiperNav External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
