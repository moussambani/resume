import React from 'react'
import styles from './education.module.scss'


export function Education(props) {
  return (
    <section className={styles.education}>
      <h1>
        Certifications
      </h1>
      <ul className={styles.certifications}>
        <li className={styles.certification}>
          <p>Bachelor's degree in software engineering from Eötvös Loránd University, earned in 2014</p>
        </li>
        <li className={styles.certification}>
          <p>AWS associate level developer certification, earned in 2016</p>
        </li>
      </ul>
    </section>
  )
}