import API from './API'

const getDataState = async (id) => {

    if (id === "count") {
        const apiURL = `${API.inmuebles}${id}`
        try {
            const response = await fetch(apiURL)
            const data = await response.json()
            return data
        } catch (error) {
            console.error('Error al conseguir la API de inmuebles', error.message)
        }
    }

    const apiURL = id ? `${API.inmuebles}${id}` : API.inmuebles
    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al conseguir la API de inmuebles', error.message)
    }
}

export default getDataState