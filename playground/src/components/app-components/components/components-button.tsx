import { Component, h, State } from '@stencil/core';

import { COLORS } from '@cross-ui/core/dist';

const IconDemoComponent = () => (
  <svg
    width="24"
    height="24"
    color="white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path fill="none" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path
      fill="none"
      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
    />
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width={1}
      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
    />
  </svg>
);

@Component({
  tag: 'components-button',
  shadow: false,
})
export class ComponentsButton {
  @State() ui: string;
  @State() outline: boolean = false;
  @State() disabled: boolean = false;

  constructor() {
    this.onClick = this.onClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.disableToggle = this.disableToggle.bind(this);
    this.outlineToggle = this.outlineToggle.bind(this);
  }

  private disableToggle() {
    this.disabled = !this.disabled;
  }

  private outlineToggle() {
    this.outline = !this.outline;
  }

  private onClick($event) {
    console.log('onClick', $event);
  }

  private onBlur($event) {
    console.log('onBlur', $event);
  }

  // private onFocus($event) {
  //   console.log('onFocus', $event);
  // }

  render() {
    return (
      <div class="Installation w-full">
        <h2 class="text-4xl text-left mb-4 border-b">
          {' '}
          Components <span class="text-2xl">button</span>
        </h2>

        <div class="mb-8">
          <h3 class="text-2xl mb-2 bg-gray-100 px-2">Basic </h3>
          <div class="px-4 text-center">
            <div>
              <cross-button
                onClick={this.disableToggle}
                class="mx-1"
                active={this.disabled}
              >
                {this.disabled ? (
                  <span>enable buttons</span>
                ) : (
                  <span>disable buttons</span>
                )}
              </cross-button>
              <cross-button
                onClick={this.outlineToggle}
                class="mx-1"
                active={this.outline}
              >
                {this.outline ? (
                  <span>set outline buttons</span>
                ) : (
                  <span>set default buttons</span>
                )}
              </cross-button>
            </div>

            <div class="my-2 text-center w-auto flex items-center flex-col">
              <div class="flex w-full justify-center items-center">
                <div class="w-64 text-center">small</div>
                <div class="w-64 text-center">medium</div>
                <div class="w-64 text-center">large</div>
              </div>
              {COLORS.map(color => {
                return (
                  <div class="flex w-full justify-center items-center mt-2">
                    <div class="w-64 text-center">
                      <cross-button
                        onClick={this.onClick}
                        onBlur={this.onBlur}
                        size="small"
                        color={color}
                        disabled={this.disabled}
                        outline={this.outline}
                      >
                        {color}
                      </cross-button>
                    </div>
                    <div class="w-64 text-center">
                      <cross-button
                        onClick={this.onClick}
                        onBlur={this.onBlur}
                        color={color}
                        disabled={this.disabled}
                        outline={this.outline}
                      >
                        {color}
                      </cross-button>
                    </div>
                    <div class="w-64 text-center">
                      <cross-button
                        onClick={this.onClick}
                        onBlur={this.onBlur}
                        size="large"
                        color={color}
                        disabled={this.disabled}
                        outline={this.outline}
                      >
                        {color}
                      </cross-button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl mb-2 bg-gray-100 px-2">Rounded</h3>
          <div class="px-4 text-center">
            <div>
              <cross-button onClick={this.disableToggle} class="mx-1">
                {this.disabled ? (
                  <span>enable buttons</span>
                ) : (
                  <span>disable buttons</span>
                )}
              </cross-button>
              <cross-button onClick={this.outlineToggle} class="mx-1">
                {this.outline ? (
                  <span>set outline buttons</span>
                ) : (
                  <span>set default buttons</span>
                )}
              </cross-button>
            </div>

            <div class="my-2 text-center w-auto flex items-center flex-col">
              <div class="flex w-full justify-center items-center">
                <div class="w-64 text-center">small</div>
                <div class="w-64 text-center">medium</div>
                <div class="w-64 text-center">large</div>
              </div>
              {COLORS.map(color => {
                return (
                  <div class="flex w-full justify-center items-center mt-2">
                    <div class="w-64 text-center">
                      <cross-button
                        onClick={this.onClick}
                        onBlur={this.onClick}
                        size="small"
                        pill
                        color={color}
                        disabled={this.disabled}
                        outline={this.outline}
                      >
                        my button
                      </cross-button>
                    </div>
                    <div class="w-64 text-center">
                      <cross-button
                        onClick={this.onClick}
                        onBlur={this.onBlur}
                        pill
                        color={color}
                        disabled={this.disabled}
                        outline={this.outline}
                      >
                        my button
                      </cross-button>
                    </div>
                    <div class="w-64 text-center">
                      <cross-button
                        onClick={this.onClick}
                        size="large"
                        pill
                        color={color}
                        disabled={this.disabled}
                        outline={this.outline}
                      >
                        my button
                      </cross-button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl mb-2 bg-gray-100 px-2">Circle</h3>
          <div class="px-4 text-center">
            <div>
              <cross-button onClick={this.disableToggle} class="mx-1">
                {this.disabled ? (
                  <span>enable buttons</span>
                ) : (
                  <span>disable buttons</span>
                )}
              </cross-button>
              <cross-button onClick={this.outlineToggle} class="mx-1">
                {this.outline ? (
                  <span>set outline buttons</span>
                ) : (
                  <span>set default buttons</span>
                )}
              </cross-button>
            </div>

            <div class="my-2 text-center w-auto flex items-center flex-col">
              <div class="flex">
                <div class="w-20 text-center">small</div>
                <div class="w-20 text-center">medium</div>
                <div class="w-20 text-center">large</div>
              </div>
              {COLORS.map(color => {
                return (
                  <div class="flex justify-center items-center mt-2">
                    <div class="w-20 text-center">
                      <cross-button
                        onClick={this.onClick}
                        onBlur={this.onBlur}
                        circle
                        size="small"
                        color={color}
                        disabled={this.disabled}
                        outline={this.outline}
                      >
                        <IconDemoComponent></IconDemoComponent>
                      </cross-button>
                    </div>
                    <div class="w-20 text-center">
                      <cross-button
                        onClick={this.onClick}
                        onBlur={this.onBlur}
                        circle
                        color={color}
                        disabled={this.disabled}
                        outline={this.outline}
                      >
                        <IconDemoComponent></IconDemoComponent>
                      </cross-button>
                    </div>
                    <div class="w-20 text-center">
                      <cross-button
                        onClick={this.onClick}
                        onBlur={this.onBlur}
                        circle
                        size="large"
                        color={color}
                        disabled={this.disabled}
                        outline={this.outline}
                      >
                        <IconDemoComponent></IconDemoComponent>
                      </cross-button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl mb-2 bg-gray-100 px-2">Square</h3>
          <div class="px-4 text-center">
            <div>
              <cross-button onClick={this.disableToggle} class="mx-1">
                {this.disabled ? (
                  <span>enable buttons</span>
                ) : (
                  <span>disable buttons</span>
                )}
              </cross-button>
              <cross-button onClick={this.outlineToggle} class="mx-1">
                {this.outline ? (
                  <span>set outline buttons</span>
                ) : (
                  <span>set default buttons</span>
                )}
              </cross-button>
            </div>

            <div class="my-2 text-center w-auto flex items-center flex-col">
              <div class="flex">
                <div class="w-20 text-center">small</div>
                <div class="w-20 text-center">medium</div>
                <div class="w-20 text-center">large</div>
              </div>
              {COLORS.map(color => {
                return (
                  <div class="flex justify-center items-center mt-2">
                    <div class="w-20 text-center">
                      <cross-button
                        onClick={this.onClick}
                        onBlur={this.onBlur}
                        square
                        size="small"
                        color={color}
                        disabled={this.disabled}
                        outline={this.outline}
                      >
                        <IconDemoComponent></IconDemoComponent>
                      </cross-button>
                    </div>
                    <div class="w-20 text-center">
                      <cross-button
                        onClick={this.onClick}
                        onBlur={this.onBlur}
                        square
                        color={color}
                        disabled={this.disabled}
                        outline={this.outline}
                      >
                        <IconDemoComponent></IconDemoComponent>
                      </cross-button>
                    </div>
                    <div class="w-20 text-center">
                      <cross-button
                        onClick={this.onClick}
                        onBlur={this.onBlur}
                        square
                        size="large"
                        color={color}
                        disabled={this.disabled}
                        outline={this.outline}
                      >
                        <IconDemoComponent></IconDemoComponent>
                      </cross-button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-2xl mb-2 bg-gray-100 px-2">Properties</h3>
          <div class="text-sm">
            <div class="flex bg-gray-100">
              <div class="w-1/4 p-1">name</div>
              <div class="w-1/4 p-1">type</div>
              <div class="w-1/4 p-1">default</div>
              <div class="w-2/4 p-1">description</div>
            </div>

            <div class="flex my-1">
              <div class="w-1/5 p-1">color</div>
              <div class="w-1/5 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">
                  string
                </span>
              </div>
              <div class="w-1/5 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">blue</span>
              </div>
              <div class="w-2/5 p-1">wip...</div>
            </div>
            <div class="flex my-1">
              <div class="w-1/4 p-1">circle</div>
              <div class="w-1/4 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">
                  boolean
                </span>
              </div>
              <div class="w-1/4 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">
                  false
                </span>
              </div>
              <div class="w-2/4 p-1">wip...</div>
            </div>
            <div class="flex my-1">
              <div class="w-1/4 p-1">square</div>
              <div class="w-1/4 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">
                  boolean
                </span>
              </div>
              <div class="w-1/4 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">
                  false
                </span>
              </div>
              <div class="w-2/4 p-1">wip...</div>
            </div>
            <div class="flex my-1">
              <div class="w-1/4 p-1">pill</div>
              <div class="w-1/4 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">
                  boolean
                </span>
              </div>
              <div class="w-1/4 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">
                  false
                </span>
              </div>
              <div class="w-2/4 p-1">wip...</div>
            </div>
            <div class="flex my-1">
              <div class="w-1/4 p-1">ui</div>
              <div class="w-1/4 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">
                  string
                </span>
              </div>
              <div class="w-1/4 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">
                  simple
                </span>
              </div>
              <div class="w-2/4 p-1">wip...</div>
            </div>
            <div class="flex my-1">
              <div class="w-1/4 p-1">disabled</div>
              <div class="w-1/4 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">
                  boolean
                </span>
              </div>
              <div class="w-1/4 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">
                  false
                </span>
              </div>
              <div class="w-2/4 p-1">wip...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
