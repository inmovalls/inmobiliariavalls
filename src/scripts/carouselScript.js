
const carouselScript = () => {
    const carouselExists = document.getElementById("State-carousel")

    if (carouselExists) {

        // console.log("¡Hay carrusel!")

        const images = document.getElementsByClassName("State-carousel-image") //array con imgs
        // console.log(images)
        const buttonPrevious = document.getElementById("button-previous")
        const buttonNext = document.getElementById("button-next")

        const imageShow = (ind) => {
            images[ind].style.display = "inline"
        }
        const imageHide = (ind) => {
            images[ind].style.display = "none"
        }

        const getInViewImageIndex = () => {
            for (let j = 0; j < images.length; j++) {
                if (images[j].style.display === "inline") {
                    return j
                }
            }
        }

        const previous = () => {
            let index = getInViewImageIndex()
            if (index === 0) {
                return
            }
            imageHide(index)
            imageShow(index - 1)
        }

        const next = () => {
            let index = getInViewImageIndex()
            if (index === images.length - 1) {
                return
            }
            imageHide(index)
            imageShow(index + 1)
        }

        buttonPrevious.addEventListener("click", previous)
        buttonNext.addEventListener("click", next) 

    } else {
        // console.log("No hay carrusel :(")
    }
}

export default carouselScript