class MyWelcomeDashboard extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                .dashboard {
                    padding: 1.5rem;
                    font-family: sans-serif;
                }
                .dashboard h2 {
                    color: #0078d4;
                }
            </style>
            <div class="dashboard">
                <h2>👋 Welcome to Umbraco 16!</h2>
                <p>This is a custom dashboard using plain JavaScript (Web Component).</p>
            </div>
        `;
    }
}

// Register custom element
customElements.define('my-welcome-dashboard', MyWelcomeDashboard);
