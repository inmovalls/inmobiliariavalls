import getDataState from '../utils/getDataState'

const orderHomeScript = async () => {
    const homeItems = document.getElementById("Home-items")
    const states = await getDataState()
    if (homeItems) {
        for (let i = 0; i < states.length; i++) {
            if (states[i].disponible) {
                if (states[i].texto_1) {
                    document.getElementById(`container-${states[i].id}`).style.order = parseInt(`-${states[i].texto_1}`)
                }
            }
        }
    }
}

export default orderHomeScript