import {
  Component,
  Host,
  h,
  Prop,
  Listen,
  Element,
  State,
} from '@stencil/core';
import { COLOR, colors, SIZE, sizes } from '../../constants';
import { TYPE } from './input-text.constant';

const componentClass = 'CrossUIInputText';

@Component({
  tag: 'cross-input-text',
})
export class InputText {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) disabled: boolean = false;
  @Prop({ mutable: true }) required: boolean = false;
  @Prop() multiline: boolean = false;
  @Prop({ mutable: true }) label: string = '';
  @Prop({ mutable: true }) type: string = TYPE.TEXT;
  @Prop({ mutable: true }) value: string = '';
  @Prop({ mutable: true }) hint: string = '';
  @Prop({ mutable: true }) placeholder: string = '';
  @Prop({ mutable: true }) size: string = SIZE.SMALL;
  @Prop() color: string = COLOR.PRIMARY;
  @Prop() cols: number = null;
  @Prop() rows: number = null;

  @State() highlightRequired: boolean = false;
  @State() error: boolean = false;
  @State() errorMessage: string;

  componentWillLoad() {
    if (!Boolean(this.label && this.placeholder)) {
      console.warn(
        "[CROSS-UI]: If you don't use label, placeholder attribute is mandatory",
      );
    }

    if (!colors.includes(this.color)) {
      throw new Error(
        `[CROSS-UI]: Color "${
          this.color
        }" is not allowed. Please, use one of the following options: ${colors.join(
          ', ',
        )}`,
      );
    }

    if (!sizes.includes(this.size)) {
      throw new Error(
        `[CROSS-UI]: Size "${
          this.size
        }" is not allowed. Please, use one of the following options: ${sizes.join(
          ', ',
        )}`,
      );
    }
  }

  @Listen('focus', { capture: true })
  onFocusHandler($event) {
    if (this.disabled) {
      $event.stopPropagation();
      return false;
    }

    (this.el as any)?.onBlur?.call(this, $event);
  }

  @Listen('paste', { capture: true })
  onPasteHandler($event) {
    if (this.disabled) {
      $event.stopPropagation();
      return false;
    }

    (this.el as any)?.onPaste?.call(this, $event);
  }

  @Listen('blur', { capture: true })
  onBlurHandler($event) {
    if (this.disabled) {
      $event.stopPropagation();
      return false;
    }

    this.error = !!(!Boolean(this.value) && this.required);
    if (this.error) {
      this.errorMessage = 'This field is required';
    }

    (this.el as any)?.onBlur?.call(this, $event);
  }

  @Listen('input', { capture: true })
  onInputHandler($event) {
    if (this.disabled) {
      $event.stopPropagation();
      return false;
    }

    this.value = $event.target.value;

    this.error = !!(!Boolean(this.value) && this.required);
    if (this.error) {
      this.errorMessage = 'This field is required';
    }

    (this.el as any)?.onChange?.call(this, $event);
    (this.el as any)?.onInput?.call(this, $event);
  }

  render() {
    const style: string = [
      componentClass,
      `cross_ui__${this.size}`,
      this.disabled || '',
      `cross_ui__${this.color}`,
    ].join(' ');

    return (
      <Host class={`${style}`}>
        {this.label && <label htmlFor="input">{this.label}</label>}
        {this.multiline ? (
          <textarea
            value={this.value}
            disabled={this.disabled}
            placeholder={this.placeholder}
            class={this.error ? 'border-red-300' : ''}
            cols={this.cols}
            rows={this.rows}
            id={this.el.id}
          ></textarea>
        ) : (
          <input
            type={this.type}
            value={this.value}
            disabled={this.disabled}
            placeholder={this.placeholder}
            class={this.error ? 'border-red-300' : ''}
            id={this.el.id}
          />
        )}
        {this.error && (
          <div class="CrossUIInputText__error">{this.errorMessage}</div>
        )}
        {this.hint && <div class="CrossUIInputText__hint">{this.hint}</div>}
      </Host>
    );
  }
}
