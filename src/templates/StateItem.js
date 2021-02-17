import getDataState from '../utils/getDataState'

const StateItem = async (id) => {
    const state = await getDataState(id)

    const{ caracteristicas } = state
    let listaCaracteristicas = ''
    for (let i = 0; i < caracteristicas.length; i++) {
        listaCaracteristicas += caracteristicas[i].nombre_caracteristica + ' '
    }

    // Regex para conseguir las urls del texto y dejarlas en una lista
    const exp = /https?:\/\/[\w\-\.]+\.\w{2,6}\/?\S*/gi
    const imgUrls = state.imagenes_url.match(exp)

    const view = `
        <a href="#/inmueble/${state.id}" id="container-${state.id}" class="StateItem-container">
            <h3>${state.titulo}</h3>
            <figure class="StateItem-image">
                <img src="${imgUrls[0]}" alt="Inmueble">
            </figure>
            <div class="StateItem-properties">
                <p>
                    <span>${state.tipo_inmueble.nombre_tipo_inmueble}</span>
                    para <span>${state.operacion.tipo_operacion}</span>
                </p>
                <p>
                    <span>${state.precio.toLocaleString()} €</span>
                    &nbsp;
                    <span>${state.superficie.toLocaleString()} m²</span>
                </p>
                <span>${state.habitaciones} habitaciones</span>
                <span>${state.zona.nombre_zona}, ${state.subzona.nombre_subzona}</span>
                <span>Ref: ${state.referencia}</span>
            </div>
        </a>
    `;
    return view
}

export default StateItem