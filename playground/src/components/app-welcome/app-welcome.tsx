import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-welcome',
  styleUrl: 'app-welcome.scss',
  shadow: true,
})
export class AppWelcome {
  render() {
    return (
      <div class="Welcome flex p-4">
        <app-menu class="w-64 pt-10" />

        <div class="Welcome__content w-full">
          <app-introduction />
        </div>
      </div>
    );
  }
}
