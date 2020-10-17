import { newE2EPage } from '@stencil/core/testing';

describe('cross-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cross-button></cross-button>');

    const element = await page.find('cross-button');
    expect(element).toHaveClass('hydrated');
  });
});

// describe('Check color property:', () => {
//   ['blue', 'red', 'orange', 'green', 'teal', 'indigo', 'purple', 'pink', 'yellow', 'gray'].forEach(color => {
//     it(`Color "${color}" is working`, async () => {
//       const page = await newE2EPage();
//       await page.setContent(`<cross-button color="${color}"></cross-button>`);

//       const button = await page.find('cross-button button');
//       const containsCorrectClasses = new RegExp(`(hover:)?bg-${color}-\\d{3}`, 'g').test(button.className);
//       expect(containsCorrectClasses).toBe(true);
//     });
//   });

//   it(`Can be disabled`, async () => {
//     const page = await newE2EPage();
//     await page.setContent(`<cross-button disabled="true"></cross-button>`);

//     const button = await page.find('cross-button button');
//     const containsCorrectClasses = new RegExp(`opacity-50 cursor-not-allowed`, 'g').test(button.className);
//     expect(containsCorrectClasses).toBe(true);
//   });
// })
