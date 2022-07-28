import styles from './button.module.css'
import cx from 'classnames'
import { Link } from 'react-router-dom'
export default function Button({
  type = 'button',
  children,
  onClick,
  className = '',
  to,
  title,
}) {
  const classes = cx(styles['button'], className)
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }
  return (
    <button className={classes} type={type} onClick={onClick} title={title}>
      {children}
    </button>
  )
}
