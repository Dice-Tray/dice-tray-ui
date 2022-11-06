import "../styles/global.css";
import { useState } from "react";

import CurrentUserContext from "../context/CurrentUserContext";
import UserTokenContext from "../context/UserTokenContext";

export default function App({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState({});
  const [userToken, setUserToken] = useState("");

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <UserTokenContext.Provider value={{ userToken, setUserToken }}>
        <Component {...pageProps} />
      </UserTokenContext.Provider>
    </CurrentUserContext.Provider>
  );
}
