import React from 'react'
import ContactForm from './ContactForm'
import { SectionTitle } from '../HomePage/HomePage'

const QuotePage = () => {
    return (
        <div className='quote-page'>
            <SectionTitle text1='Book' text2='an appointment'/>
                <div className="wrapper"> 
                    <ContactForm/>
                </div>
        </div>
    )
}

export default QuotePage
