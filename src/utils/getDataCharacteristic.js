import API from './API'

const getDataCharacteristic = async () => {
    const apiURL = API.caracteristicas
    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al conseguir la API de características', error.message)
    }
}

export default getDataOperation