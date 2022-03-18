import {
  Component,
  Host,
  h,
  Prop,
  Listen,
  Element,
  State,
} from '@stencil/core';
import { COLOR, COLORS, SIZE, SIZES } from '../../constants';

const componentClass = 'CrossUISelect';
const componentPrefix = `${componentClass}--`;

@Component({
  tag: 'cross-select',
})
export class Select {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) disabled: boolean = false;
  @Prop({ mutable: true }) required: boolean = false;
  @Prop({ mutable: true }) label: string = '';
  @Prop({ mutable: true }) value: string = '';
  @Prop({ mutable: true }) hint: string = '';
  @Prop({ mutable: true }) placeholder: string = '';
  @Prop({ mutable: true }) size: string = SIZE.MEDIUM;
  @Prop({ mutable: true }) data: any[] = [];
  @Prop() color: string = COLOR.PRIMARY;

  @State() highlightRequired: boolean = false;
  @State() error: boolean = false;
  @State() errorMessage: string;

  componentWillLoad() {
    if (!Boolean(this.label && this.placeholder)) {
      console.warn(
        "[CROSS-UI]: If you don't use label, placeholder attribute is mandatory",
      );
    }

    if (!COLORS.includes(this.color)) {
      throw new Error(
        `[CROSS-UI]: Color "${
          this.color
        }" is not allowed. Please, use one of the following options: ${COLORS.join(
          ', ',
        )}`,
      );
    }

    if (!SIZES.includes(this.size)) {
      throw new Error(
        `[CROSS-UI]: Size "${
          this.size
        }" is not allowed. Please, use one of the following options: ${SIZES.join(
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
      `${componentPrefix}${this.size}`,
      this.disabled || '',
      `${componentPrefix}${this.color}`,
    ].join(' ');

    return (
      <Host class={`${style}`}>
        {this.label && <label htmlFor="input">{this.label}</label>}
        <select
          disabled={this.disabled}
          class={this.error ? `${componentPrefix}error` : ''}
          id={this.el.id}
        >
          {this.data.map((d: any) => <option value={d.value}>{d.value}</option>)}
        </select>
        {this.error && (
          <div class="CrossUIInputText__error">{this.errorMessage}</div>
        )}
        {this.hint && <div class="CrossUIInputText__hint">{this.hint}</div>}
      </Host>
    );
  }
}
