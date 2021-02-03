const Header = () => {
    const view = `
        <div class="Header-logo">
            <a href="#/home">
                <img src="https://i.imgur.com/wSITcOb.png" alt="Valls Logo">
            </a>
        </div>
        <div class="Header-nav-container">
            <nav class="Header-nav">
                <div type="button" id="Header-nav-button"></div>
                <a class="Header-nav-item" href="#/home">
                    <span>Inicio</span>
                </a>
                <a class="Header-nav-item" href="#/about">
                    <span>Sobre Nosotros</span>
                </a>
                <a class="Header-nav-item" href="#/administracion_fincas">
                    <span>Administración de Fincas</span>
                </a>
                <a class="Header-nav-item" href="#/gestion_alquileres">
                    <span>Gestión de Alquileres</span>
                </a>
                <a class="Header-nav-item" href="#/departamento_juridico">
                    <span>Dept. Jurídico</span>
                </a>
                <a class="Header-nav-item" href="#/correduria_seguros">
                    <span>Seguros</span>
                </a>
            </nav>
        <div>
    `;
    return view
}

export default Header