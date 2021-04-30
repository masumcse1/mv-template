import { LitElement, html, css } from "lit-element";
import { matchError } from "mv-form-utils";
import { toBoolean } from "utils";
import "mv-button";
import "mv-checkbox";
import "mv-font-awesome";
import "mv-form-field";
export default class BooleanField extends LitElement {
  static get properties() {
    return {
      field: { type: Object, attribute: false, reflect: true },
      errors: { type: Array, attribute: false, reflect: true },
      value: { type: Boolean, attribute: true, reflect: true },
      removable: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      :host {
        --button-size: 24px;
      }
      mv-button {
        --mv-button-margin: 0 0 0 5px;
        --mv-button-padding: 3px 4px;
        --mv-button-min-width: var(--button-size);
      }
      .field {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .input {
        width: calc(100% - var(--button-size));
        padding-top: 3px;
      }
      .button {
        height: var(--button-size);
      }
    `;
  }

  constructor() {
    super();
    this.field = {};
    this.value = false;
  }

  render() {
    const { code, label } = this.field || {};
    const value = toBoolean(this.value);
    return html`
      <mv-form-field
        name="${code}"
        label-position="none"
        .error="${matchError(this.errors, code)}"
      >
        <div slot="field" class="field">
          <div class="input">
            <mv-checkbox
              slot="field"
              ?checked="${value}"
              @click-checkbox="${this.change}"
              label="${label}"
            ></mv-checkbox>
          </div>
          <div class="button">
            <mv-button
              type="outline"
              button-style="error"
              class="small-button"
              .visible="${!!this.removable}"
              @button-clicked="${this.remove}"
            >
              <mv-fa icon="minus"></mv-fa>
            </mv-button>
          </div>
        </div>
      </mv-form-field>
    `;
  }

  change = (originalEvent) => {
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { value: !this.value, originalEvent },
      })
    );
  };

  remove = (originalEvent) => {
    this.dispatchEvent(
      new CustomEvent("remove", { detail: { originalEvent } })
    );
  };
}

customElements.define("boolean-field", BooleanField);
