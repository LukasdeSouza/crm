import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ redirectPath = '/login', children }) => {
  if (localStorage.getItem('@UserLogged') === null) {
    return <Navigate to={redirectPath} replace />
  }

  return children;
};

export { ProtectedRoute }