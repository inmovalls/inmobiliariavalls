import API from './API'

const getDataType = async () => {
    const apiURL = API.tipos
    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al conseguir la API de tipos', error.message)
    }
}

export default getDataType