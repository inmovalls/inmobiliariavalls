import getDataDepartment from './getDataDepartment'
import getHash from './getHash'

//0-about 1-admin finc 2-gestion alq 3-jurid 4-seguros 5-inmobil

const getDepartment = async () => {
    const departments = await getDataDepartment()

    let data = ''
    switch (getHash()[1]) {
        case 'about':
            data = await getDataDepartment(departments[0].id)
            break
        case 'administracion_fincas':
            data = await getDataDepartment(departments[1].id)
            break
        case 'gestion_alquileres':
            data = await getDataDepartment(departments[2].id)
            break
        case 'departamento_juridico':
            data = await getDataDepartment(departments[3].id)
            break
        case 'correduria_seguros':
            data = await getDataDepartment(departments[4].id)
            break
        default:
            data = await getDataDepartment(departments[5].id)
            // console.log("Te di los datos de la inmobiliaria")
            break
    }
    return data
}

export default getDepartment