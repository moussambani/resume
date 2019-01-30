import React from 'react'
import styles from './project.module.scss'


export function Project(props) {
  let proj = props.project

  return (
    <>
      <h2>{`${proj.name} (${proj.duration})`}</h2>
      <p>{proj.description}</p>
      <h3>My contributions:</h3>
      <ul>
        {proj.contribution.map(r => {
          return <li>{r}</li>
        })}
      </ul>
    </>
  )
}