import React, { Component } from 'react'
import styles from './projects.module.scss'


export class Projects extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render = () => (
    <div className={styles.projects}>
      <h2>Projects</h2>
    </div>
  )
}