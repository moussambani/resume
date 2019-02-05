import React, { Component } from 'react'
import { Skill } from './skill/skill'
import styles from './skillContainer.module.scss'

export class SkillContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      skills: null,
      filtered: null,
      query: '',
      limit: 15
    }

    this.loadMore = this.loadMore.bind(this)
  }

  componentDidMount() {
    fetch('https://moussambani.github.io/resume/skills.json')
      .then(res => res.json())
      .then(json => {
        let sorted = json.sort((a, b) => b.exposure - a.exposure)
        this.setState({ skills: sorted, filtered: sorted })
      })
  }

  filterSkills(e) {
    let query = e.target.value.toLowerCase()
    this.setState({ query })
    let filtered = this.state.skills.filter(skill => skill.name.toLowerCase().includes(query))
    this.setState({ filtered })
  }

  render = () => (
    this.state.filtered ? this.renderOuter() : <p>Loading</p>
  )

  renderOuter() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Technical Skills</h1>
          <div className={styles.search}>
            <label htmlFor="search">
              <i className={styles.icon}></i>
            </label>
            <input className={styles.filter}
              id='search'
              type='text' onChange={(e) => this.filterSkills(e)} />
          </div>
        </div>
        <h3 className={styles.subtitle}>A color coded list of technologies I have experience with. The darker the color the more confident I am with the given tech.</h3>
        {this.renderInner()}
      </div>
    )
  }

  renderInner() {
    return (
      this.state.filtered.length > 0 ?
        <>
          {this.renderSkills(this.state.filtered)}
        </>
        :
        <p>no results for "{this.state.query}"</p>
    )
  }

  renderSkills(skills) {
    let queryActive = this.state.query.length > 0
    return (
      skills.length > 0 &&
      <section className={styles.section}>
        <ul className={styles.skills}>
          {skills.map((skill, idx) => {
            return (
              <li key={skill.name} className={styles.skill}>
                <Skill skill={skill} hidden={idx >= this.state.limit && !queryActive} />
              </li>
            )
          })}
        </ul>
        {
          this.state.limit < this.state.skills.length && !queryActive
          &&
          <button className={styles.load} onClick={this.loadMore}>show more...</button>
        }
      </section>
    )
  }

  loadMore() {
    this.setState(old => ({ limit: 1000 }))
  }
}