import React from 'react'
import './index.css'
import App from './containers/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
