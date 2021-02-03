const showFilterScript = () => {
    if (document.getElementById("show-filter-button")) {
        const showFilterButton = document.getElementById("show-filter-button")
        const filterMenu = document.getElementById("Home-filter-menu")

        const toggleMenu = () => {
            if (filterMenu.style.display === "flex") {
                filterMenu.style.display = "none"
            } else {
                filterMenu.style.display = "flex"
            }
        }

        showFilterButton.addEventListener("click", toggleMenu)
    } else {
        // console.log("No hay boton de filtrado :(")
    }
    
}

export default showFilterScript