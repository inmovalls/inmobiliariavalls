import Carousel from '../templates/Carousel'
import ContactBox from '../templates/ContactBox'
import Map from '../templates/Map'
import getDataState from '../utils/getDataState'

const getStateHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[2]  //['','inmueble','id','']

const State = async () => {

    const id = getStateHash()
    const state = await getDataState(id)

    const images_url = [
        state.imagen_url_1,
        state.imagen_url_2,
        state.imagen_url_3,
        state.imagen_url_4,
        state.imagen_url_5,
        state.imagen_url_6,
        state.imagen_url_7,
        state.imagen_url_8,
        state.imagen_url_9,
        state.imagen_url_10,
        state.imagen_url_11,
        state.imagen_url_12,
        state.imagen_url_13,
        state.imagen_url_14,
        state.imagen_url_15,
        state.imagen_url_16,
        state.imagen_url_17,
        state.imagen_url_18,
        state.imagen_url_19,
        state.imagen_url_20,
    ]

    //clean null values in images

    let images = []

    for (let i = 0; i < images_url.length; i++) {
        if (images_url[i]) {
            images.push(images_url[i])
        }
    }

    //resto de valores, desestructurados

    const {
        caracteristicas,
        definicion,
        fecha_publicacion,
        habitaciones,
        banos,
        localizacion,
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

    const tiempo = fecha_publicacion.split("T")
    const fecha = tiempo[0].split("-")
    const day = fecha[2]
    const month = fecha[1]
    const year = fecha[0]

    //desplegamos

    const view = `
        <div class="State-page">
            <h2>Título: ${titulo}</h2>
            ${Carousel(images)}
            <div class="State-page-info" id="State-page-info-1">
                <p>
                    ${nombre_tipo_inmueble}
                    ${nombre_subtipo_inmueble}
                    para ${tipo_operacion}
                </p>
                <p>
                    ${nombre_zona}<br>
                </p>
                <p>
                    ${precio}<br>
                    ${superficie}
                </p>
                <p>
                    ${habitaciones} Habitaciones y ${banos} Baños
                </p>
                <p>Publicado ${day} ${month} ${year}</p>
            </div>
            <div class="State-page-info" id="State-page-info-3">
                <p><b>Descripción:</b></p>
                <p>${definicion}</p>
            </div>
            <div id="info2-contact">
                <div class="State-page-info" id="State-page-info-2">
                    <p><b>Características:</b></p>
                    <p>${lista_caracteristicas}</p>
                </div>
                ${ContactBox()}
            </div>
            ${Map()}
        </div>
    `;
    
    return view
}

export default State