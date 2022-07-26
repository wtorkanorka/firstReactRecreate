import React from 'react'
import style from './AboutUsElement.module.css'

export default function AboutUsElement(props) {
  // const styles = {
  //   boxShadow: props.file.map(item => item.boxShadow),
  //   paddingTop: '25px',
  //   paddingLeft: '27px',
  //   paddingRight: '17px',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   paddingBottom: '21px',
  //   alignItems: 'center',
  //   background: props.file.map(item => item.backgroundColor),
  // }

  let file = props.file.map(item => (
    <div className={style['about-us-element']} key={item.id}>
      <div className={style['about-us-element__icon']} key={item.id}>
        <img src={item.icon} alt="123" key={item.id} />
      </div>
      <p key={item.id}>{item.text}</p>
    </div>
  ))
  return <>{file}</>
}
