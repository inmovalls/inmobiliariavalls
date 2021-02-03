import getDataDepartment from './getDataDepartment'
import getHash from './getHash'

//1-about 2-admin finc 3-gestion alq 4-jurid 5-seguros 6-inmobil

const getDepartment = async () => {
    let data = ''
    switch (getHash()[1]) {
        case 'about':
            data = await getDataDepartment(1)
            break
        case 'administracion_fincas':
            data = await getDataDepartment(2)
            break
        case 'gestion_alquileres':
            data = await getDataDepartment(3)
            break
        case 'departamento_juridico':
            data = await getDataDepartment(4)
            break
        case 'correduria_seguros':
            data = await getDataDepartment(5)
            break
        default:
            data = await getDataDepartment(6)
            // console.log("Te di los datos de la inmobiliaria")
            break
    }
    return data
}

export default getDepartment