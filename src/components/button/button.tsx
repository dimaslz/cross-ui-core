import { Component, h, Prop, Element, Host } from "@stencil/core";

@Component({
  tag: "cross-button",
  styleUrl: "button.scss",
  shadow: true,
})
export class Button {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) ui: string = "simple";
  @Prop() color: string = "blue";
  @Prop() size: string = "medium";
  @Prop() circle: boolean = false;
  @Prop() square: boolean = false;
  @Prop() pill: boolean = false;
  @Prop() fullWidth: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() selected: boolean = false;
  @Prop() type: string = "button";
  
  render() {
    const extraClasses = this.el?.className.split(' ').filter(c => c !== 'hydrated').join(' ');
    const style: string = [
      'CrossUIButton',
      this.pill ? 'pill' : '', 
      this.color, 
      this.size,
      this.ui,
      this.circle && 'circle',
      this.square && 'square',
      this.fullWidth && 'w-full',
      extraClasses,
    ].join(' ');

    return (
      <Host>
        <button class={style} type={this.type} disabled={this.disabled}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
