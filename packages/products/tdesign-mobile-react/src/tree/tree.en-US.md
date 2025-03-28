:: BASE_DOC ::

## API

### Tree Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
actived | Array | - | Typescript：`Array<TreeNodeValue>` | N
allowDrop | Function | - | Determine whether the node can execute the drop operation。Typescript：`(context: { e: DragEvent; dragNode: TreeNodeModel<T>; dropNode: TreeNodeModel<T>; dropPosition: number; }) => boolean` | N
allowFoldNodeOnFilter | Boolean | false | \- | N
checkProps | Object | - | Typescript：`CheckboxProps`，[Checkbox API Documents](./checkbox?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/tree/type.ts) | N
checkStrictly | Boolean | false | \- | N
checkable | Boolean | false | \- | N
data | Array | [] | Typescript：`Array<T>` | N
disabled | Boolean | - | \- | N
empty | TNode | '' | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
expandAll | Boolean | false | \- | N
expandLevel | Number | 0 | \- | N
expandMutex | Boolean | false | \- | N
expandOnClickNode | Boolean | false | \- | N
expandParent | Boolean | false | \- | N
expanded | Array | [] | Typescript：`Array<TreeNodeValue>` | N
filter | Function | - | Typescript：`(node: TreeNodeModel<T>) => boolean` | N
hover | Boolean | - | \- | N
icon | TNode | true | Typescript：`boolean \| TNode<TreeNodeModel<T>>`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
keys | Object | - | alias field name in data。Typescript：`TreeKeysType`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
label | TNode | true | Typescript：`string \| boolean \| TNode<TreeNodeModel<T>>`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
lazy | Boolean | true | \- | N
line | TNode | false | Typescript：`boolean \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
load | Function | - | Typescript：`(node: TreeNodeModel<T>) => Promise<Array<T>>` | N
operations | TElement | - | Typescript：`TNode<TreeNodeModel<T>>`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
transition | Boolean | true | \- | N
value | Array | [] | Typescript：`Array<TreeNodeValue>` `type TreeNodeValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/tree/type.ts) | N
defaultValue | Array | [] | uncontrolled property。Typescript：`Array<TreeNodeValue>` `type TreeNodeValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/tree/type.ts) | N
valueMode | String | onlyLeaf | options: onlyLeaf/parentFirst/all | N
onActive | Function |  | Typescript：`(value: Array<TreeNodeValue>, context: { node: TreeNodeModel<T>; e?: MouseEvent; trigger: 'node-click' \| 'setItem' }) => void`<br/> | N
onChange | Function |  | Typescript：`(value: Array<TreeNodeValue>, context: { node: TreeNodeModel<T>; e?: any; trigger: 'node-click' \| 'setItem' }) => void`<br/> | N
onClick | Function |  | Typescript：`(context: { node: TreeNodeModel<T>; e: MouseEvent }) => void`<br/> | N
onExpand | Function |  | Typescript：`(value: Array<TreeNodeValue>, context: { node: TreeNodeModel<T>; e?: MouseEvent; trigger: 'node-click' \| 'icon-click' \| 'setItem' }) => void`<br/> | N
onLoad | Function |  | Typescript：`(context: { node: TreeNodeModel<T> }) => void`<br/> | N

### TreeInstanceFunctions 组件实例方法

name | params | return | description
-- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
appendTo | `(value: TreeNodeValue, newData: T \| Array<T>)` | \- | required
getIndex | `(value: TreeNodeValue)` | `number` | required
getItem | `(value: TreeNodeValue)` | `TreeNodeModel<T>` | required
getItems | `(value?: TreeNodeValue)` | `Array<TreeNodeModel<T>>` | required
getParent | `(value: TreeNodeValue)` | `TreeNodeModel<T>` | required
getParents | `(value: TreeNodeValue)` | `TreeNodeModel<T>[]` | required
getPath | `(value: TreeNodeValue)` | `TreeNodeModel<T>[]` | required
getTreeData | `(value?: TreeNodeValue)` | `Array<T>` | required。get tree struct data
insertAfter | `(value: TreeNodeValue, newData: T)` | \- | required
insertBefore | `(value: TreeNodeValue, newData: T)` | \- | required
remove | `(value: TreeNodeValue)` | \- | required
setItem | `(value: TreeNodeValue, options: TreeNodeState)` | \- | required

### TreeNodeState

name | type | default | description | required
-- | -- | -- | -- | --
activable | Boolean | false | \- | N
actived | Boolean | false | \- | N
checkable | Boolean | false | \- | N
checked | Boolean | false | \- | N
disabled | Boolean | false | \- | N
draggable | Boolean | true | \- | N
expandMutex | Boolean | false | \- | N
expanded | Boolean | false | \- | N
indeterminate | Boolean | false | \- | N
label | String | - | \- | N
loading | Boolean | false | \- | N
value | String / Number | - | \- | N
visible | Boolean | false | \- | N
