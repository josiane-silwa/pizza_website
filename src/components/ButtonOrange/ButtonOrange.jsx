import React from 'react'
import styles from './ButtonOrange.module.css'

const ButtonOrange = (text) => {
  return (
    <div>
      <button className={styles.buttonOrange}>{text.text}</button>
    </div>
  )
}

export default ButtonOrange
