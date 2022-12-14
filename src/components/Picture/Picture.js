import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import { PictureContainer, PictureWrapper } from './Picture.style';

export default function Picture() {
    return (
        <PictureContainer>
            <PictureWrapper>
                <div>
                    <h1>Some heading</h1>
                    <p>Some text</p>
                </div>
                <AppointmentForm />
            </PictureWrapper>
        </PictureContainer>
    );
}