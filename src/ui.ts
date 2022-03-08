import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { pluginWidth, pluginHeight } from "../src/constants";

@customElement("my-plugin")
export class MyPlugin extends LitElement {
  static styles = css`
    main {
      border: 1px solid red;
      --width: ${pluginWidth}px;
      --height: ${pluginHeight - 1}px;
      width: calc(var(--width) - 2px);
      height: calc(var(--height) - 2px);
    }
  `;

  render() {
    return html`<main>
      <h1>Hello, world!</h1>
    </main>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-plugin": MyPlugin;
  }
}
