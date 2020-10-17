import { Component, h } from '@stencil/core';
export class HomeComponent {
  onClick() {
    console.log('onClick');
  }
  render() {
    return (h("div", null,
      h("div", null, "hola"),
      h("div", { class: "w-full" },
        h("cross-button", { onClick: this.onClick, "full-width": true }, "Enable"),
        h("cross-button", { onClick: this.onClick, disabled: true }, "Disable"))));
  }
  static get is() { return "app-home"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["home.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["home.css"]
  }; }
}
