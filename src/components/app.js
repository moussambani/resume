import React from 'react'
import { SkillContainer } from './skillContainer/skillContainer'
import { Header } from './header/header'

export function App() {
  return (
    <div>
      <Header />
      <main>
        <SkillContainer />
      </main>
    </div>
  )
}