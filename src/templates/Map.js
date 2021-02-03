import getDataState from '../utils/getDataState'
import getHash from '../utils/getHash'

const Map = async () => {
    const state = await getDataState(getHash()[2])

    const view = `
        <div id="map">
            ${state.maps_url}
        </div>
    `;
    return view
}


export default Map