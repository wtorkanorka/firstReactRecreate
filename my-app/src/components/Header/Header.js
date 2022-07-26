import styles from './Header.module.css'
import React from 'react'
import mainLogo from '../../assets/images/logo.svg'
import themeIcon from '../../assets/icons/light.svg'
import menuIcon from '../../assets/icons/menu.svg'

export function Header() {
  return (
    <header className={styles['mobile-header']}>
      <a href="/">
        <img src={mainLogo} alt="Digiency" />
      </a>

      <div className={styles['theme']}>
        <button className={styles['header-button']}>
          <img src={themeIcon} alt="Chenge Theme" />
        </button>
      </div>

      <div className={styles['menu']}>
        <button className={styles['header-button']}>
          <img src={menuIcon} alt="Menu" />
        </button>
      </div>
    </header>
  )
}
