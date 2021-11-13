import { Component, h, State } from '@stencil/core';

// import { colors } from '../../../../../packages/core/src/constants';

@Component({
  tag: 'components-input-text',
  shadow: false,
})
export class ComponentsInputText {
  @State() ui: string;
  @State() outline: boolean = false;
  @State() disabled: boolean = false;

  @State() demoValue: string = '';

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
          Components <span class="text-2xl">input text</span>
        </h2>

        <h3 class="text-4xl text-left mb-4">
          {' '}
          <span class="text-2xl">simple</span>
        </h3>

        <div class="mb-8">
          <cross-input-text
            label="Label text"
            value="this is the content"
          ></cross-input-text>
        </div>

        <div class="mb-8">
          <cross-input-text
            disabled={true}
            label="Label text"
            value="this is the content"
          ></cross-input-text>
        </div>

        <div class="mb-8">
          <cross-input-text
            label="Label text"
            placeholder="placeholder"
          ></cross-input-text>
        </div>
        <div class="mb-8">
          <cross-input-text
            label="Label text"
            size="medium"
            placeholder="placeholder"
          ></cross-input-text>
        </div>
        <div class="mb-8">
          <cross-input-text
            label="Label text"
            size="large"
            placeholder="placeholder"
          ></cross-input-text>
        </div>
        <div class="mb-8">
          <cross-input-text
            size="large"
            onInput={this.onInputHandler}
          ></cross-input-text>
        </div>
        <div class="mb-8">
          <cross-input-text
            size="large"
            placeholder="write here your text"
            value={this.demoValue}
            required={true}
            onInput={this.onInputHandler}
          ></cross-input-text>
        </div>
        <div class="mb-8">{this.demoValue}</div>

        <h3 class="text-4xl text-left mb-4">
          {' '}
          <span class="text-2xl">multiline</span>
        </h3>

        <div class="mb-8">
          <cross-input-text
            label="Label text"
            value="this is the content"
            multiline={true}
          ></cross-input-text>
        </div>
        <div class="mb-8">
          <cross-input-text
            rows={10}
            label="Label text"
            value="this is the content"
            multiline={true}
          ></cross-input-text>
        </div>

        <div class="mb-8">
          <cross-button>submit</cross-button>
        </div>
      </div>
    );
  }
}
