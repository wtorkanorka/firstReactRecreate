import style from './AboutUs.module.css'
import aboutUsImg from '../../assets/images/about-us_img.png'
import Button from '../Button/Button'
// import iconFile from '../../assets/icons/icon-file.svg'
// import moreLess from '../../assets/icons/more-less.svg'
// import gear from '../../assets/icons/gear.svg'
// import shareBoxLine from '../../assets/icons/share-box-line.svg'
import AboutUsElement from '../AboutUsElement/AboutUsElement'

export function AboutUs() {
  // let file = props.file

  return (
    <div className={style['about-us']}>
      <div className={style['about-us__first']}>
        <img
          src={aboutUsImg}
          alt="about-us_img"
          className={style['about-us-img']}
        />
        <p>About Us</p>
        <h2 className={style['about-us__title']}>
          We Are <span>Making Ideas Better</span> For Everyone
        </h2>
        <p className={style['second-description']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
          imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean
          Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit
          faucibus est, dui interdum ut amet.
        </p>
        <Button />
      </div>
      <div className={style['about-us__second']}>
        {/* <AboutUsElement /> */}
      </div>
    </div>
  )
}
