import React from 'react'
import './style.css'

import {Link} from 'react-router-dom'

function Sobre(){

	return(
		<>
			<div className='about_me'>
				<h1>
					Sobre
					<span className='border_bottom_titles'></span>
				</h1>

				<p>
					Olá, me chamo Ednaldo, tenho 19 anos e sou Desenvolverdor <strong>Front-End</strong> de Websites, WebApps. 
				</p>
				<p>
					Possuo experiência em desenvolvimento de sites e sistemas com HTML, CSS, JAVASCRIPT( reactJS), GITHUB.
				</p>

				<p>Fale comigo? <Link to='contact-me'>Entrar em contato</Link></p>
			</div>		
		</>
	)
}


export default Sobre