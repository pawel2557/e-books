import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, ProductsList, ProductDetail, CartPage, Login, Register, OrderPage, DashboardPage, PageNotFound  } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";
export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/products" element={<ProductsList/>}/>
            <Route path="/products/:id" element={<ProductDetail/>}/>

            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path="*" element={<PageNotFound/>}/>

            <Route path="/cart" element={<ProtectedRoute><CartPage/></ProtectedRoute>}/>
            <Route path="/order-summary" element={<ProtectedRoute><OrderPage/></ProtectedRoute>}/>
            <Route path="/dashboard" element={<ProtectedRoute><DashboardPage/></ProtectedRoute>}/>
          
        </Routes>
    </>
  )
}
