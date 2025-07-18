:: BASE_DOC ::

## API

### ColorPicker Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
auto-close | Boolean | true | \- | N
color-modes | String / Array | "monochrome" | Typescript：`colorModesEnum \| colorModesEnum[] ` `type colorModesEnum = 'monochrome' \| 'linear-gradient'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/color-picker/type.ts) | N
enable-alpha | Boolean | false | \- | N
enable-multiple-gradient | Boolean | true | \- | N
fixed | Boolean | false | `1.8.5` | N
footer | Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
format | String | RGB | When `enableAlpha` is true, `HEX8/RGBA/HSLA/HSVA` are valid。options: HEX/HEX8/RGB/RGBA/HSL/HSLA/HSV/HSVA/CMYK/CSS | N
header | Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
popup-props | Object | {} | Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/color-picker/type.ts) | N
swatch-colors | Array | undefined | swatch colors。Typescript：`Array<string> \| null \| undefined` | N
type | String | base | options: base/multiple。Typescript：`TypeEnum ` `type TypeEnum = 'base' \| 'multiple'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/color-picker/type.ts) | N
use-popup | Boolean | false | \- | N
value | String | - | color value | N
default-value | String | undefined | color value。uncontrolled property | N
visible | Boolean | false | \- | N

### ColorPicker Events

name | params | description
-- | -- | --
change | `(value: string, context: { color: ColorObject; trigger: ColorPickerChangeTrigger })` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/color-picker/type.ts)。<br/>`type ColorPickerChangeTrigger = 'palette-hue-bar' \| 'palette-alpha-bar' \| 'preset' `<br/>
close | `(trigger: ColorPickerTrigger)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/color-picker/type.ts)。<br/>`type ColorPickerTrigger = 'overlay'`<br/>
palette-bar-change | `(detail: { color: ColorObject })` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/color-picker/type.ts)。<br/>`interface ColorObject { alpha: number; css: string; hex: string; hex8: string; hsl: string; hsla: string; hsv: string; hsva: string; rgb: string; rgba: string; value: number;}`<br/>
