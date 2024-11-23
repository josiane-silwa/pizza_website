import React from 'react'
import styles from './ButtonOrange.module.css'

const ButtonOrange = (text) => {
  return (
    <div>
      <button className={styles.buttonOrange}>
        {text.text}
      </button>
      {/*<button type="button" className="btn btn-danger btn-lg  rounded-circle">
        Light
      </button>*/}
    </div>
  )
}

export default ButtonOrange
