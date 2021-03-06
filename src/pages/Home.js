import StateMultiples from '../templates/StateMultiples'
import Filter from '../templates/Filter'

const Home = async() => {
    
    const view = `
        <h1>Bienvenidos a Valls Inmobiliaria</h1>
        <div class="Home-filter-container">
            ${await Filter()}
        </div>
        <div class="Home-items" id="Home-items">
            ${await StateMultiples()}
        </div>
    `;
    return view
}

export default Home
