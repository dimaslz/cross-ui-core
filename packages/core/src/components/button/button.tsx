import { Component, h, Prop, Element, Host, Listen } from '@stencil/core';

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
  @Prop() fullWidth: boolean = false;
  @Prop() selected: boolean = false;
  @Prop() type: string = 'button';

  @Listen('click', { capture: true })
  onClickHandler($event) {
    if (this.disabled) {
      $event.stopPropagation();
      return false;
    }

    this?.el?.onclick?.call(this, $event);
  }

  render() {
    const extraClasses = this.el?.className
      .split(' ')
      .filter(c => c !== 'hydrated')
      .join(' ');
    const style: string = [
      'CrossUIButton',
      this.pill ? 'pill' : '',
      this.color,
      this.size,
      this.outline ? 'outline' : 'simple',
      this.circle ? 'circle' : '',
      this.square ? 'square' : '',
      this.fullWidth ? 'CrossUIButton--full-width' : '',
      extraClasses,
    ].join(' ');

    return (
      <Host>
        <button
          class={`${style}`}
          type={this.type}
          disabled={this.disabled}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
