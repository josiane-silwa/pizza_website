import React from 'react'
import styles from './InputLogin.module.css'
const InputLogin = () => {
  return (
    <div className={styles.inputLogin}>
      <div > 
        <input className={styles.inputContainer} type="email" name="email-login" id="email-login" placeholder='Email'/>
      </div>
      <div>
        <input className={styles.inputContainer} type="password" name="password-login" id="password-login" placeholder='Senha'/>
      </div>
      <a className={styles.alterarSenha} href="#">Esqueceu sua senha?</a>
    </div>
  )
}

export default InputLogin
