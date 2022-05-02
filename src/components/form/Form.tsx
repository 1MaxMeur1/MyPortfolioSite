import React, {useState} from 'react'
import './form.css'
import emailjs from 'emailjs-com'

const Form: React.FC = () => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredMessage, setEnteredMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const submitHandler = (e: any):any => {
    e.preventDefault()
    setIsLoading(true)

    emailjs.sendForm('service_l2zjvw9', 'template_2n4s4la', e.target, 'PEaeFt8BVkEZ06Z-A')
    .then((result) => {
      setIsLoading(false)
      alert('Thank you. I will response later :)')
    })
  }

  return (
    <form className='form' onSubmit={submitHandler}>
        <div className="form__input">
            <input name="contact_number" type="text" placeholder='Your name' value={enteredName} onChange={e=> setEnteredName(e.target.value)}/>
        </div>
        <div  className="form__input">
            <input name="from_email" type="email" placeholder='Your email' value={enteredEmail} onChange={e => setEnteredEmail(e.target.value)}/>
        </div>
        <div className="form__input">
            <textarea name='html_message' placeholder='Write a message here...' value={enteredMessage} onChange={e => setEnteredMessage(e.target.value)}></textarea>
        </div>
        <button className='submit__btn' type='submit'>Submit</button>
        {
          isLoading ? <span><i className="ri-loader-2-fill"></i></span> : ''
        }
    </form>
  )
}

export default Form