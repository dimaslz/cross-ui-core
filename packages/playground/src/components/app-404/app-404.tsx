import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-404',
  styleUrl: 'app-404.scss',
  shadow: true,
})
export class App404 {
  render() {
    return (
      <div class="min-h-screen -mt-16 flex items-center justify-center flex-col">
        <h1 class="text-4xl">404 not found</h1>
        <stencil-route-link url="/" class="pt-8 hover:opacity-75">
          back to home
        </stencil-route-link>
      </div>
    );
  }
}
