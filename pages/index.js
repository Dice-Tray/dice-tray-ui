import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const toggleEnum = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER'
}

export default function Home() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registerOrLogin, setRegisterOrLogin] = useState(toggleEnum.LOGIN);

  const login = () => {
    console.log("login");
  }
  const register = () => {
    console.log("register");
  }

  const toggleRegisterOrLogin = () => {
    setRegisterOrLogin(registerOrLogin === toggleEnum.LOGIN ? toggleEnum.REGISTER : toggleEnum.LOGIN);
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Dice Tray</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.title}>Dice Tray</div>

      {registerOrLogin === toggleEnum.LOGIN && <div className={styles.container}>
        <input
          type="text"
          className={styles.doubleInput}
          placeholder="Email Address"
          value={emailAddress}
          onChange={(event) => setEmailAddress(event.target.value)}
        />

        <input
          type="password"
          className={styles.doubleInput}
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>}

      {registerOrLogin === toggleEnum.REGISTER && <div className={styles.container}>
        <input
          type="text"
          className={styles.doubleInput}
          placeholder="Email Address"
          value={emailAddress}
          onChange={(event) => setEmailAddress(event.target.value)}
        />

        <input
          type="password"
          className={styles.doubleInput}
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <div>
          <input
            type="text"
            className={styles.input}
            placeholder="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />

          <input
            type="text"
            className={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>

        <input
          type="text"
          className={styles.doubleInput}
          placeholder="Display Name"
          value={displayName}
          onChange={(event) => setDisplayName(event.target.value)}
        />

      </div>}

      {registerOrLogin === toggleEnum.LOGIN &&
        <button type="submit" className={styles.submitButton} onClick={login}>
          Login
        </button>}
      {registerOrLogin === toggleEnum.REGISTER &&
        <button type="submit" className={styles.submitButton} onClick={register}>
          Register
        </button>}
      <button type="button" className={styles.toggleButton} onClick={toggleRegisterOrLogin}>
        {registerOrLogin === toggleEnum.LOGIN ? 'Need an account? Sign up here!' : 'Already have an account? Login here!'}
      </button>
    </div>
  );
}
