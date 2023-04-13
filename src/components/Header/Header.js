import React from 'react';
import {
    ContactWrapper,
    HeaderContainer, HeaderWrapper, Logo, MenuContainer, MenuItem, Phone, PhoneBlock,
} from './Header.style';
import PhoneIcon from '../../theme/svg/phone';
import MailIcon from '../../theme/svg/mail';

export default function Header() {
    return (
        <HeaderContainer>
            <ContactWrapper>
                <HeaderWrapper>
                    <PhoneBlock>
                        <PhoneIcon
                            height={20}
                            width={20}
                        />
                        <Phone href='tel:380634164341'>
                            380634164341
                        </Phone>
                        <Phone href='tel:380634164341'>
                            380634164341
                        </Phone>
                        <Phone href='tel:380634164341'>
                            380634164341
                        </Phone>
                    </PhoneBlock>
                    <PhoneBlock>
                        <MailIcon
                            height={20}
                            width={20}
                        />
                        <Phone href='mailto:google@com'>
                            google@com
                        </Phone>
                    </PhoneBlock>
                </HeaderWrapper>
            </ContactWrapper>
            <HeaderWrapper>
                <Logo />
                <MenuContainer>
                    <MenuItem href='#1'>
                        Головна
                    </MenuItem>
                    <MenuItem href='#2'>
                        Про клініку
                    </MenuItem>
                    <MenuItem href='#3'>
                        Послуги
                    </MenuItem>
                    <MenuItem href='#4'>
                        Ціни
                    </MenuItem>
                    <MenuItem href='#5'>
                        Контакти
                    </MenuItem>
                </MenuContainer>
            </HeaderWrapper>
        </HeaderContainer>
    );
}