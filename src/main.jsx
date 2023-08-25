import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Nav from './Nav.jsx'
import Header from './components/Header.jsx'
import ProductList from './components/ProductList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <ProductList />
    <App />

  </React.StrictMode>,
) 
