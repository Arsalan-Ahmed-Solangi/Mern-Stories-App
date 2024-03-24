import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                   
                    <Link href="/"  className='navbar-brand text-primary fw-bold' style={{fontSize:30}}>STORIES APP</Link>
                  
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                       
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item m-1">
                                <Link className="nav-link ml-2 text-light btn btn-primary btn-sm" aria-current="page" to={"/"}><i className='fa fa-home'></i> Home</Link>
                            </li>
                            
                            <li className="nav-item m-1">
                                <Link className="nav-link  text-light btn btn-primary btn-sm" aria-current="page" href="/"><i className='fa fa-sign-in-alt'></i> SignIn</Link>
                            </li>
                            
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar