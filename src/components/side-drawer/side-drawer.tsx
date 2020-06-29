import { Component, ComponentInterface, h, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true,
})
export class SideDrawer implements ComponentInterface {
  // @State() showContactInfo: boolean;
  @State() showContactInfo = false;
  @Prop() menu: string;
  @Prop({reflect: true, mutable: true}) opened: boolean;

  onCloseDrawer() {
    this.opened = false;
  }

  // add onClick to sub-navigation
  onContentChange(content: string) {
    this.showContactInfo = content === 'contact';
  }

  @Method()
  open() {
    this.opened = true;
  }

  render() {
    let mainContent = <slot />;
    if (this.showContactInfo) {
      mainContent = (
        <div id="contact-information">
          <h2>Contact Information</h2>
          <p>You can reach us via phone or email.</p>
          <ul>
            <li>Phone: 111-222-3333</li>
            <li>E-Mail:
              <a href="mailto:something@something.com">something@something.com</a>
            </li>
          </ul>
        </div>
      )
    }

    return [
      <div class="backdrop" onClick={this.onCloseDrawer.bind(this)}></div>,
      <aside>
        <header>
          <h1>{this.menu}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>
        </header>
        <section id="tabs">
          <button
            class={!this.showContactInfo ? 'active' : ''}
            onClick={this.onContentChange.bind(this, 'nav')}>
              Navigation
          </button>
          <button
            class={this.showContactInfo ? 'active' : ''}
            onClick={this.onContentChange.bind(this, 'contact')}>
              Contact
          </button>
        </section>
        <main>
          {mainContent}
        </main>
      </aside>
    ];
  }
}
