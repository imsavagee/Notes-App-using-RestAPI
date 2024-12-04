import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')).render(
  <StrictMode>

<Auth0Provider
    domain="dev-ml570ipb7uvow323.us.auth0.com"
    clientId="JQCV3JDENgoNWZqYLnLAp2PO8DLsIhbF"
    authorizationParams={{
      redirect_uri: window.location.origin,
      

    }}
    cacheLocation='localstorage'
  >
    <App />
  </Auth0Provider>,
  </StrictMode>,
)
