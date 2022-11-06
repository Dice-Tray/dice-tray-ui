import { createContext } from "react";

const CurrentUserContext = createContext({
  currentUser: {},
  setCurrentUser: () => {},
});

export default CurrentUserContext;
