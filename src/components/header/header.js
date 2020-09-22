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
          <h2>Software Guy</h2>
        </div>
        <p className={styles.description} contentEditable
          suppressContentEditableWarning={true}>
          A developer with various interests. As a true generalist I can be useful in almost any area related to development, but also need to have variety in my work.
        </p>
      </div>
      {Contact()}
    </header>
  )
}
