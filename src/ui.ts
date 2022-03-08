import "./style.css";
import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-plugin")
export class MyPlugin extends LitElement {
  static styles = css``;

  render() {
    return html`My Plugin`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-plugin": MyPlugin;
  }
}
