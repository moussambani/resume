import React, { Component } from 'react'
import styles from './skill.module.scss'


export class Skill extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    return (
      <details className={styles.skill} open={this.state.open} onClick={this.handleClick}>
        <summary>{this.props.skill.name}</summary>
        <p>
          {this.props.skill.details}
        </p>
      </details>
    )
  }
}