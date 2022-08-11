import { createRoot } from 'react-dom/client'

import App from './components/App'
import 'jquery'
import 'bootstrap'
import './assets/styles/global.scss'

createRoot(document.getElementById('root')!).render(<App />)
