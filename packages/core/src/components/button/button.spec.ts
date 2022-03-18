import { newSpecPage } from '@stencil/core/testing';

import { COLORS, SIZES } from '../../constants';

export * from './button';
import { Button } from './button';

async function initialSetup(attrs = [], options?) {
  const { testId = true } = options || { testId: true };

  const view = await newSpecPage({
    components: [Button],
    html: `<cross-button ${attrs.join(' ')} ${testId ? 'data-testid="test"' : ''}>Click me!</cross-button>`
  });

  return {
    view,
    component: view.root,
  } as any;
}

describe('cross-button', () => {
  it('builds', () => {
    expect(new Button()).toBeTruthy();
  });

  // it('Snapshot', async () => {
  //   const { page } = await initialSetup([], { testId: false });

  //   expect(page.root).toMatchSnapshot();
  // });

  it('disabled', async () => {
    const { component } = await initialSetup(['disabled']);

    expect(component.disabled).toBe(true);
  });

  it('full width', async () => {
    const { component } = await initialSetup(['full-width']);

    let classes = component.querySelector('button').className;

    expect(classes.includes('full-width')).toBe(true);
  });

  describe('Events', () => {
    describe('When the component is enable', () => {
      it('click event should be triggered', async () => {
        const clickEvent = jest.fn();
        const { component } = await initialSetup();

        (component as any).onClick = clickEvent;
        component.click();

        expect(clickEvent).toBeCalled();
      });

      it('blur event should be triggered', async () => {
        const blurEvent = jest.fn();

        const { component } = await initialSetup();

        component.dispatchEvent(new Event("focus", { bubbles: true }));

        (component as any).onBlur = blurEvent;

        component.dispatchEvent(new Event("blur", { bubbles: true }));

        expect(blurEvent).toBeCalled();
      });

      it('focus event should be triggered', async () => {
        const focusEvent = jest.fn();

        const { component } = await initialSetup();

        (component as any).onFocus = focusEvent;

        component.dispatchEvent(new Event("focus", { bubbles: true }));

        expect(focusEvent).toBeCalled();
      });
    });

    describe('When the component is disable', () => {
      it('click event should NOT be triggered', async () => {
        const clickEvent = jest.fn();
        const { component } = await initialSetup(['disabled']);

        (component as any).onClick = clickEvent;
        component.click();

        expect(clickEvent).not.toBeCalled();
      });

      it('blur event should NOT be triggered', async () => {
        const blurEvent = jest.fn();

        const { component } = await initialSetup(['disabled']);

        component.dispatchEvent(new Event("focus", { bubbles: true }));

        (component as any).onBlur = blurEvent;

        component.dispatchEvent(new Event("blur", { bubbles: true }));

        expect(blurEvent).not.toBeCalled();
      });

      it('focus event should NOT be triggered', async () => {
        const focusEvent = jest.fn();

        const { component } = await initialSetup(['disabled']);

        (component as any).onFocus = focusEvent;

        component.dispatchEvent(new Event("focus", { bubbles: true }));

        expect(focusEvent).not.toBeCalled();
      });
    });
  });

  describe('Colors', () => {
    it.each(
      COLORS.map(c => [c, c])
    )(`for color="%s" should have the class %s`, async (color) => {
      const { component } = await initialSetup([`color="${color}"`]);

      let classes = component.querySelector('button').className;

      expect(classes.includes(color)).toBe(true);
    });

    it('By default the color should be "primary"', async () => {
      const { component } = await initialSetup();

      const classes = component.querySelector('button').className;

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
        expect(err.message).toBe(`[CROSS-UI]: Color "${color}" is not allowed. Please, use one of the following options: ${COLORS.join(', ')}`);
      }
    });
  });

  describe('UI\'s', () => {
    it.each(
      ['outline', 'square', 'circle', 'pill', 'active'].map(c => [c, c])
    )(`for attibute %s should have the class %s`, async (ui) => {
      const { component } = await initialSetup([ui]);

      const classes = component.querySelector('button').className;

      expect(classes.includes(ui)).toBe(true);
    });

    it('By default the UI should be "default"', async () => {
      const { component } = await initialSetup();

      const classes = component.querySelector('button').className;

      expect(classes.includes('default')).toBe(true);
    });
  });

  describe('Sizes', () => {
    it.each(
      SIZES.map(c => [c, c])
    )(`for size="%s" should have the class %s`, async (size) => {
      const { component } = await initialSetup([`size="${size}"`]);

      let classes = component.querySelector('button').className;

      expect(classes.includes(size)).toBe(true);
    });

    it('By default the size should be "medium"', async () => {
      const { component } = await initialSetup();

      const classes = component.querySelector('button').className;

      expect(classes.includes('medium')).toBe(true);
    });

    it('for size="unknown" size should throw an error', async () => {
      try {
        await newSpecPage({
          components: [Button],
          html: `<cross-button size="unknown" data-testid="test">Click me!</cross-button>`
        });
      } catch (err) {
        expect(err.message).toBe(`[CROSS-UI]: Size "unknown" is not allowed. Please, use one of the following options: ${SIZES.join(', ')}`);
      }
    });
  });
});
