import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-getting-started',
  styleUrl: 'app-getting-started.scss',
  shadow: true,
})
export class AppGettingStarted {
  render() {
    return (
      <div class="GettingStarted flex">
        <app-menu class="w-64" />

        <div class="GettingStarted__content w-full">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/getting-started/why" component="app-why" exact={true} />
              <stencil-route url="/getting-started/installation" component="app-installation" exact={true} />
              <stencil-route url="/getting-started/contribution" component="app-contribution" exact={true} />
              <stencil-route url="/getting-started/design-system" component="app-design-system" exact={true} />
              <stencil-route url="/getting-started/support" component="app-support" exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </div>
      </div>
    );
  }
}
