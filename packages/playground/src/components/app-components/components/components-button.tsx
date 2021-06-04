import { Component, h } from '@stencil/core';

const colors = ['primary', 'secondary', 'accent', 'danger', 'warning', 'success', 'info'];

@Component({
  tag: 'components-button',
  // styleUrl: 'components-button.scss',
  shadow: false,
})
export class ComponentsButton {
  constructor() {
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log('onClick');
  }

  render() {
    return (
      <div class="Installation w-full">
        <h2 class="text-4xl text-left mb-4 border-b">
          {' '}
          Components <span class="text-2xl">button</span>
        </h2>

        <div class="mb-8">
          <h3 class="text-2xl mb-2 bg-gray-100 px-2">Basic</h3>
          <div class="px-4 text-center">
            <div class="my-2 text-center w-auto flex items-center flex-col">
              <div class="flex w-full justify-center">
                <div class="w-64 text-center">small</div>
                <div class="w-64 text-center">medium</div>
                <div class="w-64 text-center">large</div>
              </div>
              {colors.map(color => {
                return <div class="flex w-full justify-center mt-2">
                <div class="w-64 text-center">
                  <cross-button onClick={this.onClick} size="small" color={color}>
                    {color}
                  </cross-button>
                </div>
                <div class="w-64 text-center">
                    <cross-button onClick={this.onClick} color={color}>{color}</cross-button>
                </div>
                <div class="w-64 text-center">
                  <cross-button onClick={this.onClick} size="large" color={color}>
                    {color}
                  </cross-button>
                </div>
              </div>
              })}
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl mb-2 bg-gray-100 px-2">Rounded</h3>
          <div class="px-4 text-center">
            <div class="my-2 text-center w-auto flex items-center flex-col">
              <div class="flex w-full justify-center">
                <div class="w-64 text-center">small</div>
                <div class="w-64 text-center">medium</div>
                <div class="w-64 text-center">large</div>
              </div>
              <div class="flex w-full justify-center mt-2">
                <div class="w-64 text-center">
                  <cross-button onClick={this.onClick} size="small" pill>
                    my button
                  </cross-button>
                </div>
                <div class="w-64 text-center">
                  <cross-button onClick={this.onClick} pill>
                    my button
                  </cross-button>
                </div>
                <div class="w-64 text-center">
                  <cross-button onClick={this.onClick} size="large" pill>
                    my button
                  </cross-button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h3 class="text-2xl mb-2 bg-gray-100 px-2">Circle and squared</h3>
          <div class="px-4">
            <div class="my-2 text-center w-auto flex items-center flex-col">
              <div class="flex">
                <div class="w-20 text-center">small</div>
                <div class="w-20 text-center">medium</div>
                <div class="w-20 text-center">large</div>
              </div>
              <div class="flex mt-2">
                <div class="w-20 text-center">
                  <cross-button onClick={this.onClick} circle size="small">
                    <svg width="24" height="24" color="white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  </cross-button>
                </div>
                <div class="w-20 text-center">
                  <cross-button onClick={this.onClick} circle>
                    <svg width="24" height="24" color="white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  </cross-button>
                </div>
                <div class="w-20 text-center">
                  <cross-button onClick={this.onClick} circle size="large">
                    <svg width="24" height="24" color="white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  </cross-button>
                </div>
              </div>
              <div class="flex mt-2">
                <div class="w-20 text-center">
                  <cross-button onClick={this.onClick} square size="small">
                    <svg width="24" height="24" color="white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  </cross-button>
                </div>
                <div class="w-20 text-center">
                  <cross-button onClick={this.onClick} square>
                    <svg width="24" height="24" color="white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  </cross-button>
                </div>
                <div class="w-20 text-center">
                  <cross-button onClick={this.onClick} square size="large">
                    <svg width="24" height="24" color="white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  </cross-button>
                </div>
              </div>
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
                <span class="bg-gray-200 text-gray-700 px-1 rounded">string</span>
              </div>
              <div class="w-1/5 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">blue</span>
              </div>
              <div class="w-2/5 p-1">wip...</div>
            </div>
            <div class="flex my-1">
              <div class="w-1/4 p-1">circle</div>
              <div class="w-1/4 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">boolean</span>
              </div>
              <div class="w-1/4 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">false</span>
              </div>
              <div class="w-2/4 p-1">wip...</div>
            </div>
            <div class="flex my-1">
              <div class="w-1/4 p-1">square</div>
              <div class="w-1/4 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">boolean</span>
              </div>
              <div class="w-1/4 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">false</span>
              </div>
              <div class="w-2/4 p-1">wip...</div>
            </div>
            <div class="flex my-1">
              <div class="w-1/4 p-1">pill</div>
              <div class="w-1/4 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">boolean</span>
              </div>
              <div class="w-1/4 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">false</span>
              </div>
              <div class="w-2/4 p-1">wip...</div>
            </div>
            <div class="flex my-1">
              <div class="w-1/4 p-1">ui</div>
              <div class="w-1/4 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">string</span>
              </div>
              <div class="w-1/4 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">simple</span>
              </div>
              <div class="w-2/4 p-1">wip...</div>
            </div>
            <div class="flex my-1">
              <div class="w-1/4 p-1">disabled</div>
              <div class="w-1/4 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">boolean</span>
              </div>
              <div class="w-1/4 p-1">
                <span class="bg-gray-200 text-gray-700 px-1 rounded">false</span>
              </div>
              <div class="w-2/4 p-1">wip...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
