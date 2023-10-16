import { Route, Navigate } from 'react-router-dom';
import { useInventory } from './InventoryContext';

export const ProtectedRoute = ({ children, ...rest }) => {
  const { inventoryId } = useInventory();

  if (!inventoryId) {
    return <Navigate to="/" />;
  }

  return children;
};



