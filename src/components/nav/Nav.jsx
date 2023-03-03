import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {DiCodeBadge} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'
import {MdOutlineContactPhone} from'react-icons/md'


const nav = () => {
  
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about" ><AiOutlineUser/></a>
      <a href="#experiencia"><FaReact/></a>
      <a href="#portfolio"><DiCodeBadge/></a>
      <a href="#contact"><MdOutlineContactPhone/></a>
    </nav>    

  )
}

export default nav