import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-components',
  // styleUrl: 'app-components.scss',
  shadow: false,
})
export class AppComponents {
  render() {
    return (
      <div class="Components flex p-4">
        <app-menu class="w-64 pt-10" />

        <div class="Components__content w-full">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/components/button" component="components-button" exact={true} />
              <stencil-route url="/components/input-text" component="components-input-text" exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </div>
      </div>
    );
  }
}
