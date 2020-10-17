export declare class Button {
  el: HTMLElement;
  ui: string;
  color: string;
  size: string;
  circle: boolean;
  square: boolean;
  pill: boolean;
  fullWidth: boolean;
  disabled: boolean;
  selected: boolean;
  type: string;
  onClickHandler($event: any): boolean;
  render(): any;
}
