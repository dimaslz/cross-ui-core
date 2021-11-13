import { newE2EPage } from '@stencil/core/testing';

describe('input-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-text></input-text>');

    const element = await page.find('input-text');
    expect(element).toHaveClass('hydrated');
  });
});
