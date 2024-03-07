import React from 'react';
import {
    Copyright, FooterContainer, FooterWrapper, Offer,
} from './Footer.style';

export default function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Offer>
                    <a
                        href='files/policy.pdf'
                        target='_blank'
                        title='Політика конфіденційності'
                    >
                        Політика конфіденційності
                    </a>
                    <a
                        href='files/price.pdf'
                        target='_blank'
                        title='Прайс-лист'
                    >
                        Прайс-лист
                    </a>
                </Offer>
                <Copyright>
                    {`«Старкиївмед» 2021-${new Date().getFullYear()}. Всі права захищені.`}
                </Copyright>
            </FooterWrapper>
        </FooterContainer>
    );
}