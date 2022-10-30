import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    console.log("You tried to log in with: ", emailAddress, password);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Dice Tray</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.title}>Dice Tray</div>

      <input
        type="text"
        className={styles.input}
        placeholder="example@gmail.com"
        value={emailAddress}
        onChange={(event) => setEmailAddress(event.target.value)}
      />

      <input
        type="text"
        className={styles.input}
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button type="submit" className={styles.submit} onClick={login}>
        Login or Sign Up
      </button>
    </div>
  );
}
