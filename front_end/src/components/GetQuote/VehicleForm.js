import React from 'react'

const VehicleForm = () => {
    return (
        <div className="contact-form">
        <h3>Vehicle Details</h3>
        <form className='contact-form-labels'>
            <div>  
                <label>Full Name</label>
                <input name='fullName' autoComplete='off' type="text" placeholder="Your fullname"  />
            </div>

            <div>  
                <label>Email Address</label>
                <input name='email' autoComplete='off' type="email" placeholder="Your email" />
            </div>

            <div>  
                <label>Phone</label>
                <input name='phone-number' autoComplete='off' type="number" placeholder="Your phone" />
            </div>
              
            <div>  
                <label>Home Address</label>
                <input name='address' autoComplete='off' type="text" placeholder="Your home Address" />
            </div>
       
        </form>
    
    </div>

    )
}

export default VehicleForm
