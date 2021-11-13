import { Component, h, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: false,
})
export class AppHome {
  @Prop() history: RouterHistory;

  constructor() {
    this.onClick = this.onClick.bind(this);
    this.goToWelcomePage = this.goToWelcomePage.bind(this);
  }

  private onClick() {
    console.log('onClick');
  }

  private goToWelcomePage() {
    this.history.push('/welcome');
  }

  render() {
    return (
      <div class="Home -mt-16">
        <section class="min-h-screen flex items-center justify-center flex-col relative">
          <div class="flex flex-col items-center justify-center flex-grow">
            <img
              src="../../assets/images/logo.svg"
              class="h-24"
              alt="CrossUI logo"
            />
            <h1 class="my-6 text-2xl">
              Agnostic components for any framework.
            </h1>

            <div class="flex mt-2">
              <div class="mx-2">
                <img
                  src="../../assets/images/cross-ui-logo-angular-hover.svg"
                  class="h-12"
                />
              </div>
              <div class="mx-2">
                <img
                  src="../../assets/images/cross-ui-logo-vue-hover.svg"
                  class="h-12"
                />
              </div>
              <div class="mx-2">
                <img
                  src="../../assets/images/cross-ui-logo-react-hover.svg"
                  class="h-12"
                />
              </div>
            </div>
            <div
              class="w-12 h-12 flex items-end justify-center absolute bottom-0 mb-12 cursor-pointer hover:opacity-50"
              onClick={this.goToWelcomePage}
            >
              <svg
                class="animate-bounce w-6 h-6 text-gray-900"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </section>

        <div class="flex p-4 min-h-screen pt-16">
          <app-menu class="w-64 pt-10" />

          <div class="Content w-full p-4">
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route
                  url="/"
                  component="app-introduction"
                  exact={true}
                />
              </stencil-route-switch>
            </stencil-router>
          </div>
        </div>
      </div>
    );
  }
}

/*
<stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
         */
