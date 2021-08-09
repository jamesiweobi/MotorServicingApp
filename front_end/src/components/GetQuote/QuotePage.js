import React from 'react'
import ContactForm from './ContactForm'
import VehicleForm from './VehicleForm'
import { SectionTitle } from '../HomePage/HomePage'

const QuotePage = () => {
    return (
        <div className='quote-page'>
            <SectionTitle text1='Book' text2='an appointment'/>
                <div className="wrapper"> 
                    <ContactForm/>
                    <VehicleForm/>
                </div>
        </div>
    )
}

export default QuotePage
