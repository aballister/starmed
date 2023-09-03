import React from 'react';
import { PictureContainer, PictureWrapper } from './Picture.style';

export default function Picture() {
    return (
        <PictureContainer id='home'>
            <PictureWrapper>
                <div>
                    <p>Вітаємо в клініці</p>
                    <h1>STARMED</h1>
                    <h3>Ми піклуємось про ваше здоров&apos;я</h3>
                </div>
            </PictureWrapper>
        </PictureContainer>
    );
}