import React, { Component } from 'react'
import { Skill } from './skill/skill'
import styles from './skillContainer.module.scss'

export class SkillContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      skills: null,
      filtered: null
    }
  }

  componentDidMount() {
    fetch('/skills.json')
      .then(res => res.json())
      .then(json => {
        this.setState({ skills: json, filtered: json })
      })
  }

  filterSkills(e) {
    let query = e.target.value.toLowerCase()
    let { expert, advanced } = this.state.skills
    expert = expert.filter(skill => skill.name.toLowerCase().includes(query))
    advanced = advanced.filter(skill => skill.name.toLowerCase().includes(query))
    this.setState({ filtered: { expert, advanced } })
  }

  renderSkills(skills) {
    return (
      <ul className={styles.skills}>
        {skills.map(skill => {
          return (
            <li key={skill.name}>
              <Skill skill={skill} />
            </li>
          )
        })}
      </ul>
    )
  }

  render = () => (
    this.state.filtered ?
      <div className={styles.container}>
        <div className={styles.filter}>
          <input
            id='search'
            type="text" onChange={(e) => this.filterSkills(e)}
            placeholder='filter skills'
          />
          <label htmlFor="search">
            <i className={'icon'} >search</i>
          </label>
        </div>
        <h2>Expert:</h2>
        {this.renderSkills(this.state.skills.expert)}
        <h2>Advanced:</h2>
        {this.renderSkills(this.state.skills.advanced)}
      </div>

      :

      <p>Loading</p>
  )
}