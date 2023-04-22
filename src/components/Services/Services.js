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
                            <ServiceIcon />
                            <ServiceInfo>
                                <ServiceName>Виклики на дім</ServiceName>
                                <ServiceText>Виклик лікаря на дім</ServiceText>
                            </ServiceInfo>
                        </ServiceBlock>
                        <ServiceBlock>
                            <ServiceIcon />
                            <ServiceInfo>
                                <ServiceName>Виклики на дім</ServiceName>
                                <ServiceText>Виклик лікаря на дім</ServiceText>
                            </ServiceInfo>
                        </ServiceBlock>
                        <ServiceBlock>
                            <ServiceIcon />
                            <ServiceInfo>
                                <ServiceName>Виклики на дім</ServiceName>
                                <ServiceText>Виклик лікаря на дім</ServiceText>
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