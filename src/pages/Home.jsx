import React,{useState} from 'react'
import Photo from '../assets/perfil-removebg-preview.png'

import './Home.css'

import {AiOutlineDown} from 'react-icons/ai';

import Portfolio from '../components/portfolio/'
import ContactMe from '../components/ContactMe/'
import Habilidades from '../components/Habilidades/'
import Sobre from '../components/Sobre/'


function Home() {
	
	return (
		<>
			<div className='home__container'>
				<div className='title'>
					<h1>Web Front-End Developer</h1>
					<p>Hey, i´m Ednaldo Cavalcante, a front-end developer based in São Paulo - Brazil</p>

					<div className='iconsSocial'>
						<a href="https://github.com/ednaldoCS" target='_blank'><i className="fab fa-github-square"></i></a>
						<a href="https://www.linkedin.com/in/ednaldo-cavalcante-3415161ab/" target='_blank'><i className="fab fa-linkedin" ></i></a>
						{/* <a href='https://api.whatsapp.com/send?phone=+5516997126087' target='_blank'><i className="fab fa-whatsapp-square"></i></a> */}
					</div>

					<Habilidades/>
				</div>	
				<div className='img'>
					<img src={Photo} alt="image home main"/>
				</div>
			</div>	

			<div className='icon__container'>
				<AiOutlineDown className='icon'/>
			</div>

			<main>
				<Portfolio/>

				<ContactMe/>
			</main>
		</>
	)
}

export default Home