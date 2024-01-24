import React,{useState} from 'react'
import './style.css'

import {Link} from 'react-router-dom'
	
function Header(){

	return (
		<header>
			<nav className="navbar navbar-expand-md  ">
				<Link to='/' className='navbar-brand'>Ednaldo.Front</Link>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse " id="navbarNav">
			    <ul className="navbar-nav ml-auto" id='ulNavbar'>
			      <li className="nav-item ">
			        <Link to='/' className='nav-link' >Home</Link>
			      </li>
			      {/* <li className="nav-item">
			        <Link to='/about-me' className='nav-link' >Sobre mim</Link>
			      </li> */}
			      <li className="nav-item" >
			       <Link to='/portfolio' className='nav-link'>Portfolio</Link>
			      </li>
			      <li className="nav-item" >
			        <Link to='/contact-me' className='nav-link' >Contato</Link>
			      </li>
			    </ul>
			  </div>
			</nav>

			{/*<div>
				<Link to='/' className='links'>DevEdnaldo</Link>
			</div>
			<div className='actionMenu'>
				<label htmlFor='checkbox-menu' id='actionMenu' >|||</label>
				<input type="checkbox" id='checkbox-menu' />
			</div>

			<nav id='menu'>
				<ul>
					<Link to='/' className='links' >Home</Link>
					<Link to='/about-me' className='links' >About me</Link>
					<Link to='/portfolio' className='links' >Portfolio</Link>
					<Link to='/contact-me' className='links' >Contato</Link>
				</ul>
			</nav>*/}
		</header>
	)
}

export default Header