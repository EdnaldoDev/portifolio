import React,{useRef, useState} from 'react'
import './style.css'
import emailjs from '@emailjs/browser'
// import { toast } from 'react-toastify'

function ContactMe(){
	const [loading, setIsloading]=useState(false)

	const form= useRef()
  
	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsloading(true)
		// Chama a função que envia o e-mail
		
		const template={
		  from_name:form.current[0].value,
		  from_email:form.current[1].value,
		  message:`
			from ${form.current[0].value}
			----------------------------------------------------
			${form.current[2].value}
		  `
		}
		
		try{
		  const res= await emailjs.send('service_fezw22o', 'template_fxoyoda', template, 'OXrpecUruoBULXLzr')
	
		  if(res.status===200){
			alert('Message sendded')
			// toast.success('Orçamento enviado com sucesso!')
		  }else{
			alert('Ops, try again!')
			// toast.error('Tente novamente, orçamento não enviado !')
		  }
		}catch(err){
			alert('Ops, try again!')
		//   toast.error(err)
		}finally{
		  setIsloading(false)
		}
	
	  };

	return(
		<div className='contact_me'>
			<h1>Contact<span className='border_bottom_titles'></span></h1>

			<form ref={form} onSubmit={handleSubmit}>
				<div className='contact_by_email'>
					<div>
						<label htmlFor="name">Name:</label>
						<input type="text" id='clientName' required/>
					</div>
					<div>
						<label htmlFor="email">Email:</label>
						<input type="text" id='clientEmail' required/>
					</div>
					<div>
						<label htmlFor="message">Nessage:</label>
						<textarea name="message" id="serviceDescrition" cols="30" rows="10" required></textarea>
					</div>

					{/* {loading && <div className="alert alert-info " role="alert">{respMailSend}</div>} */}

					<button type='submit' disabled={loading}>{loading ? 'Sending' : 'Send' }</button>
				</div>
				
			</form>

		</div>
	)
}


export default  ContactMe