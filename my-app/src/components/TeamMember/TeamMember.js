import React from 'react'
import style from './TeamMember.module.css'

// import Profile from '../Profile/Profile'
export function TeamMember(props) {
  let file = props.file
  return (
    <div className={style['team-mebmer']}>
      <p>Team Member</p>

      <h2>
        We Have <span>Some Awesome</span> People
      </h2>

      <div className={style['profiles']}>
        {/* <Profile file={file} /> */}
        profiles
      </div>
    </div>
  )
}
