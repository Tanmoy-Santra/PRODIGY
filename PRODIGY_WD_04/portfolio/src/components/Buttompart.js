import React from 'react'
import { Link } from 'react-router-dom'
import SendMsg from './SendMsg'
export default function Buttompart() {
  return (
    <div>
      <div className='container my-5'>
      
                <div className="card text-center py-5 bg-transparent border-0">
                    <div className="card-body">
                        <p className="card-text text-size-custom-home custom-font">FIND ME ON</p><br></br>
                        <p className='font-light'>Feel free to <span className='introduce'>connect</span> with me</p>
                       
                    </div>                    
                    <div>
                      
                    <Link to='/sendmsg'>
                        <button className='extra-button'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-send-plus-fill" viewBox="0 0 16 16">
                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                            <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5"/>
                         </svg>&nbsp;Send Message to me..</button>
                    </Link>
                   </div>                  
                    <ul className="socials ">
                        <li><a href='#'><i className="fab fa-facebook"></i></a></li>
                        <li><a href='#'><i className="fab fa-twitter"></i></a></li>
                        <li><a href='#'><i className="fab fa-instagram"></i></a></li>
                        <li><a href='https://github.com/Tanmoy-Santra'><i className="fab fa-github"></i></a></li>
                        <li><a href='https://www.linkedin.com/in/tanmoy-santra-986b32252/'><i className="fab fa-linkedin-square"></i></a></li>
                    </ul>

                </div>
            </div>
            
            <nav  className="navbar  navbar-dark bg-dark sticky-buttom">
                <p id='disable' className='font-light px-5'>Designed and Developed by Tanmoy Santra</p>
                <p id='copyright' className='font-light px-5'>Copyright © 2023</p>
            </nav>
    </div>
  )
}
