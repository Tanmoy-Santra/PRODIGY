import React from 'react'
import Navbar1 from './Navbar1';
import Buttompart from './Buttompart';

export default function About() {
    return (
        <body>
            <div className='sticky-top'>
                <Navbar1></Navbar1></div>
                
            <div class='main-content'>

                <div class='container'>
                    <div class='second-container'>
                        <div class="row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <div class="card bg-transparent text-light border-0">
                                    <div class="card-body">
                                        <p class="card-text"><span class='head-lower-card fs-1'>KNOW <span class='introduce'>WHO </span> I'M</span></p>
                                        <p class='paragraph-body'>Hi Everyone, I am <span class='introduce'>Tanmoy Santra</span> from <span class='introduce'> West Bengal, India.</span><br></br><br></br>pursuing a Bachelor of Technology (B.Tech) degree in <span class='introduce'>Computer Science and Engineering</span> ,At  <span class='introduce'>MCKV Institute of Engineering .<br></br><br></br></span>Apart from coding, some other activities that I love to do!<br></br><br></br>
                                            <li>Playing Cricket</li>
                                            <li>Playing Online Games</li>
                                            <li>Watch Movies</li>                                           
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card bg-transparent border-0">
                                    <div class="card-body">
                                        <img class="img-fluid rounded-start" src="./new-frofile.png" height='300px'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class='container py-5 my-5'><p class='text-center fs-1 text-light'>Professional <span class='introduce'>Skillset</span></p><br></br><br></br>

                <body>
                    <div class="alphabet-container">
                        <div class="alphabet-letter"><i id ='icon-skill'class="fab fa-c fa-2x"></i></div>
                        <div class="alphabet-letter"><i id ='icon-skill'class="fab  fa-2x"></i>C++</div>
                        <div class="alphabet-letter"><i id ='icon-skill'class="fab fa-html5 fa-2x"></i></div>
                        <div class="alphabet-letter"><i id ='icon-skill'class="fab fa-css3 fa-2x"></i></div>
                        <div class="alphabet-letter"><i id ='icon-skill'class="fab fa-bootstrap fa-2x"></i></div>
                        <div class="alphabet-letter"><i id ='icon-skill'class="fab fa-python fa-2x"></i></div>
                        <div class="alphabet-letter"><i id ='icon-skill'class="fab fa-java fa-2x"></i></div>
                        <div class="alphabet-letter"><i id ='icon-skill'class="fab fa-react fa-2x"></i></div>
                        <div class="alphabet-letter"><i id ='icon-skill'class="fab fa-node js fa-2x"></i></div>
                        <div class="alphabet-letter"><i id ='icon-skill'class="fab fa-js fa-2x"></i></div>
                        <div class="alphabet-letter"><i id ='icon-skill'class="fab fa-php fa-2x"></i></div>


                    </div>
                </body>
            </div>
            <Buttompart></Buttompart>
        </body>
    )
}

