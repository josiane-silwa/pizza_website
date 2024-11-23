import React from 'react'
import styles from './Login.module.css'
import HederLogin from '../../components/HederLogin/HederLogin'
import './Login.module.css'
import CardImage from '../../components/CardImage/CardImage'


const Login = () => {
  return (
    <div className='container'>
      <div className='row'>
       <div className='col-sm-12 col-md-8'>
        <div>
          <CardImage/>
        </div>
       </div>
       <div className='col-sm-12 col-md-4'>
        <div className='row'>
          <div className='col-md-12'>
            <div className={styles.colHeaderLogin}>
              <HederLogin text={'Efetuar login'} className={styles.hederLogin}/>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
    
  )
}

export default Login
