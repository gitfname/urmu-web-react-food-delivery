import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./i18n.js"
import { BrowserRouter } from "react-router-dom"
import SplashScreen from './pages/SplashScreen/SplashScreen.tsx'
// import sleep from './utils/sleep.ts'

// const ChakraProvider = lazy(() => import("@chakra-ui/react").then(module => ({ default: module.ChakraProvider })))
import { ChakraProvider } from "@chakra-ui/react"
import App from './App.tsx'
// const App = lazy(async () => {
//   await sleep(5000)
//   return import("./App.tsx")
// })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <ChakraProvider>
          <Suspense fallback={<SplashScreen />}>
            <App />
          </Suspense>
        </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode >,
)
