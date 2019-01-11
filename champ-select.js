import './champ-select-header.js';

class ChampSelect extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(ChampSelect.template.content.cloneNode(true));
    }

    connectedCallback() {
        this.insertAdjacentHTML('beforeend', `
        <champ-select-header
            blue-side="${this.getAttribute('blue-side')}"
            red-side="${this.getAttribute('red-side')}">
        </champ-select-header>
        `);
    }
}

ChampSelect.template = document.createElement('template');
ChampSelect.template.innerHTML = `
<style>
:host {
    width: 100vw;
    display: flex;
    flex-direction: column;
}
</style>
<slot></slot>
`;
customElements.define('champ-select', ChampSelect);