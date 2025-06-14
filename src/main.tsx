import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import 'shared/config/i18n/i18n';
import { StoreProvider } from 'app/providers/storeProvider';

createRoot(document.getElementById('root')!).render(
   <BrowserRouter>
      <StoreProvider>
         <App />
      </StoreProvider>
   </BrowserRouter>,
);
