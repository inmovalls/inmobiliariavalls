import API from './API'

const getDataOperation = async () => {
    const apiURL = API.operaciones
    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al conseguir la API de inmuebles', error.message)
    }
}

export default getDataOperation