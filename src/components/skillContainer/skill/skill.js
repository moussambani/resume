import React, { Component } from 'react'
import styles from './skill.module.scss'


export class Skill extends Component {
  baseColor = null
  lightnessStep = 7

  constructor(props) {
    super(props)

    this.state = {
      open: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.initBaseColor()
  }

  initBaseColor() {
    let [hue, saturation, lightness] = getComputedStyle(document.documentElement)
      .getPropertyValue('--decoration-color')
      .split(/,/).map(s => s.replace(/%/, ''))

    this.baseColor = { hue, saturation, lightness }
  }

  handleClick(e) {
    e.preventDefault()
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    let skill = this.props.skill
    let classes = ['skill', ...this.props.extraClasses]
      .map(c => styles[c])
      .reduce((c1, c2) => `${c1} ${c2}`)

    return skill.details.length > 0 ?
      this.renderAsDetails(skill, classes) : this.renderAsDiv(skill, classes)
  }

  renderAsDetails(skill, classes) {
    return (
      <details
        className={classes} open={this.state.open}
        onClick={this.handleClick} style={{ backgroundColor: this.calculateColor(skill.exposure) }}
      >
        <summary>{skill.name}</summary>
        <p>
          {skill.details}
        </p>
      </details>
    )
  }

  renderAsDiv(skill, classes) {
    return (
      <div
        className={classes} open={this.state.open}
        style={{ backgroundColor: this.calculateColor(skill.exposure) }}
      >
        {skill.name}
      </div>
    )
  }

  calculateColor(level) {
    let diff = level - 3
    let lightness = this.baseColor.lightness - (this.lightnessStep * diff)

    return `hsl(${this.baseColor.hue}, ${this.baseColor.saturation}%, ${lightness}%)`
  }
}