import Head from "next/head";
import Router from "next/router";
import styles from "../styles/Home.module.css";
import CurrentUserContext from "../context/CurrentUserContext";
import UserTokenContext from "../context/UserTokenContext";
import { useState, useContext } from "react";

const toggleEnum = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
};

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registerOrLogin, setRegisterOrLogin] = useState(toggleEnum.LOGIN);

  const { setCurrentUser } = useContext(CurrentUserContext);
  const { setUserToken } = useContext(UserTokenContext);

  const login = async () => {
    await fetch("http://localhost:3001/api/v1/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser(data?.user);
        setUserToken(data?.token);
        Router.push("/landing");
      });
  };

  const register = async () => {
    await fetch("http://localhost:3001/api/v1/register", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        displayName,
        firstName,
        lastName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser(data?.user);
        setUserToken(data?.token);
        Router.push("/landing");
      });
  };

  const toggleRegisterOrLogin = () => {
    setRegisterOrLogin(
      registerOrLogin === toggleEnum.LOGIN
        ? toggleEnum.REGISTER
        : toggleEnum.LOGIN
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Dice Tray</title>
      </Head>
      <div className={styles.title}>Dice Tray</div>

      {registerOrLogin === toggleEnum.LOGIN && (
        <div className={styles.container}>
          <input
            type="text"
            className={styles.doubleInput}
            placeholder="Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            type="password"
            className={styles.doubleInput}
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      )}

      {registerOrLogin === toggleEnum.REGISTER && (
        <div className={styles.container}>
          <input
            type="text"
            className={styles.doubleInput}
            placeholder="Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
        </div>
      )}

      {registerOrLogin === toggleEnum.LOGIN && (
        <button type="submit" className={styles.submitButton} onClick={login}>
          Login
        </button>
      )}
      {registerOrLogin === toggleEnum.REGISTER && (
        <button
          type="submit"
          className={styles.submitButton}
          onClick={register}
        >
          Register
        </button>
      )}
      <button
        type="button"
        className={styles.toggleButton}
        onClick={toggleRegisterOrLogin}
      >
        {registerOrLogin === toggleEnum.LOGIN
          ? "Need an account? Sign up here!"
          : "Already have an account? Login here!"}
      </button>
    </div>
  );
}
