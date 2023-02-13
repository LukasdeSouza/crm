import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomersPage from "./pages/customers";
import CustomerDescriptionPage from "./pages/customers/description";
import NewCustomerPage from "./pages/customers/new";
import DashboardPage from "./pages/dashboard";
import LoginComponent from "./pages/login";

export default function Login() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginComponent />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/customers' element={<CustomersPage />} />
        <Route path='/customers-new' element={<NewCustomerPage />} />
        <Route path='/customers-description' element={<CustomerDescriptionPage />} />
      </Routes>
    </BrowserRouter>
  )
}

