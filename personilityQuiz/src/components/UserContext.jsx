import React, { createContext, useState } from "react";

// the UserContext
export const UserContext = createContext({
  name: "",
  setName: () => {},
});

// the UserProvider component
export function UserProvider({ children }) {
  const [name, setName] = useState("");

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;