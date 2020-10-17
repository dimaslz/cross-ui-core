import { r as registerInstance, h } from './index-e0018eda.js';


const HomeComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  onClick() {
    console.log('onClick');
  }
  render() {
    return (h("div", null, h("div", null, "hola"), h("div", { class: "w-full" }, h("cross-button", { onClick: this.onClick, "full-width": true }, "Enable"), h("cross-button", { onClick: this.onClick, disabled: true }, "Disable"))));
  }
};
HomeComponent.style = homeCss;

export { HomeComponent as app_home };