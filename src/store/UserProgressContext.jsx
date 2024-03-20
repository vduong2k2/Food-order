import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "", //Cart/checkout
  showCart: () => {},
  hideCart: () => {},
  showCheckOut: () => {},
  hideCheckOut: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState(" ");

  function showCart() {
    setUserProgress("cart");
  }
  function hideCart() {
    setUserProgress(" ");
  }
  function showCheckOut() {
    setUserProgress("checkout");
  }
  function hideCheckOut() {
    setUserProgress(" ");
  }
  const userProgressContext = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckOut,
    hideCheckOut,
  };

  return (
    <UserProgressContext.Provider value={userProgressContext}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
