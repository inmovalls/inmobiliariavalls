import getDataState from '../utils/getDataState'

const Filter = async () => {

    const makeButtons = (array, idWord) => {
        let buttons = ``;
        for (let i = 0; i < array.length; i++) {
            //Si este código se modifica con enter (retorno), el buscador se rompe porque busca el resultado interno y no encontraría el valor del array
            buttons += `
                <label class="Filter-${idWord} Filter-button-container"><input type="checkbox" class="Filter-button Filter-button-${idWord}" id="${idWord}-${i}"><span class="checkmark"><div class="check-checked"></div></span>${array[i]}</label>
            `;
        }
        return buttons
    }

    const states = await getDataState()

    let operations = []
    let prices = []
    let surfaces = []
    let rooms = []
    let toilets = []
    let types = []
    let subtypes = []
    let zones = []
    let characteristicsArrays = []
    let characteristics = []
    
    for (let i = 0; i < states.length; i++) {
        operations[i] = states[i].operacion.tipo_operacion
        prices[i] = states[i].precio
        surfaces[i] = states[i].superficie
        rooms[i] = states[i].habitaciones 
        toilets[i] = states[i].banos 
        types[i] = states[i].tipo_inmueble.nombre_tipo_inmueble
        subtypes[i] = states[i].subtipo_inmueble.nombre_subtipo_inmueble
        zones[i] = states[i].zona.nombre_zona
        characteristicsArrays[i] = states[i].caracteristicas
    }
    for (let i = 0; i < characteristicsArrays.length; i++) {
        for (let j = 0; j < characteristicsArrays[i].length; j++) {
            characteristics.push(characteristicsArrays[i][j].nombre_caracteristica)
        }
    }

    operations = new Set(operations.sort())
    prices = new Set(prices.sort())
    surfaces = new Set(surfaces.sort())
    rooms = new Set(rooms.sort())
    toilets = new Set(toilets.sort())
    types = new Set(types.sort())
    subtypes = new Set(subtypes.sort())
    zones = new Set(zones.sort())
    characteristics = new Set(characteristics.sort())

    operations = Array.from(operations)
    prices = Array.from(prices)
    surfaces = Array.from(surfaces)
    rooms = Array.from(rooms)
    toilets = Array.from(toilets)
    types = Array.from(types)
    subtypes = Array.from(subtypes)
    zones = Array.from(zones)
    characteristics = Array.from(characteristics)

    //Integers---------------------------------------
    // let pricesInt = []
    // for (let i = 0; i < prices.length; i++) {
    //     pricesInt[i] = parseInt(prices[i].replace(/\D/g, ''))
    // }
    // pricesInt = pricesInt.sort(function(a, b){return a-b})

    // let surfacesInt = []
    // for (let i = 0; i < surfaces.length; i++) {
    //     surfacesInt[i] = parseInt(surfaces[i].replace(/\D/g, '').replace(/2$/g, ''))
    // }

    // surfacesInt = surfacesInt.sort(function(a, b){return a-b})
    // let roomsInt = []
    // for (let i = 0; i < rooms.length; i++) {
    //     roomsInt[i] = parseInt(rooms[i].replace(/\D/g, ''))
    // }
    // roomsInt = roomsInt.sort(function(a, b){return a-b})

    // let toiletsInt = []
    // for (let i = 0; i < toilets.length; i++) {
    //     toiletsInt[i] = parseInt(toilets[i].replace(/\D/g, ''))
    // }
    // toiletsInt = toiletsInt.sort(function(a, b){return a-b})

    const view = `
        <div class="Filter-container" id="Filter-container-operacion">
            <div id="Operacion-buttons-container">
            <label class="Filter-operation Filter-button-container"><input type="checkbox" checked class="Filter-button Filter-button-operation" id="operation-1"><span class="checkmark"><div class="check-checked"></div></span>Comprar</label>
            <label class="Filter-operation Filter-button-container"><input type="checkbox" class="Filter-button Filter-button-operation" id="operation-0"><span class="checkmark"><div class="check-checked"></div></span>Alquilar</label>
            </div>
        </div>
        <button type="button" class="show-filter-button" id="show-filter-button">Filtros</button>
        <div class="Home-filter" id="Home-filter-menu">
            <div class="Filter-container">
                <span class="Filter-container-title">Habitaciones: </span>
                ${makeButtons(rooms, "room")}
            </div>
            <div class="Filter-container">
                <span class="Filter-container-title">Baños: </span>
                ${makeButtons(toilets, "toilet")}
            </div>
            <div class="Filter-container">
                <span class="Filter-container-title">Tipo: </span>
                ${makeButtons(types, "type")}
            </div>
            <div class="Filter-container">
                <span class="Filter-container-title">Subtipo: </span>
                ${makeButtons(subtypes, "subtype")}
            </div>
            <div class="Filter-container">
                <span class="Filter-container-title">Zona: </span>
                ${makeButtons(zones, "zone")}
            </div>
        </div>
    `;

    // <div class="Filter-container">
    //     <span class="Filter-container-title">Precio: </span>
    //     ${makeButtons(prices, "price")}<br>
    // </div>
    // <div class="Filter-container">
    //     <span class="Filter-container-title">Superficie: </span>
    //     ${makeButtons(surfaces, "surface")}<br>
    // </div>
    // <span>Características: </span>
    // ${makeButtons(characteristics, "characteristic")}
    
    return view
}

export default Filter