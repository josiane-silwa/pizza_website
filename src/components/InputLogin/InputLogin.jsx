import React from 'react'
import styles from './InputLogin.module.css'

const InputLogin = () => {
  return (
    <div className={styles.inputContainer}>
      <div > 
        <input className={styles.input} type="email" name="email-login" id="email-login" placeholder='Email'/>
      </div>
      <div>
        <input className={styles.input} type="password" name="password-login" id="password-login" placeholder='Senha'/>
      </div>
      <div className={styles.alterarSenha}>
        <a href="#">
          Esqueceu sua senha?
        </a>
      </div>
    </div>
  )
}

export default InputLogin
