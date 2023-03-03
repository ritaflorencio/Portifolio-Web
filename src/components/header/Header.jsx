import React from 'react'
import './header.css'
import CTA from './CTA'
import FOTOHEADER from '../../assets/fotoheader.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
        <div className="container header__container">
          <h5>
            Oi, eu sou a
          </h5>
          <h1>
            Rita
          </h1>
          <h5>
            Fullstack Developer
          </h5>
          <CTA />

          <HeaderSocials/>
          
          
          <div className='fotoheader'>
            <img src={FOTOHEADER} alt="fotoheader" />   
             </div>

             <a href='#contact' className='scroll__down'> Role Para Baixo</a>

             

        </div>


    </header>

  )
}

export default header