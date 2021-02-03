const showFilterScript = () => {
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
}

export default showFilterScript