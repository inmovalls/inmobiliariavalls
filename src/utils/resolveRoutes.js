const resolveRoutes = (route) => {
    //Validación de las rutas
    //servirá al haber rutas dinámicas
    let r = route[1]

    switch (r) {
        case '':
            return '/'
        case undefined:
            return '/'
        default:
            return `/${r}` //devolvemos la ruta

    }
}

export default resolveRoutes
