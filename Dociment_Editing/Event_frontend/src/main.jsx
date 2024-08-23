// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// // import './index.css'
// import { ChakraProvider } from '@chakra-ui/react'
// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   // <StrictMode>
//     <BrowserRouter>
//       <ChakraProvider>
//         <App />
//       </ChakraProvider>
//     </BrowserRouter>
//   // </StrictMode>,
// )
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './components/login-signup/Contextapi'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <ChakraProvider>
        <AuthProvider>
        <App/>
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
