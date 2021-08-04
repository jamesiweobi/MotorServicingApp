import React from 'react'
import './css/Quote.css'

const ContactForm = () => {
    return (
        <div className="contact-form">
            <div className="header">
                Contact Details
            </div>
            <form>
                <div className='contact-form-labels'>  
                    <input className='contact-form-input' name='fullName' autoComplete='off' type="text" placeholder="Your Full Name *"  />
                </div>

                <div  className='contact-form-labels'>  
                    <input className='contact-form-input' name='email' autoComplete='off' type="email" placeholder="Your Email *" />
                </div>

                <div  className='contact-form-labels'>  
                    <input className='contact-form-input' name='phone-number' autoComplete='off' type="phone" placeholder="Your Phone *" />
                </div>
                  
                <div  className='contact-form-labels'>  
                    <input className='contact-form-input' name='address' autoComplete='off' type="text" placeholder="Your Home Address *" />
                </div>

                <textarea className='contact-form-additional'rows="5" cols="50" name="comment" placeholder="Additional comments">

                </textarea>
           
            </form>
        
        </div>
    )
}

export default ContactForm
