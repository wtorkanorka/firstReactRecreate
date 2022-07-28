import styles from './index.module.css'
import cx from 'classnames'
export function Typography({ tag = 'p', color, mb, children, className = '' }) {
  const Tag = tag
  const style =
    !color && !mb
      ? {}
      : {
          color,
          marginbottom: mb,
        }
  return (
    <Tag
      className={cx(
        {
          [styles['h1']]: tag === 'h1',
          [styles['h2']]: tag === 'h2',
          [styles['h3']]: tag === 'h3',
          [styles['h4']]: tag === 'h4',
          [styles['h5']]: tag === 'h5',
          [styles['h6']]: tag === 'h6',
          [styles['p']]: tag === 'p',
          [styles['span']]: tag === 'span',
        },
        className,
      )}
      style={style}
    >
      {children}
    </Tag>
  )
}
