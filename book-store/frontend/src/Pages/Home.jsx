import React from 'react'
import './Home.css'
import Banner from '../Images/Banner.jpg'
const Home = () => {
    return (
        <div className='Home-page bg-dark text-white container-fluid d-flex justify-content-center align-items-center'>
            <div className="row container">
                <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
                    style={{ height: "91.5vh" }}
                >
                    <h2 style={{fontSize:"90px"}}>BOOK STORE</h2>
                    <h3 style={{fontSize:"70px"}}>FOR YOU</h3>
                    <p className='mb-0' style={{color:"silver"}}>Checkout The Books From Here</p>
                    <button className='viewBook my-3'>View Books</button>
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
                    style={{ height: "91.5vh" }}
                >
                    <img className='img-fluid' src={Banner} alt="banner-img" />
                </div>
            </div>
        </div>
    )
}

export default Home
