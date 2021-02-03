import router from './routes'
import './scripts/observerMain'
import './scripts/observerHeader'

window.addEventListener('load', router)
window.addEventListener('hashchange', router)