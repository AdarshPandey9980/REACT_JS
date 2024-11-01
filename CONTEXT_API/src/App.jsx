import { useEffect, useState } from "react";
import "./App.css";
import Login from "./component/Login";
import Profile from "./component/Profile";
import Show from "./component/Show";
import UserContextProvider from "./context/ContextProvider";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./component/Themebutton";
import Card from "./component/Card";



function App() {
  const [themeMode,setThememode] = useState('light')

  const lightTheme = () => {
    setThememode('light')
  }

  const darkTheme = () => {
    setThememode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
       <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

{
  /* <UserContextProvider>
    <Login/>
    <Profile/>
    <Show/>
  </UserContextProvider> */
}
