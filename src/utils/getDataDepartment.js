import API from './API'

const getDataDepartment = async (id) => {
    const apiURL = id ? `${API.departamentos}${id}` : API.departamentos
    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al conseguir la API de departamentos', error.message)
    }
}

export default getDataDepartment