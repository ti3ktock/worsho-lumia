import { createContext, useState } from 'react'

const GlobalContext = createContext()

function GlobalProvider({ children }) {
  const [value, setValue] = useState(1)
  const [cart, setCart] = useState([])

  return <GlobalContext.Provider value={{ value, setValue, cart, setCart }}>
    {children}
  </GlobalContext.Provider>
}


export { GlobalProvider, GlobalContext }