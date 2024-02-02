
import React, { useState } from 'react'
import './style.css'


// Portfolio items
import Checkout from '../../assets/portfolioAssets/checkoutPage.png';
import EdieHomePage from '../../assets/portfolioAssets/edieHomePage.png';
import ErrorPage from '../../assets/portfolioAssets/erro404page.png';
import Galery from '../../assets/portfolioAssets/gallery.png';
import InteriorDesign from '../../assets/portfolioAssets/interiorDesigner.png';
import Myteam from '../../assets/portfolioAssets/myTeam.png';
import RecipePage from '../../assets/portfolioAssets/recipePage.png';
import RickAndMorth from '../../assets/portfolioAssets/Captura de tela de 2022-01-22 23-53-16.png';
import RandomQuote from '../../assets/portfolioAssets/Captura de tela de 2022-01-22 23-55-28.png';
import ImageUpload from '../../assets/portfolioAssets/Captura de tela de 2022-01-22 23-56-18.png';
import GeniusGame from '../../assets/portfolioAssets/Captura de tela de 2022-01-22 23-59-36.png';
import ToDo from '../../assets/portfolioAssets/Captura de tela de 2022-01-23 00-04-16.png';
import SpotifyClone from '../../assets/portfolioAssets/Captura de tela de 2022-01-23 00-48-12.png';
import Finans from '../../assets/portfolioAssets/Captura de tela de 2022-01-23 00-34-35.png'

const portfolioItems = [
	{
		title:'myfood',
		altText:'my food image ',
		description: 'Myfood is a personal online Menu project that includes a cart feature, whatsapp simples integration and full responsive layout.',
		imgSrc:'https://firebasestorage.googleapis.com/v0/b/gallery-40e70.appspot.com/o/images%2Fmyfoos.PNG?alt=media&token=36337415-fb4b-401b-b1cf-6336d6292ef8',
		demoLink:'https://pointfood.vercel.app/',
		stack:['React']
	},
	{
		title:'WebAutomatize',
		altText:'web automatize image',
		description:'A site to an agency of digital automation, with contact form 100% functional',
		imgSrc:'https://firebasestorage.googleapis.com/v0/b/gallery-40e70.appspot.com/o/images%2FwebA.PNG?alt=media&token=34e4072a-bfec-4f02-ae48-e408d586f29a',
		demoLink:'https://webautomatize.vercel.app/',
		stack:['React']
	},
	{
		title:'EyeStore',
		altText:'eyeStore',
		description:'This project is a simple ecommerce of mugs and t-shirts. Contain login, signup, and a functional cart feature.',
		imgSrc:'https://firebasestorage.googleapis.com/v0/b/gallery-40e70.appspot.com/o/images%2FstoreLg.PNG?alt=media&token=82db8da2-7cf0-405f-90c4-83b8a7ef0663',
		demoLink:'https://eyestore.vercel.app/',
		stack:['React']
	},
	{
	  title: 'Checkout Page',
	  altText: 'Checkout Page',
	  description: `This user-friendly page ensures a seamless journey from cart to completion,
		with a clean and intuitive interface. Enjoy a visually pleasing design that
		prioritizes simplicity without compromising functionality. With responsive elements and thoughtful details,
		this checkout page delivers a hassle-free process for a delightful customer experience.`,
	  imgSrc: Checkout,
	  demoLink: 'https://ednaldocs.github.io/checkout-page/',
	  stack: ['HTML', 'CSS', 'JavaScript', , 'Redux']
	},
	{
	  title: 'Interior Designer',
	  imgSrc: InteriorDesign,
	  altText: 'Interior Designer page',
	  demoLink: 'https://ednaldocs.github.io/interior-consultant/',
	  description: 'A portfolio page for interior design projects, featuring a stylish and functional layout.',
	  stack: ['HTML', 'CSS', 'JavaScript', ]
	},
	{
	  title: 'Página de receitas',
	  imgSrc: RecipePage,
	  altText: 'Receitas page',
	  demoLink: 'https://ednaldocs.github.io/recipe-blog/',
	  description: 'A recipe blog page, beautifully designed to inspire and share culinary creations.',
	  stack: ['HTML', 'CSS', 'JavaScript']
	},
	{
	  title: 'Rick And Morth personagens infos',
	  imgSrc: RickAndMorth,
	  altText: 'RickAndMorth page',
	  demoLink: 'https://ednaldocs.github.io/rickAndMortyApi/',
	  description: 'An informative page about Rick and Morty characters, providing interesting details and insights.',
	  stack: ['HTML', 'CSS', 'JavaScript', ]
	},
	{
	  title: 'Imagens Upload',
	  imgSrc: ImageUpload,
	  altText: 'Image Upload page',
	  demoLink: 'https://ednaldocs.github.io/img-upload/',
	  description: 'An image upload page, simplifying the process of sharing and managing images with user-friendly features.',
	  stack: ['HTML', 'CSS', 'JavaScript', ]
	},
	{
	  title: 'Clone Spotify',
	  imgSrc: SpotifyClone,
	  altText: 'SpotifyClone page',
	  demoLink: 'https://ednaldocs.github.io/spotifyClone/',
	  description: 'A Spotify clone page, replicating the music streaming experience with a responsive and visually appealing design.',
	  stack: ['HTML', 'CSS', 'JavaScript', ]
	},
	{
	  title: 'Finans',
	  imgSrc: Finans,
	  altText: 'Finans page',
	  demoLink: 'https://ednaldocs.github.io/finans/',
	  description: 'A financial management page, empowering users to take control of their finances with an intuitive and feature-rich interface.',
	  stack: ['HTML', 'CSS', 'JavaScript', ]
	}
  ];
  

function Portfolio() {
	const [stack, setStack]=useState('all')
	return (
		<div className='portfolio_container'>
			<h1>Portfolio</h1>

			<div className='filter'>
				<h5>Filter by stack</h5>
				<select onChange={(e)=>setStack(e.target.value)}>
					<option value='all'>All</option>
					<option value="HTML">HTML</option>
					<option value="CSS">CSS</option>
					<option value="JavaScript">JavaScript</option>
					<option value="React">React</option> 
				</select>
			</div>
			<div className='portfolio_itens_container'>
				{/*inicio portfolio item*/}
				{portfolioItems.filter((item)=>{
					if(stack==='all') return true;
					else if(item.stack.includes(stack)) return item;
				}).map((item)=>(
					<a href={item.demoLink} className='portfolio_item' target='_blank' rel='noreferrer'>
						<div className='portfolio_item--img'>
							<img src={item.imgSrc} alt={item.altText}/>
						</div>
						<div>
							<h3>{item.title}</h3>
							<p>{item.description}</p>
						</div>
					</a>
				))}

				
			</div>
		</div>
	)
}

export default Portfolio