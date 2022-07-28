import styles from './hero.module.css'
import heroImg from '../../assets/images/hero-img.png'
import Button from '../Button/Button'
import { Typography } from '../Typography'
export function Hero() {
  return (
    <div className={styles['hero']}>
      <img src={heroImg} alt="heroImg" className={styles['hero-img']} />
      <Typography tag="h1" mb={18}>
        We Are The Best{' '}
        <Typography tag="span" color="var(--orange)">
          Digital Agency
        </Typography>{' '}
        for business
      </Typography>
      <Typography mb={25}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </Typography>
      <Button title="contact us" className={styles['contact-us-button']}>
        Contact us
      </Button>
    </div>
  )
}
