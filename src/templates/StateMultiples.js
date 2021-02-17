import StateItem from '../templates/StateItem'
import getDataState from '../utils/getDataState'

const StateMultiples = async() => {
    const count = await getDataState("count")
    const states = await getDataState()
    
    let view = ''

    for (let i=0; i < count; i++) {
        if (states[i].disponible) {
            let v = `
            ${await StateItem(states[i].id)}
            `;
            view += v
        }
    }

    return view
}

export default StateMultiples