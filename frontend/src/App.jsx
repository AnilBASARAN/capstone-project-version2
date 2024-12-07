import { BrowserRouter,Navigate,Route, Routes } from "react-router-dom";
import SignInPage from "./assets/pages/SignInPage";
import SignUpPage from "./assets/pages/SignUpPage";
import { useEffect } from "react";
import PlantListPage from "assets/pages/PlantListPage";
import PlantShowPage from "assets/pages/PlantShowPage";
import ScrollToTop from "shared-components/ScrolltoTop";
import { useThemeStore } from "store/useThemeStore";
import SettingsPage from "assets/pages/SettingsPage";
import OrdersPage from "assets/pages/OrdersPage";
import { useAuthStore } from "store/useAuthStore";
import { Loader } from "lucide-react";
import HomePage from "assets/pages/HomePage";


const  App = () => {
  const { authUser, checkAuth, isCheckingAuth, } = useAuthStore();

 const { theme } = useThemeStore();

 useEffect(() => {
   // Update the theme on the <html> element
   document.documentElement.setAttribute("data-theme", theme);
 }, [theme]);

 useEffect(() => {
  checkAuth();
}, [checkAuth]);

 if (isCheckingAuth && !authUser)
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin" />
    </div>
  );


  return (
    <div data-theme={theme}>
 
        <BrowserRouter>
        <ScrollToTop />
   <Routes>
   <Route path="/login" element={!authUser ? <SignInPage /> : <Navigate to="/" />} />
   <Route path="/" element={<HomePage />} />
   <Route path="/sign-up" element={ !authUser ? <SignUpPage  /> : <Navigate to="/" />} />
    <Route path="/settings" element={<SettingsPage /> } />
    <Route path="/plants" element={ authUser ? <PlantListPage /> : <Navigate to="/login" /> } />
    <Route path="/orders" element={<OrdersPage /> } />
    <Route path="/plants/:plantId/:plantImage" element={<PlantShowPage /> } />

   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App


