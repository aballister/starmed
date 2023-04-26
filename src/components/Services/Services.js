import React from 'react';
import {
    ServiceBlock,
    ServiceBlocks, ServiceIcon, ServiceInfo,
    ServiceName,
    ServicesContainer,
    ServicesLeft,
    ServicesRight,
    ServicesWrapper,
    ServiceText,
} from './Services.style';

export default function Services() {
    return (
        <ServicesContainer>
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
                                <ServiceName>Виклики на дім</ServiceName>
                                <ServiceText>Виклик лікаря на дім</ServiceText>
                            </ServiceInfo>
                        </ServiceBlock>
                        <ServiceBlock>
                            <ServiceIcon
                                alt='Консультації в клініці'
                                src='images/home.png'
                            />
                            <ServiceInfo>
                                <ServiceName>Консультації в клініці</ServiceName>
                                <ServiceText>Консультації в клініці</ServiceText>
                            </ServiceInfo>
                        </ServiceBlock>
                        <ServiceBlock>
                            <ServiceIcon
                                alt='Онлайн консультації'
                                src='images/phone-call.png'
                            />
                            <ServiceInfo>
                                <ServiceName>Онлайн консультації</ServiceName>
                                <ServiceText>Консультації лікаря по телефону</ServiceText>
                            </ServiceInfo>
                        </ServiceBlock>
                        <ServiceBlock>
                            <ServiceIcon />
                            <ServiceInfo>
                                <ServiceName>Виклики на дім</ServiceName>
                                <ServiceText>Виклик лікаря на дім</ServiceText>
                            </ServiceInfo>
                        </ServiceBlock>
                    </ServiceBlocks>
                </ServicesLeft>
                <ServicesRight>
                    Форма
                </ServicesRight>
            </ServicesWrapper>
        </ServicesContainer>
    );
}