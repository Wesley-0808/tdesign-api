:: BASE_DOC ::

## API
### Popup Props

name | type | default | description | required
-- | -- | -- | -- | --
attach | String / Function | 'body' | Typescript：`AttachNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
children | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
closeBtn | TNode | - | Typescript：`boolean \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
content | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
delay | Number / Array | - | delay to show or hide popover。Typescript：`number \| Array<number>` | N
destroyOnClose | Boolean | false | \- | N
disabled | Boolean | - | \- | N
hideEmptyPopup | Boolean | false | \- | N
overlayClassName | String / Object / Array | - | Typescript：`ClassName`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
overlayInnerClassName | String / Object / Array | - | Typescript：`ClassName`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
overlayInnerStyle | Boolean / Object / Function | - | Typescript：`Styles \| ((triggerElement: HTMLElement, popupElement: HTMLElement) => Styles)`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
overlayStyle | Boolean / Object / Function | - | Typescript：`Styles \| ((triggerElement: HTMLElement, popupElement: HTMLElement) => Styles)`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
placement | String | top | Typescript：`PopupPlacement` `type PopupPlacement = 'top'\|'left'\|'right'\|'bottom'\|'top-left'\|'top-right'\|'bottom-left'\|'bottom-right'\|'left-top'\|'left-bottom'\|'right-top'\|'right-bottom'`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/popup/type.ts) | N
popperOptions | Object | - | popper initial options，details refer to https://popper.js.org/docs | N
showArrow | Boolean | false | \- | N
trigger | String | hover | options：hover/click/focus/mousedown/context-menu | N
triggerElement | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
visible | Boolean | - | Typescript：`boolean` | N
zIndex | Number | - | \- | N
onScroll | Function |  | Typescript：`(context: { e: WheelEvent }) => void`<br/> | N
onScrollToBottom | Function |  | Typescript：`(context: { e: WheelEvent }) => void`<br/> | N
onVisibleChange | Function |  | Typescript：`(visible: boolean, context: PopupVisibleChangeContext) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/popup/type.ts)。<br/>`interface PopupVisibleChangeContext { e?: PopupTriggerEvent; trigger?: PopupTriggerSource }`<br/><br/>`type PopupTriggerEvent = MouseEvent \| FocusEvent \| KeyboardEvent`<br/><br/>`type PopupTriggerSource = 'document' \| 'trigger-element-click' \| 'trigger-element-hover' \| 'trigger-element-blur' \| 'trigger-element-focus' \| 'trigger-element-mousedown' \| 'trigger-element-close' \| 'context-menu' \| 'keydown-esc'`<br/> | N
