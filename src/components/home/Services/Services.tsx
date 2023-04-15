import React from 'react'
import css from './Services.module.css';

const Services = () => {
  return (
    <div className={css.container}>
        <h3>Our services</h3>
    
        <p className={css.serviceText} >Desarrollo de paginas web</p>
        <p>Desarrollo de aplicaciones moviles</p>
    </div>
  )
}

export default Services