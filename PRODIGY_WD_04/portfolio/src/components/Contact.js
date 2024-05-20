import React from 'react';
import Navbar1 from './Navbar1';

import { Link } from 'react-router-dom';
import Burrompart from './Buttompart';
import Buttompart from './Buttompart';
function Contact() {
  const contactItems = [
    { icon: 'fa-envelope', text: 'tanmoysantra911@.com' },
    { icon: 'fa-phone', text: '+91 8617551535' },
    { icon: 'fa-brands fa-whatsapp', text: '+91 8617551535' },
    // { icon: 'fa-brands fa-facebook', text: '' },
    // { icon: 'fa-brands fa-twitter', text: '' },
    { icon: 'fa-brands fa-github', text: 'https://github.com/Tanmoy-Santra' },
    { icon: 'fa-brands fa-linkedin', text: 'https://www.linkedin.com/in/tanmoy-santra-986b32252/' },
    
    
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
    <Navbar1></Navbar1>
    </div>
    <div className='container-main'>
    <div className="contact-container1 ">
      {contactItems.map((item, index) => (
        <div key={index} className="contact-item text-light">
          <i className={`fa ${item.icon}`} />
          <span className='text-light'>{item.text}</span>&nbsp;&nbsp;
          <button
            className="copy-button "
            onClick={() => handleCopyClick(item.text)}
          >
            Copy
          </button>
        </div>
      ))}
    <div>
       <Link to='/sendmsg'>
            <div className='height-msg'></div>
            <button className='extra-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-send-plus-fill" viewBox="0 0 16 16">
                       <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                        <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5"/>
                  </svg>&nbsp;Send Massage to me..
            </button>
         </Link>
    </div>   
    </div>
    </div>
    <div className='height-extra'></div>
    <Buttompart/>
    </div>
  );
}

export default Contact;
