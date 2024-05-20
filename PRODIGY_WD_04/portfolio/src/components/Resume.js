import React from 'react'
import Navbar1 from './Navbar1'
import { Link } from 'react-router-dom';
import Buttompart from './Buttompart';

export default function Resume() {
  const contactItems = [
    { icon: 'fa-brands fa-google-drive', text: 'https://drive.google.com/file/d/1psANLhY54-Wv01fsyv7q2dIZ82zmYPyV/view?usp=sharing' }


  ];

  const handleCopyClick = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Copied to clipboard: ' + text);
  };

  return (
    <div>
      <div className='sticky-top'>
        <Navbar1></Navbar1></div>
      <div className='container py-5 my-5 mx-5 px-5'>
        <div className="contact-container">          
          <img className='img' height={"1000px"}  src='./resume.png'></img>
         
          {contactItems.map((item, index) => (
            <div key={index} className="contact-item text-light">
              <i className={`fa ${item.icon}`} />
              <span className='text-light'><a href="https://drive.google.com/file/d/1psANLhY54-Wv01fsyv7q2dIZ82zmYPyV/view?usp=sharing">{item.text}</a></span>&nbsp;&nbsp;
              <button
                className="copy-button "
                onClick={() => handleCopyClick(item.text)}
              >
                Copy
              </button>&nbsp;&nbsp;
              <Link to='https://drive.google.com/file/d/1psANLhY54-Wv01fsyv7q2dIZ82zmYPyV/view?usp=sharing'>
              <button className='copy-button' >
                Open
              </button></Link>
            </div>
          ))}
        </div>
      </div>




    </div>

  )
}
