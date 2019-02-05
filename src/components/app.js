import React from 'react'
import { Header } from './header/header'
import { SkillContainer } from './skillContainer/skillContainer'
import { Projects } from './projects/projects'
import { Education } from './education'

import styles from './app.module.scss'

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <div className={styles.left}>
          <Projects />
        </div>
        <div className={styles.right}>
          <SkillContainer />
          <Education />
        </div>
      </main>
    </div>
  )
}