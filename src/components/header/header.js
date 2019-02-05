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
        <p className={styles.description} contentEditable
          suppressContentEditableWarning={true}>
          A former back-end developer with a recently formed enthusiasm towards front-end. I'm currently looking for a place where I could put my love towards creating things to a good use.
        </p>
      </div>
      {Contact()}
    </header>
  )
}