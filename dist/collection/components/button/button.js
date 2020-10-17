import { Component, h, Prop, Element, Host, Listen } from '@stencil/core';
export class Button {
  constructor() {
    this.ui = 'simple';
    this.color = 'blue';
    this.size = 'medium';
    this.circle = false;
    this.square = false;
    this.pill = false;
    this.fullWidth = false;
    this.disabled = false;
    this.selected = false;
    this.type = 'button';
  }
  onClickHandler($event) {
    var _a, _b;
    if (this.disabled) {
      $event.stopPropagation();
      return false;
    }
    (_b = (_a = this === null || this === void 0 ? void 0 : this.el) === null || _a === void 0 ? void 0 : _a.onclick) === null || _b === void 0 ? void 0 : _b.call(this, $event);
  }
  render() {
    var _a;
    const extraClasses = (_a = this.el) === null || _a === void 0 ? void 0 : _a.className.split(' ').filter(c => c !== 'hydrated').join(' ');
    const style = [
      'CrossUIButton',
      this.pill ? 'pill' : '',
      this.color,
      this.size,
      this.ui,
      this.circle ? 'circle' : '',
      this.square ? 'square' : '',
      this.fullWidth ? 'w-full' : '',
      extraClasses,
    ].join(' ');
    return (h(Host, null,
      h("button", { class: style, type: this.type, disabled: this.disabled },
        h("slot", null))));
  }
  static get is() { return "cross-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["button.css"]
  }; }
  static get properties() { return {
    "ui": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "ui",
      "reflect": false,
      "defaultValue": "'simple'"
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "'blue'"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'medium'"
    },
    "circle": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "circle",
      "reflect": false,
      "defaultValue": "false"
    },
    "square": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "square",
      "reflect": false,
      "defaultValue": "false"
    },
    "pill": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "pill",
      "reflect": false,
      "defaultValue": "false"
    },
    "fullWidth": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "full-width",
      "reflect": false,
      "defaultValue": "false"
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "selected": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "selected",
      "reflect": false,
      "defaultValue": "false"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'button'"
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "click",
      "method": "onClickHandler",
      "target": undefined,
      "capture": true,
      "passive": false
    }]; }
}
