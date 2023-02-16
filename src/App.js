import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page404 from "./pages/404";
import CustomersPage from "./pages/customers";
import CustomerDescriptionPage from "./pages/customers/description";
import NewCustomerPage from "./pages/customers/new";
import DashboardPage from "./pages/dashboard";
import LoginComponent from "./pages/login";
import { ProtectedRoute } from "./utils/protectedRoutes";

export default function App() {
  // const [user, setUser] = useState(false)

  // const handleLogin = () => setUser({ id: '1', name: 'robin' })
  // const handleLogout = () => setUser(null)

  // if (localStorage.getItem('@UserLogged')) {
  //   setUser(true)
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginComponent />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
        />
        <Route path='/customers' element={
          <ProtectedRoute>
            <CustomersPage />
          </ProtectedRoute>
        }
        />
        <Route path='/customers-new' element={
          <ProtectedRoute>
            <NewCustomerPage />
          </ProtectedRoute>
        }
        />
        <Route path='/customers-description' element={
          <ProtectedRoute>
            <CustomerDescriptionPage />
          </ProtectedRoute>
        }
        />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}
