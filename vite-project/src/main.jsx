import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './Redux/store.jsx'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
 <ChakraProvider>
   <Provider store={store}>
    <App />
 </Provider>
 </ChakraProvider>
)
