import React from 'react';
import { AboutContainer, AboutWrapper } from './About.style';

export default function About() {
    return (
        <AboutContainer>
            <AboutWrapper>
                <h2>Про нас</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                    Quisque volutpat mattis eros.
                    Nullam malesuada erat ut
                    turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                </p>
            </AboutWrapper>
        </AboutContainer>
    );
}