import React from 'react'
import { Header } from './header/header'
import { SkillContainer } from './skillContainer/skillContainer'
import { Projects } from './projects/projects'

import styles from './app.module.scss'

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Projects />
        <SkillContainer />
      </main>
    </div>
  )
}