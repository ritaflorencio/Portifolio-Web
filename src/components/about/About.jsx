import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import{FaAward} from 'react-icons/fa'
import {FaLanguage} from 'react-icons/fa'
import {GiPartyFlags} from 'react-icons/gi'

const about = () => {
  return (
    <section id='about'>

      <h5>
        Um pouco
      </h5>
      <h2>
        Sobre Mim
      </h2>
      
      <div className="container about__container">
        <div className="about__me"></div>
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experiencia</h5>
            <small>1+ Ano de estagio</small>
          </article>
          <article className='about__card'>
            <FaLanguage className='about__icon'/>
            <h5>Idiomas</h5>
            <small>Ingles</small>
          </article>
          <article className='about__card'>
            <GiPartyFlags className='about__icon'/>
            <h5>Hobbies</h5>
            <small>Astronomia</small>
          </article>
        </div>

        <p>
          Estudante de Engenaria, Instrumentação e robotica, estou em busca de seguir na area da programação.
        </p>

        <a href="#contact" className='btn btn-primary'>Vamos conversar!</a>

      </div>

    
      
      </section>
  )
}

export default about
