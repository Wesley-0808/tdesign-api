:: BASE_DOC ::

## API

### Indexes Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
current | String / Number | - | 索引列表的激活项，默认首项。支持语法糖 `v-model` 或 `v-model:current` | N
defaultCurrent | String / Number | - | 索引列表的激活项，默认首项。非受控属性 | N
indexList | Array | - | 索引字符列表。不传默认 `A-Z`。TS 类型：`Array<string \| number>` | N
sticky | Boolean | true | 索引是否吸顶，默认为true。TS 类型：`Boolean` | N
stickyOffset | Number | 0 | 锚点吸顶时与顶部的距离	 | N
onChange | Function |  | TS 类型：`(index: string \| number) => void`<br/>索引发生变更时触发事件 | N
onSelect | Function |  | TS 类型：`(index: string \| number) => void`<br/>点击侧边栏时触发事件 | N

### Indexes Events

名称 | 参数 | 描述
-- | -- | --
change | `(index: string \| number)` | 索引发生变更时触发事件
select | `(index: string \| number)` | 点击侧边栏时触发事件


### IndexesAnchor Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
index | String / Number | - | 索引字符 | N
