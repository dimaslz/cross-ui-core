import { newSpecPage } from '@stencil/core/testing';
import { InputText } from '../input-text';

describe('input-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputText],
      html: `<input-text></input-text>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
