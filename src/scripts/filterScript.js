import getDataState from '../utils/getDataState'

const filterScript = async () => {
    const states = await getDataState()
    const checkboxes = document.getElementsByClassName("Filter-button")

    const operationBox = document.getElementsByClassName("Filter-operation")
    const operationButton = document.getElementsByClassName("Filter-button-operation")
    const priceBox = document.getElementsByClassName("Filter-price")
    const priceButton = document.getElementsByClassName("Filter-button-price")
    const surfaceBox = document.getElementsByClassName("Filter-surface")
    const surfaceButton = document.getElementsByClassName("Filter-button-surface")
    const roomBox = document.getElementsByClassName("Filter-room")
    const roomButton = document.getElementsByClassName("Filter-button-room")
    const toiletBox = document.getElementsByClassName("Filter-toilet")
    const toiletButton = document.getElementsByClassName("Filter-button-toilet")
    const typeBox = document.getElementsByClassName("Filter-type")
    const typeButton = document.getElementsByClassName("Filter-button-type")
    const subtypeBox = document.getElementsByClassName("Filter-subtype")
    const subtypeButton = document.getElementsByClassName("Filter-button-subtype")
    const zoneBox = document.getElementsByClassName("Filter-zone")
    const zoneButton = document.getElementsByClassName("Filter-button-zone")
    const characteristicBox = document.getElementsByClassName("Filter-characteristic")
    const characteristicButton = document.getElementsByClassName("Filter-button-characteristic")

    const hideState = (id) => {
        let sta = document.getElementById(`container-${id}`)
        sta.style.display = "none"
    }
    const showState = (id) => {
        let sta = document.getElementById(`container-${id}`)
        sta.style.display = "flex"
    }

    const filterProp = (statId, prop, box, button) => {
        let anyTrue = false
        for (let i = 0; i < button.length; i++) {
            anyTrue += button[i].checked
        }
        if (anyTrue) {
            let anyFits = false
            for (let i = 0; i < button.length; i++) {
                anyFits += (button[i].checked && box[i].textContent === prop)
            }
            if (anyFits) {
                return 1
            } else if (!anyFits){
                return 0
            }
        } else if (!anyTrue) {
            return 1
        }
    }

    const checkStatus = async (index) => {
        let suma = (
            filterProp(states[index].id, states[index].operacion.tipo_operacion, operationBox, operationButton)
            +
            filterProp(states[index].id, states[index].precio, priceBox, priceButton)
            +
            filterProp(states[index].id, states[index].superficie, surfaceBox, surfaceButton)
            +
            filterProp(states[index].id, states[index].habitaciones, roomBox, roomButton)
            +
            filterProp(states[index].id, states[index].banos, toiletBox, toiletButton)
            +
            filterProp(states[index].id, states[index].tipo_inmueble.nombre_tipo_inmueble, typeBox, typeButton)
            +
            filterProp(states[index].id, states[index].subtipo_inmueble.nombre_subtipo_inmueble, subtypeBox, subtypeButton)
            +
            filterProp(states[index].id, states[index].zona.nombre_zona, zoneBox, zoneButton)
        )
        if (suma === 8) {
            showState(states[index].id)
        } else {
            hideState(states[index].id)
        }
    }
    
    const checkAll = () => {
        for ( let i = 0; i < states.length; i++) {
            if (states[i].disponible) {
                checkStatus(i)
            }
        }
    } 
    
    // todos los botones de addEventListeners
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener("click", checkAll)   
    }
}

export default filterScript