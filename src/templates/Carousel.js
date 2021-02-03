const Carousel = (img) => {
    let view = ''

    for (let i = 1; i<img.length; i++ ) {
        let singleView = `
            <img src="${img[i]}" alt="Foto Inmueble" class="State-carousel-image" id="image-${i+1}" style="display: none;">
        `;

        view += singleView
    }

    const finalView = `
        <div class="State-carousel" id="State-carousel">
            <button type="button" id="button-previous" ><div class="inside-button-previous"></div></button>
            <div class="carousel-pictures">
                <img src="${img[0]}" alt="Foto Inmueble" class="State-carousel-image" id="image-${1}" style="display: inline;">
                ${view}
            </div>
            <button type="button" id="button-next" ><div class="inside-button-next"></div></button>
        </div>
    `;
    return finalView
}

export default Carousel