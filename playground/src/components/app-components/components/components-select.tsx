import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'components-select',
  shadow: false,
})
export class ComponentsSelect {
  @State() ui: string;
  @State() outline: boolean = false;
  @State() disabled: boolean = false;

  @State() demoValue: string = '';

  data = [{
    label: "test",
    value: "test value"
  }];

  constructor() {
    this.onInputHandler = this.onInputHandler.bind(this);
  }

  private onInputHandler($event) {
    this.demoValue = $event.target.value;
  }

  render() {
    return (
      <div class="Installation w-full">
        <h2 class="text-4xl text-left mb-4 border-b">
          {' '}
          Components <span class="text-2xl">select</span>
        </h2>

        <h3 class="text-4xl text-left mb-4">
          {' '}
          <span class="text-2xl">simple</span>
        </h3>

        <div class="mb-8">
          <cross-select
            label="Label text"
            value="this is the content"
            size="small"
            data={this.data}
          ></cross-select>
        </div>

        <div class="mb-8">
          <cross-select
            label="Label text"
            value="this is the content"
            size="medium"
            data={this.data}
          ></cross-select>
        </div>

        <div class="mb-8">
          <cross-select
            label="Label text"
            value="this is the content"
            size="large"
            data={this.data}
          ></cross-select>
        </div>
      </div>
    );
  }
}
