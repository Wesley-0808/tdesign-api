:: BASE_DOC ::

## API

### Image Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
error | String / Slot | 'default' | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
height | String / Number | - | \- | N
lazy | Boolean | false | \- | N
loading | String / Slot | 'default' | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
mode | String | scaleToFill | options: scaleToFill/aspectFit/aspectFill/widthFix/heightFix/top/bottom/center/left/right/top left/top right/bottom left/bottom right | N
shape | String | square | options: circle/round/square | N
show-menu-by-longpress | Boolean | false | \- | N
src | String | - | \- | N
t-id | String | - | `1.2.10`。image tag id | N
webp | Boolean | false | \- | N
width | String / Number | - | \- | N

### Image Events

name | params | description
-- | -- | --
error | - | trigger on image load failed
load | - | trigger on image loaded

### Image External Classes

className | Description
-- | --
t-class | \-
t-class-load | \-
