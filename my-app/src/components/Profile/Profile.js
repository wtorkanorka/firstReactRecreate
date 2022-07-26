import React from 'react'
import style from './Profile.module.css'

export default function Profile(props) {
  let profile = props.file.map(item => (
    <div className={style['profile']} key={item.id}>
      <div className={style['profile__img-section']}>
        <img src={item.profileImg} alt="profile-logo" />
      </div>
      <div className={style['profile__description']}>
        <h4>{item.name}</h4>
        <p>{item.job}</p>
      </div>
    </div>
  ))
  return <>{profile}</>
}
