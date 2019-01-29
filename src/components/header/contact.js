import React from 'react'
import styles from './contact.module.scss'

export function Contact() {
  return (
    <ul className={styles.contact}>
      <li className={styles.icon} icon="">
        <a href="mailto:fekete.roland.viktor@gmail.com">
          fekete.roland.viktor@gmail.com
        </a>
      </li>
      <li className={styles.icon} icon="">
        <a href="phone:+3620-505-3235">
          +3620-505-3235
        </a>
      </li>
      <li className={styles.iconBrands} icon=''>
        <a href='https://github.com/moussambani'>
          github.com/moussambani
        </a>
      </li>
      <li className={styles.iconBrands} icon=''>
        <a href='https://www.linkedin.com/in/roland-viktor-fekete'>
          linkedin.com/in/roland-viktor-fekete
        </a>
      </li>
      <li className={styles.icon} icon="">
        <a href="https://www.google.com/maps/place/Budapest">
          Budapest, Hungary
          </a>
      </li>
    </ul>
  )
}