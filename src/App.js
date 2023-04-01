import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/profile";
import Page404 from "./pages/404";
import CustomersPage from "./pages/customers";
import CustomerDescriptionPage from "./pages/customers/description";
import NewCustomerPage from "./pages/customers/new";
import DashboardPage from "./pages/dashboard";
import HomePage from "./pages/home";
import LoginComponent from "./pages/login";
import { ProtectedRoute } from "./utils/protectedRoutes";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth/login' element={<LoginComponent />} />
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
        <Route path='/customers-edit' element={
          <ProtectedRoute>
            <NewCustomerPage />
          </ProtectedRoute>
        }
        />
        <Route path='/customers-view' element={
          <ProtectedRoute>
            <CustomerDescriptionPage />
          </ProtectedRoute>
        }
        />
        {/* <Route path='/profile' element={<Profile />} /> */}
        <Route path='*' element={<Page404 />} />

      </Routes>
    </BrowserRouter>
  )
}

