import { useState, createContext, useContext } from "react";

const UserContext = createContext({});

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [logged, setLogged]     = useState(false);

  return (
    <UserContext.Provider value={{ userData, setUserData, logged, setLogged }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  return context;
}