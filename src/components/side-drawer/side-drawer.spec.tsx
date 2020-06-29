import { newSpecPage } from '@stencil/core/testing';
import { SideDrawer } from './side-drawer';

describe('side-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SideDrawer],
      html: `<side-drawer></side-drawer>`,
    });
    expect(page.root).toEqualHtml(`
      <side-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </side-drawer>
    `);
  });
});
