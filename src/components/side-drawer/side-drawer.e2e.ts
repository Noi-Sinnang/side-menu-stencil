import { newE2EPage } from '@stencil/core/testing';

describe('side-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<side-drawer></side-drawer>');

    const element = await page.find('side-drawer');
    expect(element).toHaveClass('hydrated');
  });
});
