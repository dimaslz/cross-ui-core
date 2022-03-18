import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-menu',
  styleUrl: 'app-menu.scss',
  shadow: false,
})
export class AppMenu {
  render() {
    return (
      <div class="Menu w-full">
        <div class="flex items-start justify-start h-full flex-col">
          <ul>
            {/* <li>
              <h3>Getting started</h3>
            </li>
            <li>
              <ul class="pl-3 text-sm mb-4">
                <li>
                  <stencil-route-link url="/getting-started/why">Why?</stencil-route-link>
                </li>
                <li>
                  <stencil-route-link url="/getting-started/installation">Installation</stencil-route-link>
                </li>
                <li>
                  <stencil-route-link url="/getting-started/contribution">Contribution</stencil-route-link>
                </li>
                <li>
                  <stencil-route-link url="/getting-started/support">Support</stencil-route-link>
                </li>
                <li>
                  <stencil-route-link url="/getting-started/design-system">Design system</stencil-route-link>
                </li>
              </ul>
            </li> */}
            <li>Components</li>
            <li>
              <ul class="py-2">
                <ul class="pl-3 text-sm mb-4">
                  <li>
                    <stencil-route-link url="/components/button" class="hover:text-green-500">
                      Button
                    </stencil-route-link>
                  </li>
                  <li>
                    <stencil-route-link url="/components/input-text" class="hover:text-green-500">
                      InputText
                    </stencil-route-link>
                  </li>
                  <li>
                    <stencil-route-link url="/components/select" class="hover:text-green-500">
                      Select
                    </stencil-route-link>
                  </li>
                </ul>
              </ul>
            </li>
            <li>Framework integrations</li>
            <li>
              <ul class="py-2">
                <ul class="pl-3 text-sm mb-4">
                  <li>
                    Angular
                  </li>
                  <li>
                    Vue 2/3 / Nuxt
                  </li>
                  <li>
                    React / Next
                  </li>
                  <li>
                    Svelte
                  </li>
                  <li>
                    Javascript
                  </li>
                </ul>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
