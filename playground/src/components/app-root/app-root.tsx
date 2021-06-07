import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  // styleUrl: 'app-root.scss',
  shadow: false,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header class="px-4 py-2 flex sticky top-0 left-0 right-0 shadow-sm z-10 bg-white">
          <div class="flex-grow text-2xl uppercase">
            <stencil-route-link url="/">
              <img src="../../assets/images/logo.svg" class="h-12 cursor-pointer hover:opacity-75" />
            </stencil-route-link>
          </div>
          <nav class="flex items-center justify-end">
            <ul class="h-full flex divide-x">
              <li class="px-3 flex items-center justify-center">
                <a href="https://github.com/cross-ui">Github</a>
              </li>
            </ul>
          </nav>
        </header>

        <main class="w-full container my-0 mx-auto">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              {/* <stencil-route url="/profile/:name" component="app-profile" /> */}
              {/* <stencil-route url="/getting-started" component="app-getting-started" /> */}
              <stencil-route url="/welcome" component="app-welcome" />
              <stencil-route url="/components" component="app-components" />
              <stencil-route component="app-404" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
