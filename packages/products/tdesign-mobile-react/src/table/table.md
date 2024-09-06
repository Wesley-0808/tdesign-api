:: BASE_DOC ::

## API


### BaseTable Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
bordered | Boolean | false | 是否显示表格边框 | N
cellEmptyContent | TNode | - | 单元格数据为空时呈现的内容。TS 类型：`string \| TNode<BaseTableCellParams<T>>`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
columns | Array | [] | 列配置，泛型 T 指表格数据类型。TS 类型：`Array<BaseTableCol<T>>` | N
data | Array | [] | 数据源，泛型 T 指表格数据类型。TS 类型：`Array<T>` | N
empty | TNode | '' | 空表格呈现样式，支持全局配置 `GlobalConfigProvider`。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
fixedRows | Array | - | 【开发中】固定行（冻结行），示例：[M, N]，表示冻结表头 M 行和表尾 N 行。M 和 N 值为 0 时，表示不冻结行。TS 类型：`Array<number>` | N
height | String / Number | - | 表格高度，超出后会出现滚动条。示例：100,  '30%',  '300'。值为数字类型，会自动加上单位 px。如果不是绝对固定表格高度，建议使用 `maxHeight` | N
loading | TNode | undefined | 加载中状态。值为 `true` 会显示默认加载中样式，可以通过 Function 和 插槽 自定义加载状态呈现内容和样式。值为 `false` 则会取消加载状态。TS 类型：`boolean \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
loadingProps | Object | - | 透传加载组件全部属性。TS 类型：`Partial<LoadingProps>`，[Loading API Documents](./loading?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts) | N
maxHeight | String / Number | - | 表格最大高度，超出后会出现滚动条。示例：100, '30%', '300'。值为数字类型，会自动加上单位 px | N
rowKey | String | 'id' | 必需。唯一标识一行数据的字段名，来源于 `data` 中的字段。如果是字段嵌套多层，可以设置形如 `item.a.id` 的方法 | Y
showHeader | Boolean | true | 是否显示表头 | N
stripe | Boolean | false | 是否显示斑马纹 | N
tableContentWidth | String | - | 表格内容的总宽度，注意不是表格可见宽度。主要应用于 `table-layout: auto` 模式下的固定列显示。`tableContentWidth` 内容宽度的值必须大于表格可见宽度 | N
tableLayout | String | fixed | 表格布局方式。可选项：auto/fixed | N
verticalAlign | String | middle | 行内容上下方向对齐。可选项：top/middle/bottom | N
onCellClick | Function |  | TS 类型：`(context: BaseTableCellEventContext<T>) => void`<br/>单元格点击时触发。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts)。<br/>`interface BaseTableCellEventContext<T> { row: T; col: BaseTableCol; rowIndex: number; colIndex: number; e: MouseEvent }`<br/> | N
onRowClick | Function |  | TS 类型：`(context: RowEventContext<T>) => void`<br/>行点击时触发，泛型 T 指表格数据类型。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts)。<br/>`interface RowEventContext<T> { row: T; index: number; e: MouseEvent }`<br/> | N
onScroll | Function |  | TS 类型：`(params: { e: WheelEvent }) => void`<br/>表格内容滚动时触发 | N

### BaseTableCol

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
align | String | left | 列横向对齐方式。可选项：left/right/center | N
cell | String / Function | - | 自定义单元格渲染，优先级高于 `render`。泛型 T 指表格数据类型。TS 类型：`string \| TNode<BaseTableCellParams<T>>` `interface BaseTableCellParams<T> { row: T; rowIndex: number; col: BaseTableCol<T>; colIndex: number }`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts) | N
colKey | String | - | 渲染列所需字段，值为 `serial-number` 表示当前列为「序号」列 | N
ellipsis | TNode | false | 单元格和表头内容超出时，是否显示省略号。如果仅希望单元格超出省略，可设置 `ellipsisTitle = false`。<br/> 值为 `true`，则超出省略浮层默认显示单元格内容；<br/>值类型为 `Function` 则自定义超出省略浮中层显示的内容；<br/>值类型为 `Object`，则自动透传属性到 Tooltip 组件，可用于调整浮层背景色和方向等特性。<br/> 同时透传 Tooltip 属性和自定义浮层内容，请使用 `{ props: { theme: 'light' }, content: () => 'something' }`。<br /> 请注意单元格超出省略的两个基本点：1. 内容元素是内联元素或样式（自定义单元格内容时需特别注意）；2. 内容超出父元素。TS 类型：`boolean \| TNode<BaseTableCellParams<T>> \| TooltipProps \| { props: TooltipProps; content: TNode<BaseTableCellParams<T>> }`，[Tooltip API Documents](./tooltip?tab=api)。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts) | N
ellipsisTitle | TNode | undefined | 表头内容超出时，是否显示省略号。优先级高于 `ellipsis`。<br/>值为 `true`，则超出省略的浮层默认显示表头全部内容；<br/>值类型为 `Function` 用于自定义超出省略浮层显示的表头内容；<br/>值类型为 `Object`，则自动透传属性到 Tooltip 组件，则自动透传属性到 Tooltip 组件，可用于调整浮层背景色和方向等特性。<br/> 同时透传 Tooltip 属性和自定义浮层内容，请使用 `{ props: { theme: 'light' }, content: () => 'something' }`。TS 类型：`boolean \| TNode<BaseTableColParams<T>> \| TooltipProps \| { props: TooltipProps; content: TNode<BaseTableColParams<T>> }` `interface BaseTableColParams<T> { col: BaseTableCol<T>; colIndex: number }`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts) | N
fixed | String | left | 【开发中】固定列显示位置。可选项：left/right | N
minWidth | String / Number | - | 透传 CSS 属性 `min-width` 到 `<col>` 元素。⚠️ 仅少部分浏览器支持，如：使用 [TablesNG](https://docs.google.com/document/d/16PFD1GtMI9Zgwu0jtPaKZJ75Q2wyZ9EZnVbBacOfiNA/preview) 渲染的 Chrome 浏览器支持 `minWidth` | N
title | String / Function | - | 自定义表头渲染，优先级高于 render。TS 类型：`string \| TNode \| TNode<{ col: BaseTableCol; colIndex: number }>`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
width | String / Number | - | 列宽，可以作为最小宽度使用。当列宽总和小于 `table` 元素时，浏览器根据宽度设置情况自动分配宽度；当列宽总和大于 `table` 元素，表现为定宽。可以同时调整 `table` 元素的宽度来达到自己想要的效果 | N


### PrimaryTable Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
rowSelectionAllowUncheck | Boolean | - | 行选中单选场景，是否允许取消选中 | N
rowSelectionType | String | - | 行选中类型，单选或多选。效果和 `columns` 中配置的 `{ colKey: 'row-select', type: 'single' }` 一样。可选项：single/multiple | N
`Omit<BaseTableProps<T>, 'columns' \| 'onCellClick'>` | \- | - | 继承 `Omit<BaseTableProps<T>, 'columns' \| 'onCellClick'>` 中的全部属性 | N
onSelectChange | Function |  | TS 类型：`(selectedRowKeys: Array<string \| number>, options: SelectOptions<T>) => void`<br/>选中行发生变化时触发，泛型 T 指表格数据类型。两个参数，第一个参数为选中行 keys，第二个参数为更多参数，具体如下：`type = uncheck` 表示当前行操作为「取消行选中」；`type = check` 表示当前行操作为「行选中」； `currentRowKey` 表示当前操作行的 rowKey 值； `currentRowData` 表示当前操作行的行数据。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts)。<br/>`interface SelectOptions<T> { selectedRowData: Array<T>; type: 'uncheck' \| 'check'; currentRowKey?: string; currentRowData?: T }`<br/> | N
onSortChange | Function |  | TS 类型：`(sort: TableSort, options: SortOptions<T>) => void`<br/>排序发生变化时触发。其中 sortBy 表示当前排序的字段，sortType 表示排序的方式，currentDataSource 表示 sorter 排序后的结果，col 表示列配置。sort 值类型为数组时表示多字段排序。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts)。<br/>`interface SortOptions<T> { currentDataSource?: Array<T>; col: PrimaryTableCol }`<br/> | N