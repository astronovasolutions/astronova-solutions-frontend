import { createContext, useEffect, useState } from 'react'
export const ThemeContext = createContext(null)

export function ThemeProvider({children}) {
  const [theme,setTheme] = useState(()=>localStorage.getItem('astronova-theme') || 'dark')
  useEffect(()=>{
    document.documentElement.classList.toggle('light', theme==='light')
    localStorage.setItem('astronova-theme',theme)
  },[theme])
  return <ThemeContext.Provider value={{theme,toggleTheme:()=>setTheme(t=>t==='dark'?'light':'dark')}}>{children}</ThemeContext.Provider>
}
