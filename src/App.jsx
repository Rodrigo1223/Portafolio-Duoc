import { BrowserRouter } from 'react-router-dom';
import { InventarioProvider } from './context/InventarioContext';
import AppRoutes from './AppRoutes';

export default function App() {
  return (
    <InventarioProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </InventarioProvider>
  );
}