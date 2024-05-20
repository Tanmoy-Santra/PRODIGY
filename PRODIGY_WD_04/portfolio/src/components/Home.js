import React from 'react'

import Type from './Type'
import About from './About'
import { Link } from 'react-router-dom'
import Navbar1 from './Navbar1'
import Buttompart from './Buttompart'
export default function Home() {
  return (
    <body>

      <div className='sticky-top'>
        <Navbar1></Navbar1>
      </div>
      <div class='main-content'>
        <div class='container my-5 py-5'>
          <div class="row ">
            <div class="col-sm-6 mb-5 mb-sm-0">
              <div class="card bg-transparent border-0">
                <div class="card-body">
                  <p class="card-text  text-size-custom-home">
                    Hi There! <span class='wave text-light' role='img' area-labelledby='wave'>👋🏻</span><br></br>I'M<span class='name-style '> TANMOY SANTRA</span>
                  </p>
                  <div id='Type' className='type-class'>
                    <Type />
                  </div>                 
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card bg-transparent border-0">
                <div class="card-body ">
                  <img class='card-body-img img-fluid ' src='./Picsart_23-11-25_10-09-58-455-removebg-preview.png' height='400px'></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='container'>
          <div class='second-container'>
            <div class="row">
              <div class="col-sm-6 mb-3 mb-sm-0 col-sm-6-border">
                <div class="card bg-transparent border-0">
                  <div class="card-body">
                    <p class="card-text text-size-custom-home"><span class='head-lower-card '>LET ME <span class='introduce'>INTRODUCE</span> MYSELF</span></p>
                    <p class='paragraph-body'>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️<br></br><br></br>I am fluent in classics like <span class='introduce'>C,python,Java and C++.</span><br></br><br></br>My field of Interest's are building new  <span class='introduce'>Web pages</span> and Products and also in areas related to <span class='introduce'>web development.</span><br></br><br></br>I also work with databases in PHP ,SQL inside my <span class='introduce'>Web development projects</span>  and Frameworks  <span class='introduce'>like React.js and Next.js</span></p>
                    
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-sm-6-border">
                <div class="card bg-transparent border-0">
                  <div class="card-body">
                    <img class="img-fluid rounded-start" src="./home-profile.png" height='300px'></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
            <div class='container py-5 my-5'><p class='text-center fs-1 text-light'>Professional <span class='introduce'>Skillset</span></p><br></br><br></br>

                <body>
                    <div class="alphabet-container">
                        <div class="alphabet-letter"><i id="icon-skill"class="fab fa-c fa-2x"></i></div>
                        <div class="alphabet-letter"><i id="icon-skill"class="fab fa-2x"></i>C++</div>
                        <div class="alphabet-letter"><i id="icon-skill"class="fab fa-html5 fa-2x"></i></div>
                        <div class="alphabet-letter"><i id="icon-skill"class="fab fa-css3 fa-2x"></i></div>
                        <div class="alphabet-letter"><i id="icon-skill"class="fab fa-bootstrap fa-2x"></i></div>
                        <div class="alphabet-letter"><i id="icon-skill"class="fab fa-python fa-2x"></i></div>
                        <div class="alphabet-letter"><i id="icon-skill"class="fab fa-java fa-2x"></i></div>
                        <div class="alphabet-letter"><i id="icon-skill"class="fab fa-react fa-2x"></i></div>
                        <div class="alphabet-letter"><i id="icon-skill"class="fab fa-node js fa-2x"></i></div>
                        <div class="alphabet-letter"><i id="icon-skill"class="fab fa-js fa-2x"></i></div>
                        <div class="alphabet-letter"><i id="icon-skill"class="fab fa-php fa-2x"></i></div>
                    </div>
                </body>
            </div>
        <Buttompart></Buttompart>
      </div>


    </body>
  )
}
