import React from 'react';
import { PictureContainer, PictureWrapper } from './Picture.style';

export default function Picture() {
    return (
        <PictureContainer>
            <PictureWrapper>
                <div>
                    <p>Вітаємо в клініці</p>
                    <h1>Star Kyiv Med</h1>
                    <h3>Ваше здоров&apos;я - наша найбільша цінність</h3>
                </div>
            </PictureWrapper>
        </PictureContainer>
    );
}