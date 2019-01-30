import React from 'react'

import { Contact } from './contact'
import styles from './header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.intro}>
        <div className={styles.title}>
          <h1>
            Fekete Viktor
            <a href="/fekete_viktor.pdf" className={styles.download}></a>
          </h1>
          <h2>Web Developer</h2>
        </div>
        <p className={styles.description} contentEditable>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
      </div>
      {Contact()}
    </header>
  )
}