import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

describe('cross-button', () => {
  it('builds', () => {
    expect(new Button()).toBeTruthy();
  });
  
  it('Snapshot', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<cross-button>Click me!</cross-button>`
    });

    expect(page.root).toMatchSnapshot();
  });
});
