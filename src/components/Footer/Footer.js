import React from 'react';
import { Copyright, FooterContainer, FooterWrapper } from './Footer.style';

export default function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Copyright>Правова інформація: © 2022-2023 StarMed</Copyright>
            </FooterWrapper>
        </FooterContainer>
    );
}