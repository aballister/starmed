import React from 'react';
import {
    ServiceBlock,
    ServiceBlocks, ServiceIcon, ServiceInfo,
    ServicesContainer,
    ServicesLeft,
    ServicesRight,
    ServicesWrapper,
    ServiceText,
} from './Services.style';
import Form from '../Form/Form';

export default function Services() {
    return (
        <ServicesContainer id='services'>
            <ServicesWrapper>
                <ServicesLeft>
                    <h2>Наші послуги</h2>
                    <ServiceBlocks>
                        <ServiceBlock>
                            <ServiceIcon
                                alt='Виклики на дім'
                                src='images/stethoscope1.png'
                            />
                            <ServiceInfo>
                                <ServiceText>Виклик лікаря на&nbsp;дім</ServiceText>
                            </ServiceInfo>
                        </ServiceBlock>
                        <ServiceBlock>
                            <ServiceIcon
                                alt='Консультації в клініці'
                                src='images/home.png'
                            />
                            <ServiceInfo>
                                <ServiceText>Консультації в&nbsp;клініці</ServiceText>
                            </ServiceInfo>
                        </ServiceBlock>
                        <ServiceBlock>
                            <ServiceIcon
                                alt='Онлайн консультації'
                                src='images/phone-call.png'
                            />
                            <ServiceInfo>
                                <ServiceText>Консультації лікаря по&nbsp;телефону</ServiceText>
                            </ServiceInfo>
                        </ServiceBlock>
                        <ServiceBlock>
                            <ServiceIcon
                                alt='Масажі'
                                src='images/ll.png'
                            />
                            <ServiceInfo>
                                <ServiceText>Листки непрацездатності</ServiceText>
                            </ServiceInfo>
                        </ServiceBlock>
                    </ServiceBlocks>
                </ServicesLeft>
                <ServicesRight>
                    <Form />
                </ServicesRight>
            </ServicesWrapper>
        </ServicesContainer>
    );
}