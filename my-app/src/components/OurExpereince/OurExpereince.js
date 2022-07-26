import React from 'react'
import style from './OurExpereince.module.css'
import Button from '../Button/Button'
// import OurExperienceElement from '../OurExperienceElement/OurExperienceElement'

export function OurExpereince(props) {
  let test = document.querySelector('.our-experience')

  let file = props

  return (
    <div className={style['our-experience']}>
      <p>Our Expereince</p>
      <h2>
        We Have Completed <span>150+ Projects</span> Succesfully
      </h2>
      <p className={style['our-description__second-paragraph']}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
        imperdiet at a augue ullamcorper. Ornare etiam erat volutpat tempor
        fringilla mi. Elit a blandit faucibus est, dui interdum ut amet.
      </p>
      <Button />
      <div className={style['our-experience__blocks']}>
        {/* <OurExperienceElement file={file} /> */}
      </div>
    </div>
  )
}
