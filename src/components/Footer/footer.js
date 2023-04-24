import React from 'react';
import { ReactComponent as InstagramLogo } from './Instagram Icon.svg';
import { ReactComponent as YoutubeLogo } from './youtube.svg';
import { ReactComponent as GitHubIcon } from './GitHub Icon.svg';

export default function Footer() {
    return (
        <div className='footer'>
            <a href="https://www.youtube.com/@blueberrypearl7087" target="_blank" rel="noopener noreferrer"><YoutubeLogo className='youtube-icon' /></a>
            <a href="https://www.instagram.com/blue.berrypearl/" target="_blank" rel="noopener noreferrer"><InstagramLogo className='instagram-icon' /></a>
            <a href="https://github.com/BlueberryPearl" target="_blank" rel="noopener noreferrer"><GitHubIcon className='gitHub-icon' /></a>
        </div>
    )
}