class ChampSelect extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(ChampSelect.template.content.cloneNode(true));
    }

    connectedCallback() {
        this.insertAdjacentHTML('beforeend', `
        <p>${this.getAttribute('blue-side')}</p>
        <p>${this.getAttribute('red-side')}</p>
        `);
    }
}

ChampSelect.template = document.createElement('template');
ChampSelect.template.innerHTML = `<slot></slot>`;
customElements.define('champ-select', ChampSelect);