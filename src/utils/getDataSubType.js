import API from './API'

const getDataSubType = async () => {
    const apiURL = API.subtipos
    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al conseguir la API de subtipos', error.message)
    }
}

export default getDataSubType