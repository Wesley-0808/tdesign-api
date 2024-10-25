:: BASE_DOC ::

## API


### DateTimePicker Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
cancelBtn | String | 取消 | \- | N
confirmBtn | String | - | \- | N
end | String / Number | - | \- | N
filter | Function | - | \- | N
footer | TElement | true | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
format | String | 'YYYY-MM-DD HH:mm:ss' | \- | N
header | TNode | true | Typescript：`boolean \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
mode | String / Array | 'date' | Typescript：`DateTimePickerMode` `type DateTimePickerMode = TimeModeValues \| Array<TimeModeValues> ` `type TimeModeValues = 'year' \| 'month' \| 'date' \| 'hour' \| 'minute' \| 'second'`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/date-time-picker/type.ts) | N
renderLabel | Function | - | Typescript：`(type: string, value: number) => string` | N
showWeek | Boolean | false | \- | N
start | String / Number | - | \- | N
steps | Object | - | \- | N
title | String | - | title of picker | N
usePopup | Boolean | true | \- | N
value | String / Number | - | Typescript：`DateValue` `type DateValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/date-time-picker/type.ts) | N
defaultValue | String / Number | - | uncontrolled property。Typescript：`DateValue` `type DateValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/date-time-picker/type.ts) | N
visible | Boolean | false | \- | N
onCancel | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/> | N
onChange | Function |  | Typescript：`(value: DateValue) => void`<br/> | N
onClose | Function |  | Typescript：`(trigger: TriggerSource) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/date-time-picker/type.ts)。<br/>`type TriggerSource = 'overlay' \| 'cancel-btn' \| 'confirm-btn'`<br/> | N
onConfirm | Function |  | Typescript：`(value: DateValue) => void`<br/> | N
onPick | Function |  | Typescript：`(value: DateValue) => void`<br/> | N