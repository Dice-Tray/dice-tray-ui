import Head from "next/head";
import { useContext } from "react";
import CurrentUserContext from "../context/CurrentUserContext";
import UserTokenContext from "../context/UserTokenContext";
import styles from "../styles/Home.module.css";

export default function LandingPage() {
  const { currentUser } = useContext(CurrentUserContext);
  const { userToken } = useContext(UserTokenContext);

  console.log(currentUser)

  return (
    <div className={styles.container}>
      <Head>
        <title>Dice Tray</title>
      </Head>
      <div>You successfully logged in as:</div>
        <div>{currentUser?.displayName}</div>
      <div>{currentUser?.email}</div>
        <div>{currentUser?.lastName}, {currentUser?.firstName}</div>
      <div>with token:</div>
      <div>{userToken}</div>
    </div>
  );
}
