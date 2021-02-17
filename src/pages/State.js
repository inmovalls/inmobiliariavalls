import Carousel from '../templates/Carousel'
import ContactBox from '../templates/ContactBox'
import Map from '../templates/Map'
import getDataState from '../utils/getDataState'

const getStateHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[2]  //['','inmueble','id','']

const State = async () => {

    const id = getStateHash()
    const state = await getDataState(id)

    // Regex para conseguir las urls del texto y dejarlas en una lista
    const exp = /https?:\/\/[\w\-\.]+\.\w{2,6}\/?\S*/gi
    const imgUrls = state.imagenes_url.match(exp)

    //resto de valores, desestructurados

    const {
        referencia,
        caracteristicas,
        descripcion,
        fecha_publicacion,
        habitaciones,
        banos,
        operacion: {
            tipo_operacion
        },
        precio,
        superficie,
        tipo_inmueble: {
            nombre_tipo_inmueble
        },
        subtipo_inmueble: {
            nombre_subtipo_inmueble
        },
        zona: {
            nombre_zona
        },
        subzona: {
            nombre_subzona
        },
        titulo
    } = state

    let lista_caracteristicas = ''
    for (let i = 0; i < caracteristicas.length; i++) {
        let { nombre_caracteristica } = caracteristicas[i]
        if (i === caracteristicas.length - 1) {
            lista_caracteristicas += nombre_caracteristica
        } else {
            lista_caracteristicas += nombre_caracteristica + '<br>'
        }
    }

    //desplegamos


    const view = `
        <div class="State-page">
            <h2>${titulo}</h2>
            ${Carousel(imgUrls)}
            <div class="State-page-info" id="State-page-info-1">
                <p>
                    ${nombre_tipo_inmueble}
                    ${nombre_subtipo_inmueble}
                    para ${tipo_operacion}
                </p>
                <p>
                    ${nombre_zona}, ${nombre_subzona}<br>
                </p>
                <p>
                    ${precio.toLocaleString()} €<br>
                    ${superficie.toLocaleString()} m²
                </p>
                <p>
                    ${habitaciones} Habitaciones y ${banos} Baños
                </p>
                <p>Referencia: ${referencia}</p>
            </div>
            <div class="State-page-info" id="State-page-info-3">
                <p><b>Descripción:</b></p>
                <p>${descripcion}</p>
            </div>
            <div id="info2-contact">
                <div class="State-page-info" id="State-page-info-2">
                    <p><b>Características:</b></p>
                    <p>${lista_caracteristicas}</p>
                </div>
                ${await ContactBox()}
            </div>
            ${await Map()}
        </div>
    `;
    
    return view
}

export default State