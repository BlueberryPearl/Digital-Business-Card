import React from 'react';
import Photo from './Photo.jpg'


export default function Info() {
    return (
        <div className='information'>
            <img src={Photo} className='profilePic' alt='Profile' />
            <h2>Najette Chouchane</h2>
            <p>Frontend Developer</p>
            <a href='https://blueberrypearl.github.io/Portfolio/' target="_blank" rel="noopener noreferrer" className='website'><i class="fa-solid fa-laptop-code fa-sm"></i> Portfolio  </a>
            <div className='buttons'>
                <a href='mailto: najette@chouchane.com' className='email'><i class="fa-solid fa-envelope"></i>  Email</a>
                <a href='https://www.linkedin.com/in/najette-chouchane-a939abb9/' target="_blank" rel="noopener noreferrer" className='linkedIn'><i class="fa-brands fa-linkedin"></i>  LinkedIn</a>
            </div>
        </div>
    )
}