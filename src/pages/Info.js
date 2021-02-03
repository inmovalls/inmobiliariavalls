import ContactBox from '../templates/ContactBox'

const Info = () => {
    const view = `
        <div class=Info-page>
            <div alt="Foto de portada" class="Info-portrait" style="background-image: url(https://i.imgur.com/nOtEHBZ.jpg)"></div>
            <h2 class="Info-title">Título</h2>
            <p class="Info-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure accusamus at fuga quae cum distinctio aut quia officia nesciunt consectetur animi quod quis, ut rem deserunt modi, tempora dignissimos! Dolorum.
            Sapiente voluptate, veniam in debitis neque tempora dolor natus suscipit impedit consequatur cumque reiciendis omnis, atque, eius dolorum! Laboriosam, laborum! Ea non vitae, dolorem voluptatem maxime tempora asperiores fugit eius.
            Distinctio temporibus debitis alias optio magni velit nesciunt neque consequuntur dolor inventore atque, quam unde excepturi ipsa tempore provident repellat deleniti fugit eligendi quis hic impedit, odio veniam? Recusandae, officia?</p>
            <div class="Info-image-contact">
                <img src="https://i.imgur.com/duxpfhY.jpg" alt="Una imagen característica" class="Info-image">
                ${ContactBox()}
            </div>
        </div>
    `;
    return view
}

export default Info