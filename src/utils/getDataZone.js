import API from './API'

const getDataZone = async () => {
    const apiURL = API.zonas
    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al conseguir la API de inmuebles', error.message)
    }
}

export default getDataZone