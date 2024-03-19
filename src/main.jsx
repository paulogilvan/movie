import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes/routes'
import GlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(  
    <BrowserRouter>
      <MainRoutes />
      <GlobalStyles />
    </BrowserRouter>      
)