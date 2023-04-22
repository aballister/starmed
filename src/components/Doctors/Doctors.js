import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import {
    DoctorName,
    DoctorPosition,
    DoctorsContainer,
    DoctorsWrapper, DoctorText,
} from './Doctors.style';
import 'keen-slider/keen-slider.min.css';

export default function Doctors() {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 4,
            spacing: 30,
        },
        loop: true,
    });

    return (
        <DoctorsContainer>
            <DoctorsWrapper>
                <h2>
                    Наші лікарі
                </h2>
                <div
                    className='keen-slider'
                    ref={sliderRef}
                >
                    <div className='keen-slider__slide number-slide1'>
                        <img
                            alt=''
                            src='images/picture3.jpeg'
                        />
                        <DoctorName>Неїжпапа Петро Євстахійович</DoctorName>
                        <DoctorPosition>Око-горло-ніс</DoctorPosition>
                        <DoctorText>Дві медалі за гарне навчання</DoctorText>
                        <a href='google.com'>Запис на консультацію</a>
                    </div>

                    <div className='keen-slider__slide number-slide2'>2</div>
                    <div className='keen-slider__slide number-slide3'>3</div>
                    <div className='keen-slider__slide number-slide4'>4</div>
                    <div className='keen-slider__slide number-slide5'>5</div>
                    <div className='keen-slider__slide number-slide6'>6</div>
                </div>
            </DoctorsWrapper>
        </DoctorsContainer>
    );
}