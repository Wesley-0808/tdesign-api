:: BASE_DOC ::

## API

### NoticeBar Props

name | type | default | description | required
-- | -- | -- | -- | --
content | String / Array / Slot / Function | - | Typescript：`string \| string[] \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
direction | String | horizontal | options: horizontal/vertical | N
interval | Number | 2000 | \- | N
marquee | Boolean / Object | false | Typescript：`boolean \| NoticeBarMarquee` `interface NoticeBarMarquee { speed?: number; loop?: number; delay?: number }`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/notice-bar/type.ts) | N
operation | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
prefixIcon | Boolean / Slot / Function | true | Typescript：`Boolean \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
suffixIcon | Slot / Function | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
theme | String | info | options: info/success/warning/error | N
visible | Boolean | false | `v-model` and `v-model:visible` is supported | N
defaultVisible | Boolean | false | uncontrolled property | N
onChange | Function |  | Typescript：`(current: number, context: { source: NoticeBarChangeSource }) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/notice-bar/type.ts)。<br/>`type NoticeBarChangeSource = '' \| 'autoplay' \| 'touch'`<br/> | N
onClick | Function |  | Typescript：`(trigger: NoticeBarTrigger) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/notice-bar/type.ts)。<br/>`type NoticeBarTrigger = 'prefix-icon' \| 'content' \| 'operation' \| 'suffix-icon';`<br/> | N

### NoticeBar Events

name | params | description
-- | -- | --
change | `(current: number, context: { source: NoticeBarChangeSource })` | [see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/notice-bar/type.ts)。<br/>`type NoticeBarChangeSource = '' \| 'autoplay' \| 'touch'`<br/>
click | `(trigger: NoticeBarTrigger)` | [see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/notice-bar/type.ts)。<br/>`type NoticeBarTrigger = 'prefix-icon' \| 'content' \| 'operation' \| 'suffix-icon';`<br/>
