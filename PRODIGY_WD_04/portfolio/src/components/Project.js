import React from 'react'

import Navbar1 from './Navbar1'
import { Button } from 'react-bootstrap'
import Buttompart from './Buttompart'
export default function Project() {
    return (
        <body>
            <div className='sticky-top'>
                <Navbar1></Navbar1></div>
            <div className='container custom-container  my-5 py-5'>
                <div className="row row-cols-1 row-cols-md-3 g-4 auto-pading text-center">
                    <div className="col custom-column-border px-3 py-3 mx-2">
                        <div className="card h-100 bg-transparent ">
                            <img src="./calculator.png" className="card-img-hrefp" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title text-light text-center">Basic Calculator</h3>
                                <p className="card-text text-size-custom text-light">Here you calculate the basic problems like basic problrms
                                addition ,subtraction,multiplication,division,percentage .I mainly use Html , css , js for this Calculator App .</p>
                            </div>
                            <div className="card-footer text-center">
                                <Button href='https://my-basic-calcu-lator.netlify.app/' variant="info" className='mx-2'><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Demo</Button>{' '}
                                <Button href='' variant="info" className='mx-2'><i className="fab fa-github"></i>&nbsp;Github</Button>{' '}
                            </div>
                        </div>
                    </div>
                    <div className="col custom-column-border px-3 py-3 mx-auto">
                        <div className="card h-100  bg-transparent ">
                            <img src="./weatherApp.png" className="card-img-hrefp" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title text-light text-center">Weather App</h3>
                                <p className="card-text text-size-custom text-light">This is a Weather App , which shows you the weather details of a particular city. I mainly use Html ,css ,basic js for this website . I us the weather api.</p>
                            </div>
                            <div className="card-footer text-center">
                                <Button href='https://basicweather-app.netlify.app/' variant="info" className='mx-2'><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Demo</Button>{' '}
                                <Button href='' variant="info" className='mx-2'><i className="fab fa-github"></i>&nbsp;Github</Button>{' '}
                            </div>
                        </div>
                    </div>
                    <div className="col custom-column-border px-3 py-3 mx-2">
                        <div className="card h-100  bg-transparent ">
                            <img src="./bhoj2.png" className="card-img-hrefp" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-light text-center">Restaurant Website</h5>
                                <p className="card-text text-size-custom text-light">This is a basic website of a Restaurant .where you order your food, using Html,css & basic js .</p>
                            </div>
                            <div className="card-footer text-center">
                                <Button href='https://bhoj-restaurant.netlify.app/' variant="info" className='mx-2'><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Demo</Button>{' '}
                                <Button href='https://github.com/Tanmoy-Santra/Bhoj-Restaurant.git' variant="info" className='mx-2'><i className="fab fa-github"></i>&nbsp;Github</Button>{' '}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Buttompart></Buttompart>


        </body >
    )
}
