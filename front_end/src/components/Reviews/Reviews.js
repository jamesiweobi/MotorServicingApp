import React from 'react'
import './Reviews.css'

function Reviews() {

    
    return (
        <div className='reviews'>
            <h2>Client's Love</h2>
            <div className="reviews__item__info">
            <i class="fas fa-quote-left"></i>
                <p>My Range Rover needed an oil change and they hooked it up</p>
                <h5>Yemisi</h5>
            <i class="fas fa-quote-right"></i>
            </div>
            <div className="reviews__item__info">
            <i class="fas fa-quote-left"></i>
                <p>I needed the to amp the performance of my BMW</p>
                <h5>Abdullah</h5>
            <i class="fas fa-quote-right"></i>
            </div>
            <div className="reviews__item__info">
            <i class="fas fa-quote-left"></i>
                <p>My AMG Mercedes needed some Anti-Lock brakes </p>
                <h5>James</h5>
            <i class="fas fa-quote-right"></i>
            </div>
            <div className="reviews__item__info">
            <i class="fas fa-quote-left"></i>
                <p>I needed some diagnostics to be done on my Audi</p>
                <h5>Midred</h5>
            <i class="fas fa-quote-right"></i>
            </div>
            <div className="reviews__item__info">
            <i class="fas fa-quote-left"></i>
                <p>My Lexus has been acting up, finally got it fixed</p>
                <h5>TY</h5>
            <i class="fas fa-quote-right"></i>
            </div>
            
        </div>
        
    )
}

export default Reviews
