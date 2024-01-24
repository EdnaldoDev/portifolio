import React from 'react'

import './App.css';
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'
import Footer from './components/footer/'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import PortfolioPage from './pages/Portfolio.jsx'
import Contact from './pages/ContactMe.jsx'


function App (){

	return(
		<>
			<Header/>

			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/about-me' element={<About/>}/>
				<Route path='/portfolio' element={<PortfolioPage/>}/>
				<Route path='/contact-me' element={<Contact/>}/>
			</Routes>

			<Footer/>
		</>
	)
}

export default App