import React from 'react'
import './contact.css'
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Vamos coversar!</h5>
      <h2>Meus contatos</h2>
      <div className="container contact_container">
        <article className="contact__options">
          <MdOutlineMarkEmailRead/>
          <h4>Email</h4>
          <h5>ritaflorenciodasilva@gamil.com</h5>
          <a href="mailto:ritaflorenciodasilva@gamil.com" target="blank">Mande uma mensagem</a>
        </article>
        <article className="contact__options">
          <BsWhatsapp/>
          <h4>WhatsApp</h4>
          
          <a href="https://api.whatsapp.cm/send?phone=+5511954789047" target="blank">Me ligue ou mande uma mensagem</a>
        </article>
        
      </div>

      {/* FORMULARIO O CONTATO*/}

<form action="">
  <input type="text" name='nome' placeholder='~Seu Nome Completo' required/>
  <input type="email" name='email' placeholder='~Seu Email' required/>
  <textarea name="mensagem" rows="7" placeholder='sua Mensagem' required></textarea>
  <button type='submit' className='btn btn-primary'>Enviar</button>
</form>







    </section>
  )
}

export default contact