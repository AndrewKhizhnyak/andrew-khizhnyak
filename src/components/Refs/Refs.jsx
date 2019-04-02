import React, { Component } from 'react'
import './Refs.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faTelegramPlane, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default class Refs extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="https://www.linkedin.cn/in/andrew-khizhnyak" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          <li><a href="https://github.com/AndrewKhizhnyak" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a href="https://t.me/askhizhnyak" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegramPlane} /></a></li>
          <li><a href="https://www.instagram.com/andrew.khizhnyak" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} /></a></li>
        </ul>
      </nav>
    )
  }
}
