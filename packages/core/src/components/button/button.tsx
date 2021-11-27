import { Component, h, Prop, Element, Listen } from '@stencil/core';
import { COLOR, COLORS, SIZE, SIZES } from '../../constants';
import { TYPE } from './button.constant';

const componentClass = 'CrossUIButton';
const componentPrefix = `${componentClass}--`;

@Component({
  tag: 'cross-button',
})
export class Button {
  @Element() el: HTMLElement;

  @Prop({ mutable: true }) outline: boolean = false;
  @Prop({ mutable: true }) disabled: boolean = false;
  @Prop() color: string = COLOR.PRIMARY;
  @Prop() size: string = SIZE.MEDIUM;
  @Prop() circle: boolean = false;
  @Prop() square: boolean = false;
  @Prop() pill: boolean = false;
  @Prop() active: boolean = false;
  @Prop() fullWidth: boolean = false;
  @Prop() selected: boolean = false;
  @Prop() type: string = TYPE.BUTTON;

  componentWillLoad() {
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

  @Listen('click', { capture: true })
  onClickHandler($event) {
    if (this.disabled) {
      $event.stopPropagation();
      return false;
    }

    (this.el as any)?.onClick?.call(this, $event);
  }

  @Listen('blur', { capture: true })
  onBlurHandler($event) {
    if (this.disabled) {
      $event.stopPropagation();
      return false;
    }

    (this.el as any)?.onBlur?.call(this, $event);
  }

  @Listen('focus', { capture: true })
  onFocusHandler($event) {
    if (this.disabled) {
      $event.stopPropagation();
      return false;
    }

    (this.el as any)?.onFocus?.call(this, $event);
  }

  render() {
    const extraClasses = this.el?.className
      .split(' ')
      .filter(c => c !== 'hydrated')
      .join(' ');
    const style: string = [
      componentClass,
      this.pill ? `${componentPrefix}pill` : '',
      `${componentPrefix}${this.color}`,
      `${componentPrefix}${this.size}`,
      this.outline ? `${componentPrefix}outline` : `${componentPrefix}default`,
      this.circle ? `${componentPrefix}circle` : '',
      this.square ? `${componentPrefix}square` : '',
      this.active || this.selected ? `${componentPrefix}active` : '',
      this.fullWidth ? `${componentPrefix}full-width` : '',
      extraClasses,
    ].join(' ');

    return (
      <button
        class={`${style}`}
        type={this.type}
        disabled={this.disabled}
        id={this.el.id}
      >
        <slot></slot>
      </button>
    );
  }
}
