import getDataState from '../utils/getDataState'
import getHash from '../utils/getHash'

const Map = async () => {
    const state = await getDataState(getHash()[2])

    const view = `
        <div id="map">
            ${state.mapa_url}
        </div>
    `;
    return view
}


export default Map