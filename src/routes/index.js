import Home from '../pages/Home'
import Error404 from '../pages/Error404'
import State from '../pages/State'
import Info from '../pages/Info'

import Header from '../templates/Header'
import Footer from '../templates/Footer'

import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
    '/': Home,
    '/home': Home,
    '/inmueble': State,
    '/inmueble/:id': State,
    // '/mapa': Maps,
    '/about': Info,
    '/administracion_fincas': Info,
    '/gestion_alquileres': Info,
    '/departamento_juridico': Info,
    '/correduria_seguros': Info,
    '/contact': Info,
}

const router = async () => {
    const header = null || document.getElementById('header')
    const main = null || document.getElementById('main')
    const footer = null || document.getElementById('footer')

    header.innerHTML = await Header()

    let hash = getHash()
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route] : Error404
    main.innerHTML = await render()

    footer.innerHTML = await Footer()
}

export default router