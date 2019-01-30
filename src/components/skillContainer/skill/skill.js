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
    let skill = this.props.skill
    let classes = styles.skill + (this.props.hidden ? ` ${styles.hidden}` : '')

    let lightness = 30 + (5 - skill.exposure) * 6
    let backgroundColor = `hsl(161, 59%, ${lightness}%)`

    return (
      <details
        className={classes} open={this.state.open}
        onClick={this.handleClick} style={{ backgroundColor }}
      >
        <summary>{skill.name}</summary>
        <p>
          {skill.details}
        </p>
      </details>
    )
  }
}