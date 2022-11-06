import { createContext } from "react";

const UserTokenContext = createContext({
  userToken: '',
  setUserToken: () => {},
});

export default UserTokenContext;
