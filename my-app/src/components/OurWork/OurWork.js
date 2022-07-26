import React from 'react'
import style from './OurWork.module.css'
// import OurWorkButton from './OurWorkButton/OurWorkButton'
import OurWorkFirst from '../../assets/images/our-work-first.svg'
import OurWorkSecond from '../../assets/images/our-work-second.svg'
import OurWorkThird from '../../assets/images/our-work-third.svg'
import OurWorkFourth from '../../assets/images/our-work-fourth.svg'
import OurWorkFiveth from '../../assets/images/our-work-fiveth.svg'
import OurWorkSixth from '../../assets/images/our-work-sixth.svg'
// import OurWorkSecondContent from './OurWorkSecondContent/OurWorkSecondContent'
export function OurWork(props) {
  let file = props.file
  let OurWorkContent = [
    { image: OurWorkFirst },
    { image: OurWorkSecond },
    { image: OurWorkThird },
    { image: OurWorkFourth },
    { image: OurWorkFiveth },
    { image: OurWorkSixth },
  ]
  return (
    <div className={style['our-work']}>
      <div className={style['our-work__first-section']}>
        <p>Our Work</p>
        <h2>
          We Have Some <span>Designed & Development</span> Projects
        </h2>
        <div className={style['catagories']}>
          <button>All</button>
          {/* <OurWorkButton file={file} /> */}
        </div>
      </div>
      <div className={style['our-work__second-section']}>
        {/* <OurWorkSecondContent file={OurWorkContent} /> */}
      </div>
    </div>
  )
}
