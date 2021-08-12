import React, { useState } from 'react'
import './css/slider.css'

const VehicleForm = () => {
    const [slider, setSlider] = useState(2007);
    const sliderInput = (e)=> {

        const value  = e.target.value
    
        setSlider(value);
          
    }
    
    return (
        <div className="contact-form">
            <div className="header">
                Vehicle Details
            </div>
            <form>
                <div className='contact-form-labels'>  
                    <input className='contact-form-input' name='fullName' autoComplete='off' type="text" placeholder="Vehicle Brand *"  />
                </div>

                <div  className='contact-form-labels'>  
                    <input className='contact-form-input' name='email' autoComplete='off' type="email" placeholder="Vehicle Make" />
                </div>

                <div  className='contact-form-labels'>
                    <div class="slider-box">
                        <p className='slider-label'>Vehicle year:</p>
                        <div className='slider-wrap'>
                            <input type='range' max='2022' min='1990' value={slider} onChange={sliderInput}/>
                            <p className='slider-year'> {slider} </p>
                        </div>
                        
                    </div>
                </div>

                <textarea className='vehicle-form-additional'rows="5" cols="50" name="comment" placeholder="Additional comments">

                </textarea>
           
               

           
            </form>
        
        </div>
    )
}

export default VehicleForm
