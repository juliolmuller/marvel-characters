import { createRoot } from 'react-dom/client'

import App from './components/App'
import 'jquery'
import 'bootstrap'
import './index.scss'

createRoot(document.getElementById('root')!).render(<App />)
