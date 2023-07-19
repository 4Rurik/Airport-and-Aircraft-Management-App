import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="btn btn-outline-success" to={'/'}>Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                            <Link className="dropdown-toggle btn btn-outline-success" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" to={'/aircrafts'}>Aircrafts</Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link className='dropdown-item' to={'/aircrafts/get'}>All Aircrafts</Link>
                            </li>
                            <li>
                                <Link className='dropdown-item' to={'/aircrafts/create'}>Create an Aircraft</Link>
                            </li>
                            <li>
                                <Link className='dropdown-item' to={'/aircrafts/update'}>Edit an Aircraft</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                            <Link className="dropdown-toggle btn btn-outline-success" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" to={'/aircrafts'}>Gates</Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link className="dropdown-item" to={'/gates/get'}>Show Gates</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to={'/gates/create'}>Create a Gate</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to={'/gates/update'}>Edit a Gate</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}
