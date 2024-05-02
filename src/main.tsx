import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles.tsx'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './settings/query-client.ts'
import Footer from './components/Footer/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <App />
        <Footer />
      </QueryClientProvider>

    </BrowserRouter>
  </React.StrictMode>,
)
