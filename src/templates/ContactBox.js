import getDepartment from '../utils/getDepartment'

const ContactBox = async () => {

    let pageData = await getDepartment()

    if (!pageData.telefono2) {
        pageData.telefono2 = ''
    }
    if (!pageData.email2) {
        pageData.email2 = ''
    }

    const view = `
        <div class="Contact-container">
            <h3>Contáctanos</h3><hr>
            <div class="Contact-container-content">
                <h4>${pageData.nombre_departamente}</h4>
                <span>${pageData.telefono}</span>
                <span>${pageData.telefono2}</span>
                <a href='mailto:${pageData.email}'>${pageData.email}</a>
                <a href='mailto:${pageData.email2}'>${pageData.email2}</a>
            </div>
        </div>
    `;
    return view
}

export default ContactBox
