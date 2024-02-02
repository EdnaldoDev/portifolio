import React,{useState} from 'react'
import './style.css'

import {Link, NavLink} from 'react-router-dom'
	
function Header(){

	return ( 
		<header>
			<nav >
				<Link to='/' >Ednaldo.Dev</Link>
				
				<div  id="navbarNav">
					<ul  id='ulNavbar'>
					<li >
						<NavLink to='/'>Home</NavLink>
					</li>
					{/* <li >
						<NavLink to='/about-me' className='nav-NavLink'>Sobre mim</NavLink>
					</li> */}
					<li >
						<NavLink to='/portfolio' >Portfolio</NavLink>
					</li>
					<li >
						<NavLink to='/contact-me' >Contact-me</NavLink>
					</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Header