import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'cross-playground',
  // styleUrl: 'button.scss',
  shadow: true,
})
export class Playground {
  render() {
    return (
      <Host>
        <div class="flex flex-row">
          <cross-button full-width>holi</cross-button>
          <cross-button color="red" disabled>
            holi
          </cross-button>
        </div>
      </Host>
    );
  }
}
