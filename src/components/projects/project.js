import React from 'react'
import styles from './project.module.scss'

function createMarkup(content) {
  return { __html: content };
}

export function Project(props) {
  let proj = props.project

  return (
    <section className={styles.project}>
      <h2 dangerouslySetInnerHTML={createMarkup(proj.name + ` (${proj.duration})`)}></h2>
      <p className={styles.description}>{proj.description}</p>
      <h3>My contributions:</h3>
      <ul className={styles.contrib}>
        {proj.contribution.map((r, idx) => {
          return <li key={idx} dangerouslySetInnerHTML={createMarkup(r)}></li>
        })}
      </ul>
    </section>
  )
}
