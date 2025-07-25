/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdInputProps } from './type';
import { PropType } from 'vue';

export default {
  /** 文本内容位置，居左/居中/居右 */
  align: {
    type: String as PropType<TdInputProps['align']>,
    default: 'left' as TdInputProps['align'],
    validator(val: TdInputProps['align']): boolean {
      if (!val) return true;
      return ['left', 'center', 'right'].includes(val);
    },
  },
  /** 超出 `maxlength` 或 `maxcharacter` 之后是否允许继续输入 */
  allowInputOverMax: Boolean,
  /** 是否开启自动填充功能，HTML5 原生属性，[点击查看详情](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) */
  autocomplete: {
    type: String,
    default: undefined,
  },
  /** 自动聚焦 */
  autofocus: Boolean,
  /** 是否开启无边框模式 */
  borderless: Boolean,
  /** 清空图标触发方式，仅在输入框有值时有效 */
  clearTrigger: {
    type: String as PropType<TdInputProps['clearTrigger']>,
    default: 'always' as TdInputProps['clearTrigger'],
    validator(val: TdInputProps['clearTrigger']): boolean {
      if (!val) return true;
      return ['always', 'focus'].includes(val);
    },
  },
  /** 是否可清空 */
  clearable: Boolean,
  /** 光标颜色 */
  cursorColor: {
    type: String,
    default: '#0052d9',
  },
  /** 是否禁用输入框 */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /** 用于控制回车键样式，此 API 仅在部分浏览器支持，HTML5 原生属性，[点击查看详情](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint) */
  enterkeyhint: {
    type: String as PropType<TdInputProps['enterkeyhint']>,
    validator(val: TdInputProps['enterkeyhint']): boolean {
      if (!val) return true;
      return ['enter', 'done', 'go', 'next', 'previous', 'search', 'send'].includes(val);
    },
  },
  /** 右侧额外内容 */
  extra: {
    type: Function as PropType<TdInputProps['extra']>,
  },
  /** 指定输入框展示值的格式 */
  format: {
    type: Function as PropType<TdInputProps['format']>,
  },
  /** 左侧文本 */
  label: {
    type: [String, Function] as PropType<TdInputProps['label']>,
  },
  /** 标题输入框布局方式 */
  layout: {
    type: String as PropType<TdInputProps['layout']>,
    default: 'horizontal' as TdInputProps['layout'],
    validator(val: TdInputProps['layout']): boolean {
      if (!val) return true;
      return ['vertical', 'horizontal'].includes(val);
    },
  },
  /** 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。`maxcharacter` 和 `maxlength` 二选一使用 */
  maxcharacter: {
    type: Number,
  },
  /** 用户最多可以输入的文本长度，一个中文等于一个计数长度。默认为空，不限制输入长度。`maxcharacter` 和 `maxlength` 二选一使用 */
  maxlength: {
    type: [String, Number] as PropType<TdInputProps['maxlength']>,
  },
  /** 名称 */
  name: {
    type: String,
    default: '',
  },
  /** 占位符 */
  placeholder: {
    type: String,
    default: undefined,
  },
  /** 组件前置图标 */
  prefixIcon: {
    type: Function as PropType<TdInputProps['prefixIcon']>,
  },
  /** 只读状态 */
  readonly: {
    type: Boolean,
    default: undefined,
  },
  /** 是否开启拼写检查，HTML5 原生属性，[点击查看详情](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/spellcheck) */
  spellCheck: Boolean,
  /** 输入框状态 */
  status: {
    type: String as PropType<TdInputProps['status']>,
    default: 'default' as TdInputProps['status'],
    validator(val: TdInputProps['status']): boolean {
      if (!val) return true;
      return ['default', 'success', 'warning', 'error'].includes(val);
    },
  },
  /** 后置图标前的后置内容 */
  suffix: {
    type: [String, Function] as PropType<TdInputProps['suffix']>,
  },
  /** 组件后置图标 */
  suffixIcon: {
    type: Function as PropType<TdInputProps['suffixIcon']>,
  },
  /** 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式 */
  tips: {
    type: [String, Function] as PropType<TdInputProps['tips']>,
  },
  /** 输入框类型 */
  type: {
    type: String as PropType<TdInputProps['type']>,
    default: 'text' as TdInputProps['type'],
    validator(val: TdInputProps['type']): boolean {
      if (!val) return true;
      return ['text', 'number', 'url', 'tel', 'password', 'search', 'submit', 'hidden'].includes(val);
    },
  },
  /** 输入框的值 */
  value: {
    type: [String, Number] as PropType<TdInputProps['value']>,
    default: undefined,
  },
  modelValue: {
    type: [String, Number] as PropType<TdInputProps['value']>,
    default: undefined,
  },
  /** 输入框的值，非受控属性 */
  defaultValue: {
    type: [String, Number] as PropType<TdInputProps['defaultValue']>,
  },
  /** 失去焦点时触发 */
  onBlur: Function as PropType<TdInputProps['onBlur']>,
  /** 输入框值发生变化时触发。`trigger=initial` 表示传入的数据不符合预期，组件自动处理后触发 change 告知父组件。如：初始值长度超过 `maxlength` 限制 */
  onChange: Function as PropType<TdInputProps['onChange']>,
  /** 清空按钮点击时触发 */
  onClear: Function as PropType<TdInputProps['onClear']>,
  /** 获得焦点时触发 */
  onFocus: Function as PropType<TdInputProps['onFocus']>,
  /** 字数超出限制时触发 */
  onValidate: Function as PropType<TdInputProps['onValidate']>,
};
