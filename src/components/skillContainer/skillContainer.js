import React, { Component } from 'react'
import { Skill } from './skill/skill'
import styles from './skillContainer.module.scss'

export class SkillContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      skills: null,
      filtered: null,
      query: ''
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
    this.setState({ query })
    let { expert, advanced } = this.state.skills
    expert = expert.filter(skill => skill.name.toLowerCase().includes(query))
    advanced = advanced.filter(skill => skill.name.toLowerCase().includes(query))
    this.setState({ filtered: { expert, advanced } })
  }

  renderOuter() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Technical Skills</h2>
          <label htmlFor="search">
            <i className={styles.icon}></i>
          </label>
          <input className={styles.filter}
            id='search'
            type='text' onChange={(e) => this.filterSkills(e)} />
        </div>
        <h3>A list of tools I have gained experienced with over my career.</h3>
        {this.renderInner()}
      </div>
    )
  }

  renderInner() {
    return (
      this.state.filtered.expert.length + this.state.filtered.advanced.length > 0 ?
        <>
          {this.renderSkills(this.state.filtered.expert, 'Expert')}
          {this.renderSkills(this.state.filtered.advanced, 'Advanced')}
        </>
        :
        <p>no results for "{this.state.query}"</p>
    )
  }

  renderSkills(skills, title) {
    return (
      skills.length > 0 &&
      <section className={styles.section}>
        <h3>{title}:</h3>
        <ul className={styles.skills}>
          {skills.map(skill => {
            return (
              <li key={skill.name} className={styles.skill}>
                <Skill skill={skill} />
              </li>
            )
          })}
        </ul>
      </section>
    )
  }

  render = () => (
    this.state.filtered ? this.renderOuter() : <p>Loading</p>
  )
}