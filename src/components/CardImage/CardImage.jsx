import React from 'react'
import styles from './CardImage.module.css'
import imgGoog from '../../img/icons8-google-play-50.png'
import imgMac from '../../img/icons8-mac-os-50.png'

const CardImage = () => {
  return (
    <div className={styles.CardImage}>
        {/*<img src={img} alt="" />*/}
        <div className={styles.titleOrange}>
            <p>Codar Pizza</p>
            <span>Pegue uma fatia</span>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 col-md-6 '>
                    <div className={styles.badgeAppstore}>
                        <div className='row'>
                            <div className='col-sm-3 col-md-3'>
                                <div>
                                    <img className={styles.imgGoogle} src={imgMac} alt="" />
                                </div>
                            </div>
                            <div className="col-sm-9 col-md-9">
                                <span className={styles.frase}>Download on the</span> <br/>
                                <span className={styles.brand}>App Store</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-6'>
                <div className={styles.badgeGoogle}>
                        <div className='row'>
                            <div className='col-sm-4 col-md-4'>
                                <div >            <img className={styles.imgGoogle} src={imgGoog} alt="" />
                                </div>
                            </div>
                            <div className="col-sm-8 col-md-8">
                                <span>Get it on</span> <br/>
                                <span>Google Play</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>    
    </div>
  )
}

export default CardImage
