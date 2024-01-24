import React from 'react'
import './style.css'

import HtmlIcon from '../../assets/file_type_html_icon_130541.png'
import CssIcon from '../../assets/file_type_css_icon_130661.png'
import JsIcon from '../../assets/file_type_js_official_icon_130509.png'
import ReactIcon from '../../assets/react_original_logo_icon_146374.png'
import GitIcon from '../../assets/github-logo_icon-icons.com_73546.png'
import PhoneIcon from '../../assets/phone-volume_icon-icons.com_56474(1).png'

function Habilidades(){
	return(
		<div className='habilidades'>
			<h1>
				Top stacks
				<span className='border_bottom_titles'></span>
			</h1>
			<div className='habilidade_container'>
				<div className='habilidade_item'>
					<div className='img_container'>
						<img src={HtmlIcon} alt="liguagem icon"/>
					</div>
				</div>

				<div className='habilidade_item'>
					<div className='img_container'>
						<img src={CssIcon}alt="liguagem icon"/>
					</div>
				</div>

				<div className='habilidade_item'>
					<div className='img_container'>
						<img src={JsIcon} alt="liguagem icon"/>
					</div>
				</div>

				<div className='habilidade_item'>
					<div className='img_container'>
						<img src={ReactIcon} alt="liguagem icon"/>
					</div>
				</div>

				<div className='habilidade_item'>
					<div className='img_container'>
						<img src={GitIcon} alt="liguagem icon"/>
					</div>
				</div>
	 		</div>
		</div>
	)
}


export default Habilidades