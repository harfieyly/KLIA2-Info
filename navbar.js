class NavbarComponent extends HTMLElement {
    connectedCallback() {
        // Kesan lokasi fail HTML semasa
        const isRoot = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
        const prefix = isRoot ? '.' : '..';

        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark shadow-sm fixed-top custom-navbar" style="background-color: #121212;">
            <div class="container">
                <a class="navbar-brand fw-bold" href="${prefix}/index.html">
                    <span style="color: #7b12ff;">klia2</span>.info
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="${prefix}/index.html">Home</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Travel</a>
                            <ul class="dropdown-menu dropdown-menu-dark" style="background-color: #262626;">
                                <li><a class="dropdown-item" href="${prefix}/Airport_Page/Airport.html">Airport</a></li>
                                <li><a class="dropdown-item" href="${prefix}/Airline_Page/airlines.html">Airline</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Transportation</a>
                            <ul class="dropdown-menu dropdown-menu-dark" style="background-color: #262626;">
                                <li><a class="dropdown-item" href="${prefix}/Public_Page/public.html">Public Transportation</a></li>
                                <li><a class="dropdown-item" href="${prefix}/Expressway_Page/expressways.html">Expressways</a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="${prefix}/Hotel_Page/Hotel.html">Hotel</a></li>
                        <li class="nav-item"><a class="nav-link" href="${prefix}/Attraction_Page/Attraction.html">Attraction</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        `;
    }
}
customElements.define('main-navbar', NavbarComponent);