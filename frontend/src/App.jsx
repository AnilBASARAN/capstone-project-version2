import { BrowserRouter,Route, Routes } from "react-router-dom";
import SignInPage from "./assets/pages/SignInPage";
import SignUpPage from "./assets/pages/SignUpPage";
import { useEffect, useState } from "react";
import * as userService from "services/user"
import SessionContext from "contexts/SessionContext";
import { jwtDecode } from "jwt-decode";
import PlantListPage from "assets/pages/PlantListPage";
import PlantShowPage from "assets/pages/PlantShowPage";
import ScrollToTop from "shared-components/ScrolltoTop";
import { useThemeStore } from "store/useThemeStore";
import SettingsPage from "assets/pages/SettingsPage";


const  App = () => {
 
 const [sessionToken,setSessionToken] = useState(()=> userService.getSessionTokenStorage() );
 const [joke,setJoke] = useState(1);
 const { theme } = useThemeStore();

 useEffect(() => {
   // Update the theme on the <html> element
   document.documentElement.setAttribute("data-theme", theme);
 }, [theme]);


  return (
    <div data-theme={theme}>
      <SessionContext.Provider value={{
      theme:theme,
      joking: {joke,setJoke},
      username: sessionToken ? jwtDecode(sessionToken).username : null,
      signIn: (token)=> {
        setSessionToken(token);
        userService.setSessionTokenStorage(token);
      },
      signOut: ()=> {
        setSessionToken(null);
        userService.removeSessionTokenStorage();
      }
    }} >
        <BrowserRouter>
        <ScrollToTop />
   <Routes>
    <Route path="/login" element={<SignInPage />} />
    <Route path="/signup" element={<SignUpPage /> } />
    <Route path="/settings" element={<SettingsPage /> } />
    <Route path="/plants" element={<PlantListPage /> } />
    <Route path="/plants/:plantId" element={<PlantShowPage /> } />

   </Routes>
   </BrowserRouter>

    </SessionContext.Provider>
 
    </div>
  )
}

export default App


