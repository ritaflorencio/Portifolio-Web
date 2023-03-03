import React from 'react'
import './experiencia.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const experiencia = () => {
  return (
    <section id='experiencia'>
      
      <h5>Minhas Skills</h5>
      <h2>Linguagens & Frameworks</h2>

      <div className="container experiencia__container">

        <div className="experiencia__frontend">
          <h3>Desenvolvimeto Frontend</h3>
          <div className="experiencia__content">
            <article className='experiencia__details'>
              <BsFillPatchCheckFill className='experiencia__details-icon'/>
              <div>
                <h4>JAVASCRIPT</h4>
              <sMall className='text-light'>Intermediario</sMall>
              </div>
            </article>
            <article className='experiencia__details'>
              <BsFillPatchCheckFill className='experiencia__details-icon'/>
              <div>
                <h4>HTML</h4>
              <sMall className='text-light'>Intermediario</sMall>
              </div>
            </article>
            <article className='experiencia__details'>
              <BsFillPatchCheckFill className='experiencia__details-icon'/>
              <div>
                <h4>CSS</h4>
              <sMall className='text-light'>Intermediario</sMall>
              </div>
            </article>
            <article className='experiencia__details'>
              <BsFillPatchCheckFill className='experiencia__details-icon'/>
              <div><h4>REACT</h4>
              <sMall className='text-light'>Intermediario</sMall>
              </div>
            </article>
          </div>
        </div>

        <div className="experiencia__backend">
        <h3>Desenvolvimeto Backend</h3>
          <div className="experiencia__content">
            <article className='experiencia__details'>
              <BsFillPatchCheckFill className='experiencia__details-icon'/>
              <div>
                <h4>Node JS</h4>
              <sMall className='text-light'>Basico</sMall>
              </div>
            </article>
            <article className='experiencia__details'>
              <BsFillPatchCheckFill className='experiencia__details-icon'/>
              <div>
                <h4>SQL</h4>
              <sMall className='text-light'>Intermediario</sMall>
              </div>
            </article>
            <article className='experiencia__details'>
              <BsFillPatchCheckFill className='experiencia__details-icon'/>
              <div>
                <h4>python</h4>
              <sMall className='text-light'>Intermediario</sMall>
              </div>
            </article>
            <article className='experiencia__details'>
              <BsFillPatchCheckFill className='experiencia__details-icon'/>
              <div>
                <h4>Flask</h4>
              <sMall className='text-light'>Basico</sMall>
              </div>
            </article>
          </div>
        </div>

      </div>

    </section>
  )
}

export default experiencia