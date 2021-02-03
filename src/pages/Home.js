import StateMultiples from '../templates/StateMultiples'
import Filter from '../templates/Filter'

const Home = async() => {
    
    const view = `
        <h1>Bienvenidos a Valls Inmobiliaria</h1>
        <div class="Home-filter-container">
            <button type="button" class="show-filter-button" id="show-filter-button">Filtros</button>
            <div class="Home-filter" id="Home-filter-menu">
                ${await Filter()}
            </div>
        </div>
        <div class="Home-items">
            ${await StateMultiples()}
        </div>
    `;
    return view
}

export default Home
