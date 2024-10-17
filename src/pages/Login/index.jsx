import React from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap'
import styles from './Login.module.css'
import HederLogin from '../../components/HederLogin/HederLogin'
import img from '../../img/sahand-hoseini-BMVAYjPf6mU-unsplash.png'

const Login = () => {
  return (
    <div className={styles.containerLogin}>
      <div className={styles.cardLogin}>
        <div className={styles.cardBodyLogin}>
          <img src={img} alt="" />
        </div>
        <div className={styles.colHeaderLogin}>
            <HederLogin text={'Efetuar login'} className={styles.hederLogin}/>
        </div>
      </div>
    </div>
    
  )
}

export default Login
