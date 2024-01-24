
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
	  title: 'Checkout Page',
	  altText: 'Checkout Page',
	  description: `This user-friendly page ensures a seamless journey from cart to completion,
		with a clean and intuitive interface. Enjoy a visually pleasing design that
		prioritizes simplicity without compromising functionality. With responsive elements and thoughtful details,
		this checkout page delivers a hassle-free process for a delightful customer experience.`,
	  imgSrc: Checkout,
	  demoLink: 'https://ednaldocs.github.io/checkoutPage/',
	  stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux']
	},
	{
	  title: 'Edie Home Page',
	  imgSrc: EdieHomePage,
	  altText: 'EdieHomePage page',
	  demoLink: 'https://ednaldocs.github.io/homepage/',
	  description: 'A visually appealing home page for Edie, showcasing a clean and intuitive design.',
	  stack: ['HTML', 'CSS', 'JavaScript', 'React']
	},
	{
	  title: 'Error Page',
	  imgSrc: ErrorPage,
	  altText: 'Error page',
	  demoLink: 'https://ednaldocs.github.io/erro-404/',
	  description: 'An error page with a creative design, providing a user-friendly experience even in unexpected situations.',
	  stack: ['HTML', 'CSS', 'JavaScript']
	},
	{
	  title: 'Gallery',
	  imgSrc: Galery,
	  altText: 'Galeria page',
	  demoLink: 'https://ednaldocs.github.io/my-gallery/',
	  description: 'An interactive gallery page, designed to showcase images in an elegant and engaging manner.',
	  stack: ['HTML', 'CSS', 'JavaScript']
	},
	{
	  title: 'Interior Designer',
	  imgSrc: InteriorDesign,
	  altText: 'Interior Designer page',
	  demoLink: 'https://ednaldocs.github.io/interior-consultant/',
	  description: 'A portfolio page for interior design projects, featuring a stylish and functional layout.',
	  stack: ['HTML', 'CSS', 'JavaScript', 'React']
	},
	{
	  title: 'Designer Team',
	  imgSrc: Myteam,
	  altText: 'Myteam page',
	  demoLink: 'https://ednaldocs.github.io/Myteam/',
	  description: 'A collaborative platform for design teams, promoting effective communication and project management.',
	  stack: ['HTML', 'CSS', 'JavaScript', 'React']
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
	  stack: ['HTML', 'CSS', 'JavaScript', 'React']
	},
	{
	  title: 'Random Quote motivacional',
	  imgSrc: RandomQuote,
	  altText: 'RandomQuote page',
	  demoLink: 'https://ednaldocs.github.io/randomQuote/',
	  description: 'A motivational quotes page, delivering daily inspiration with a sleek and modern design.',
	  stack: ['HTML', 'CSS', 'JavaScript']
	},
	{
	  title: 'Imagens Upload',
	  imgSrc: ImageUpload,
	  altText: 'Image Upload page',
	  demoLink: 'https://ednaldocs.github.io/img-upload/',
	  description: 'An image upload page, simplifying the process of sharing and managing images with user-friendly features.',
	  stack: ['HTML', 'CSS', 'JavaScript', 'React']
	},
	{
	  title: 'Genius Game',
	  imgSrc: GeniusGame,
	  altText: 'Genius Game page',
	  demoLink: 'https://ednaldocs.github.io/geniusGame/',
	  description: 'An interactive Genius Game, challenging users\' memory and reflexes in an engaging way.',
	  stack: ['HTML', 'CSS', 'JavaScript']
	},
	{
	  title: 'ToDo - lista de tarefas',
	  imgSrc: ToDo,
	  altText: 'ToDo page',
	  demoLink: 'https://ednaldocs.github.io/todoapp/',
	  description: 'A task management ToDo app, helping users stay organized and productive with a simple and effective interface.',
	  stack: ['HTML', 'CSS', 'JavaScript', 'React']
	},
	{
	  title: 'Clone Spotify',
	  imgSrc: SpotifyClone,
	  altText: 'SpotifyClone page',
	  demoLink: 'https://ednaldocs.github.io/spotifyClone/',
	  description: 'A Spotify clone page, replicating the music streaming experience with a responsive and visually appealing design.',
	  stack: ['HTML', 'CSS', 'JavaScript', 'React']
	},
	{
	  title: 'Finans',
	  imgSrc: Finans,
	  altText: 'Finans page',
	  demoLink: 'https://ednaldocs.github.io/finans/',
	  description: 'A financial management page, empowering users to take control of their finances with an intuitive and feature-rich interface.',
	  stack: ['HTML', 'CSS', 'JavaScript', 'React']
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
					<a href={item.demoLink} className='portfolio_item' target='_blank'>
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