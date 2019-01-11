import { teams } from './data.js'

class ChampSelectHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(ChampSelectHeader.template.content.cloneNode(true));
        this.redTeam = teams[this.getAttribute('red-side')];
        this.blueTeam = teams[this.getAttribute('blue-side')];
    }

    connectedCallback() {
        this.insertAdjacentHTML('beforeend', `
        <div class="blue-side">
            <p class="team-name">${this.blueTeam.name}</p>
            <p class="team-record">(${this.blueTeam.record.wins} - ${this.blueTeam.record.losses})</p>
            <p class="team-coach">Coach: ${this.blueTeam.coach}</p>
        </div>
        <div class="clock">
            <p>CLOCK</p>
        </div>
        <div class="red-side">
            <p class="team-name">${this.redTeam.name}</p>
            <p class="team-record">(${this.redTeam.record.wins} - ${this.redTeam.record.losses})</p>
            <p class="team-coach">Coach: ${this.redTeam.coach}</p>
        </div >
    `);
    }
}

ChampSelectHeader.template = document.createElement('template');
ChampSelectHeader.template.innerHTML = `
<style>
:host {
    display: flex;
    justify-content: space-between;
}
</style>

<slot></slot>
`;
customElements.define('champ-select-header', ChampSelectHeader);