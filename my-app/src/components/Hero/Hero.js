import styles from './hero.module.css'
import heroImg from '../../assets/images/hero-img.png'
import Button from '../Button/Button'

export function Hero() {
  return (
    <div className={styles['hero']}>
      <img src={heroImg} alt="heroImg" className={styles['hero-img']} />
      <h1 className={styles['agency-title']}>
        We Are The Best <span>Digital Agency</span> for business
      </h1>
      <p className={styles['agency-description']}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. .
      </p>
      <Button />
    </div>
  )
}
