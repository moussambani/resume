import React, { Component } from 'react'
import styles from './projects.module.scss'

import { Project } from './project'

export class Projects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: null
    }
  }

  componentDidMount() {
    fetch('projects.json').then(
      res => res.json()
    ).then(json => {
      this.setState({ projects: json })
    })
  }

  renderProjects() {
    return (
      <section className={styles.container}>
        <h1>Projects</h1>
        <ul className={styles.projects}>
          {this.state.projects.map((project, idx) =>
            <li key={idx} className={styles.project}>
              <Project project={project} />
            </li>
          )}
        </ul>
      </section>
    )
  }

  render = () => (
    <>
      {this.state.projects && this.renderProjects()}
    </>
  )
}