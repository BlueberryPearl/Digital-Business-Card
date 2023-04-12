import React from 'react';
import { ReactComponent as InstagramLogo } from './Instagram Icon.svg';
import { ReactComponent as TwitterIcon } from './Twitter Icon.svg';
import { ReactComponent as GitHubIcon } from './GitHub Icon.svg';

export default function Footer() {
    return (
        <div className='footer'>
            <a href="https://twitter.com/Najettechou" target="_blank" rel="noopener noreferrer"><TwitterIcon className='twitter-icon' /></a>
            <a href="https://www.instagram.com/blue.berrypearl/" target="_blank" rel="noopener noreferrer"><InstagramLogo className='instagram-icon' /></a>
            <a href="https://github.com/BlueberryPearl" target="_blank" rel="noopener noreferrer"><GitHubIcon className='gitHub-icon' /></a>
        </div>
    )
}