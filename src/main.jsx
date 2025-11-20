import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

createRoot(document.getElementById('root')).render(
  // <StrictMode> //se comento para que no haga un doble renderizado 
    <Provider store={store}>
      <App />
    </Provider>
  // </StrictMode>,
)
