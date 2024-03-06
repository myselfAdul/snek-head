import React from 'react'
import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom';
import App from './App'
import './index.css'
import ShopContextProvider from './Context/ShopContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ShopContextProvider>
    <App/>
  </ShopContextProvider>
)
 

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ShopContextProvider>
//       <App/>
//     </ShopContextProvider>
//   </React.StrictMode>
// )
