const navButton = () => {
    const navButton = document.getElementById("Header-nav-button")
    let navMenu = document.getElementsByClassName("Header-nav-item")

    const toggleMenu = () => {
        for (let i = 0; i < navMenu.length; i++) {
            if (navMenu[i].style.display === "inline") {
                navMenu[i].style.display = "none"
            } else {
                navMenu[i].style.display = "inline"
            }
        }
    }

    navButton.addEventListener("click", toggleMenu)
}

export default navButton