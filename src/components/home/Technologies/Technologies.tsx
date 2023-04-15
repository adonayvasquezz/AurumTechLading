import React from 'react'
import icont1 from '../../../../public/img/A1.png' 
import Image from 'next/image'
import css from './Technologies.module.css'

export const Technologies = () => {
  return (
    <div>
        <h2>Core Technologies</h2>
        <div className={css.techContainer}>         
            <div>
                <Image alt="technologie" src="/img/A1.png" width={100} height={100}/>
            </div>
            <div>
                <Image alt="technologie" src="/img/A1.png" width={100} height={100}/>
            </div>
            <div>
                <Image alt="technologie" src="/img/A1.png" width={100} height={100}/>
            </div>
            <div>
                <Image alt="technologie" src="/img/A1.png" width={100} height={100}/>
            </div>
        </div>
    </div>
  )
}
