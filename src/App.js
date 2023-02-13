import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomersPage from "./pages/customers";
import CustomerDescriptionPage from "./pages/customers/description";
import NewCustomerPage from "./pages/customers/new";
import DashboardPage from "./pages/dashboard";
import LoginComponent from "./pages/login";
import { ProtectedRoute } from "./utils/protectedRoutes";

export default function App() {
  const [user, setUser] = useState(false)

  const handleLogin = () => setUser({ id: '1', name: 'robin' })
  const handleLogout = () => setUser(null)

  if (localStorage.getItem('@UserLogged')) {
    setUser(true)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginComponent />} />
        <Route path='/dashboard' element={
          <ProtectedRoute user={user}>
            <DashboardPage />
          </ProtectedRoute>}
        />
        <Route path='/customers' element={
          <ProtectedRoute user={user}>
            <CustomersPage />
          </ProtectedRoute>}
        />
        <Route path='/customers-new' element={
          <ProtectedRoute user={user}>
            <NewCustomerPage />
          </ProtectedRoute>}
        />
        <Route path='/customers-description' element={
          <ProtectedRoute user={user}>
            <CustomerDescriptionPage />
          </ProtectedRoute>}
        />
      </Routes>
    </BrowserRouter>
  )
}

