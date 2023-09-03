import React from 'react';
import { Copyright, FooterContainer, FooterWrapper } from './Footer.style';

export default function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Copyright>
                    {`«Старкиївмед» 2021-${new Date().getFullYear()}. Всі права захищені.`}
                </Copyright>
            </FooterWrapper>
        </FooterContainer>
    );
}