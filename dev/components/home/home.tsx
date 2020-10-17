import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'home.scss',
  shadow: true,
})
export class HomeComponent {
  onClick() {
    console.log('onClick');
  }

  render() {
    return (
      <div>
        <div>hola</div>
        <div class="w-full">
          <cross-button onClick={this.onClick} full-width>
            Enable
          </cross-button>
          <cross-button onClick={this.onClick} disabled>
            Disable
          </cross-button>
        </div>
      </div>
    );
  }
}
