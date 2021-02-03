import ContactBox from '../templates/ContactBox'
import getDepartment from '../utils/getDepartment'

const Info = async () => {

    const pageData = await getDepartment()

    const view = `
        <div class=Info-page>
            <div alt="Foto de portada" class="Info-portrait" style="background-image: url(${pageData.url_imagen_fondo})"></div>
            <h2 class="Info-title">${pageData.titulo}</h2>
            <div class="Info-content">${pageData.descripcion}</div>
            <div class="Info-image-contact">
                <img src="${pageData.url_imagen_principal}" alt="Una imagen característica" class="Info-image">
                ${await ContactBox()}
            </div>
        </div>
    `;
    return view
}

export default Info