// adds special assertions like toHaveTextContent
import {
  getByTestId,
  fireEvent,
} from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { newSpecPage } from '@stencil/core/testing';

import { colors, sizes } from '../../constants';

export * from './button';
import { Button } from './button';

async function initialSetup(attrs = [], options?) {
  const { testId = true } = options || { testId: true };

  const page = await newSpecPage({
    components: [Button],
    html: `<cross-button ${attrs.join(' ')} ${testId ? 'data-testid="test"' : ''}>Click me!</cross-button>`
  });

  return {
    page,
    button: testId && getByTestId(page.body, 'test'),
  } as any;
}

describe('cross-button', () => {
  it('builds', () => {
    expect(new Button()).toBeTruthy();
  });

  it('Snapshot', async () => {
    const { page } = await initialSetup([], { testId: false });

    expect(page.root).toMatchSnapshot();
  });

  it('disabled', async () => {
    const { button } = await initialSetup(['disabled']);

    expect(button.disabled).toBe(true);
  });

  it('full width', async () => {
    const { button } = await initialSetup(['full-width']);

    let classes = button.querySelector('button').className;

    expect(classes.includes('full-width')).toBe(true);
  });

  describe('Events', () => {
    it('click', async () => {
      const clickEvent = jest.fn();
      const { button } = await initialSetup();

      (button as any).onClick = clickEvent;
      button.click();

      expect(clickEvent).toBeCalled();
    });

    it('blur', async () => {
      const blurEvent = jest.fn();

      const { button } = await initialSetup();

      button.click();
      (button as any).onBlur = blurEvent;

      fireEvent.blur(button);

      expect(blurEvent).toBeCalled();
    });

    it('focus', async () => {
      const focusEvent = jest.fn();

      const { button } = await initialSetup();
      button.click();

      (button as any).onFocus = focusEvent;

      fireEvent.focus(button);

      expect(focusEvent).toBeCalled();
    });
  });

  describe('Colors', () => {
    it.each(
      colors.map(c => [c, c])
    )(`for color="%s" should have the class %s`, async (color) => {
      const { button } = await initialSetup([`color="${color}"`]);

      let classes = button.querySelector('button').className;

      expect(classes.includes(color)).toBe(true);
    });

    it('By default the color should be "primary"', async () => {
      const { button } = await initialSetup();

      const classes = button.querySelector('button').className;

      expect(classes.includes('primary')).toBe(true);
    });

    it('for color="unknown" color should throw an error', async () => {
      const color = 'unknown';

      try {
        await newSpecPage({
          components: [Button],
          html: `<cross-button color="${color}" data-testid="test">Click me!</cross-button>`
        });
      } catch (err) {
        expect(err.message).toBe(`Color "${color}" is not allowed. Please, use one of the following options: ${colors.join(', ')}`);
      }
    });
  });

  describe('UI\'s', () => {
    it.each(
      ['outline', 'square', 'circle', 'pill', 'active'].map(c => [c, c])
    )(`for attibute %s should have the class %s`, async (ui) => {
      const { button } = await initialSetup([ui]);

      const classes = button.querySelector('button').className;

      expect(classes.includes(ui)).toBe(true);
    });

    it('By default the UI should be "default"', async () => {
      const { button } = await initialSetup();

      const classes = button.querySelector('button').className;

      expect(classes.includes('default')).toBe(true);
    });
  });

  describe('Sizes', () => {
    it.each(
      sizes.map(c => [c, c])
    )(`for size="%s" should have the class %s`, async (size) => {
      const { button } = await initialSetup([`size="${size}"`]);

      let classes = button.querySelector('button').className;

      expect(classes.includes(size)).toBe(true);
    });

    it('By default the size should be "medium"', async () => {
      const { button } = await initialSetup();

      const classes = button.querySelector('button').className;

      expect(classes.includes('medium')).toBe(true);
    });

    it('for size="unknown" size should throw an error', async () => {
      try {
        await newSpecPage({
          components: [Button],
          html: `<cross-button size="unknown" data-testid="test">Click me!</cross-button>`
        });
      } catch (err) {
        expect(err.message).toBe(`Size "unknown" is not allowed. Please, use one of the following options: ${sizes.join(', ')}`);
      }
    });
  });
});
