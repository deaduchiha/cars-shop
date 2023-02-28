import Link from "next/link";
import styles from "./layout.module.css";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Car shop</h2>
          <p>Choose a car to Buy</p>
        </Link>
      </header>
      <div>{children}</div>
      <footer className={styles.footer}>Next.Js | Car shop</footer>
    </>
  );
};

export default Layout;
