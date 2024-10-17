import React from 'react'
import styles from './HederLogin.module.css'
import { Card } from 'react-bootstrap'
import ButtonOrange from '../ButtonOrange/ButtonOrange'
import InputLogin from '../InputLogin/InputLogin'

const HederLogin = (text) => {
  return (
    <div className={styles.hederLogin}>
      {text.text}
      <div className={styles.lineOrange}></div>
      <div className={styles.lineGray}></div>
      <InputLogin />
      <ButtonOrange text={'Acessar'}/>
    </div>
  )
}

export default HederLogin
