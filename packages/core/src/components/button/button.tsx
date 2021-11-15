import { Component, h, Prop, Element, Listen } from '@stencil/core';
import { colors, sizes } from '../../constants';

const componentClass = 'CrossUIButton';

@Component({
  tag: 'cross-button',
})
export class Button {
  @Element() el: HTMLElement;

  @Prop({ mutable: true }) outline: boolean = false;
  @Prop({ mutable: true }) disabled: boolean = false;
  @Prop() color: string = 'primary';
  @Prop() size: string = 'medium';
  @Prop() circle: boolean = false;
  @Prop() square: boolean = false;
  @Prop() pill: boolean = false;
  @Prop() active: boolean = false;
  @Prop() fullWidth: boolean = false;
  @Prop() selected: boolean = false;
  @Prop() type: string = 'button';

  componentWillLoad() {
    if (!colors.includes(this.color)) {
      throw new Error(
        `Color "${
          this.color
        }" is not allowed. Please, use one of the following options: ${colors.join(
          ', ',
        )}`,
      );
    }

    if (!sizes.includes(this.size)) {
      throw new Error(
        `Size "${
          this.size
        }" is not allowed. Please, use one of the following options: ${sizes.join(
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
      this.pill ? 'pill' : '',
      this.color,
      this.size,
      this.outline ? 'outline' : 'default',
      this.circle ? 'circle' : '',
      this.square ? 'square' : '',
      this.active || this.selected ? 'active' : '',
      this.fullWidth ? `full-width` : '',
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
