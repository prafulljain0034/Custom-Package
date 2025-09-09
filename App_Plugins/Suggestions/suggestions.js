// App_Plugins/Suggestions/suggestions.js
import { UmbChangeEvent } from '@umbraco-cms/backoffice/event';
import { css, html, LitElement } from '@umbraco-cms/backoffice/external/lit';
import { UmbTextStyles } from '@umbraco-cms/backoffice/style';

// Define custom element
export class MySuggestionsPropertyEditorUIElement extends LitElement {
    static get properties() {
        return {
            value: { type: String }
        };
    }

    constructor() {
        super();
        this.value = '';
        this._suggestions = [
            'You should take a break',
            'I suggest that you visit the Eiffel Tower',
            'How about starting a book club today or this week?',
            'Are you hungry?'
        ];
    }

    // Input handler: update value and notify Umbraco
    #onInput = (e) => {
        this.value = e.target.value || '';
        this.dispatchEvent(new UmbChangeEvent());
    };

    // Suggestion button: pick a random suggestion and notify
    #onSuggestion = () => {
        const randomIndex = (this._suggestions.length * Math.random()) | 0;
        this.value = this._suggestions[randomIndex];
        this.dispatchEvent(new UmbChangeEvent());
    };

    render() {
        return html`
      <uui-input
        id="suggestion-input"
        class="element"
        label="text input"
        .value=${this.value || ''}
        @input=${this.#onInput}>
      </uui-input>

      <div id="wrapper">
        <uui-button
          id="suggestion-button"
          class="element"
          look="primary"
          label="give me suggestions"
          @click=${this.#onSuggestion}>
          Give me suggestions!
        </uui-button>

        <uui-button
          id="suggestion-trimmer"
          class="element"
          look="outline"
          label="Trim text"
          @click=${() => { this.value = (this.value || '').trim(); this.dispatchEvent(new UmbChangeEvent()); }}>
          Trim text
        </uui-button>
      </div>
    `;
    }

    static get styles() {
        return [
            UmbTextStyles,
            css`
        #wrapper {
          margin-top: 10px;
          display: flex;
          gap: 10px;
        }
        .element {
          width: 100%;
        }
      `
        ];
    }
}

// Register the element name referenced by elementName in the manifest
customElements.define('my-suggestions-property-editor-ui', MySuggestionsPropertyEditorUIElement);





//class SuperAwesomePluginEditor extends HTMLElement {
//    connectedCallback() {
//        this.innerHTML = `
//            <style>
//                .sap a {
//                    cursor: pointer;
//                    color: #0078d4;
//                    text-decoration: underline;
//                    display: inline-block;
//                    margin-top: 10px;
//                }
//            </style>
//            <div class="sap">
//                <h2>Super Awesome Plugin</h2>
//                <p id="valueDisplay"></p>
//                <input type="text" id="inputField" />
//                <br/>
//                <a id="complimentBtn">Get compliment</a>
//            </div>
//        `;

//        const input = this.querySelector('#inputField');
//        const output = this.querySelector('#valueDisplay');
//        const btn = this.querySelector('#complimentBtn');

//        // Set initial value
//        if (this._value) {
//            input.value = this._value;
//            output.textContent = this._value;
//        }

//        input.addEventListener('input', () => {
//            this._value = input.value;
//            output.textContent = this._value;

//            this.dispatchEvent(
//                new CustomEvent('property-value-change', {
//                    bubbles: true,
//                    composed: true,
//                    detail: { value: this._value }
//                })
//            );
//        });

//        btn.addEventListener('click', () => {
//            if (this._config?.isEnabled === true || this._config?.isEnabled === "1") {
//                const compliment = "Have a good day!";
//                input.value = compliment;
//                output.textContent = compliment;
//                this._value = compliment;

//                this.dispatchEvent(
//                    new CustomEvent('property-value-change', {
//                        bubbles: true,
//                        composed: true,
//                        detail: { value: this._value }
//                    })
//                );
//            } else {
//                alert("Compliment feature is disabled in config.");
//            }
//        });
//    }

//    set value(val) {
//        this._value = val || "";
//        const input = this.querySelector('#inputField');
//        const output = this.querySelector('#valueDisplay');
//        if (input) input.value = this._value;
//        if (output) output.textContent = this._value;
//    }

//    get value() {
//        return this._value || "";
//    }

//    set config(val) {
//        this._config = val;
//    }

//    get config() {
//        return this._config;
//    }
//}

//customElements.define('super-awesome-plugin-editor', SuperAwesomePluginEditor);
