import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./components/store.jsx";
import { Provider } from 'react-redux';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="919903798719-2f001vlqtfme6225uplc72u446fbe3np.apps.googleusercontent.com">
    <BrowserRouter>
      <StrictMode>
         <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <App />
          </PersistGate>
          </Provider>
      </StrictMode>
    </BrowserRouter>
  </GoogleOAuthProvider>
)