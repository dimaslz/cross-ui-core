import {
  Component,
  Host,
  h,
  Prop,
  Listen,
  Element,
  State,
} from '@stencil/core';

const componentClass = 'CrossUIInputText';

enum TYPE {
  text = 'text',
  password = 'password',
  tel = 'tel',
}

@Component({
  tag: 'cross-input-text',
})
export class InputText {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) disabled: boolean = false;
  @Prop({ mutable: true }) required: boolean = false;
  @Prop({ mutable: true }) label: string = '';
  @Prop({ mutable: true }) type: string = TYPE.text;
  @Prop({ mutable: true }) value: string = '';
  @Prop({ mutable: true }) hint: string = '';
  @Prop({ mutable: true }) placeholder: string = '';
  @Prop({ mutable: true }) size: string = 'small';
  @Prop() color: string = 'primary';

  @Prop() multiline: boolean = false;
  @Prop() cols: number = null;
  @Prop() rows: number = null;

  @State() highlightRequired: boolean = false;
  @State() error: boolean = false;
  @State() errorMessage: string;

  componentWillLoad() {
    if (!Boolean(this.label && this.placeholder)) {
      console.warn(
        "[CROSS]: If you don't use label, placeholder attribute is mandatory",
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
      this.size,
      this.disabled,
      this.color,
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
            id="input"
            cols={this.cols}
            rows={this.rows}
          ></textarea>
        ) : (
          <input
            type={this.type}
            value={this.value}
            disabled={this.disabled}
            placeholder={this.placeholder}
            class={this.error ? 'border-red-300' : ''}
            id="input"
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
