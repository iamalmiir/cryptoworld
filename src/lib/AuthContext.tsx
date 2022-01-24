import { createContext, useState } from 'react'

const AuthContext = createContext({
  user: true,
  login: () => {},
})

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(true)
  const [error, setError] = useState(null)

  const login = () => {
    setUser(!user)
  }

  return (
    <AuthContext.Provider value={{ login, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
