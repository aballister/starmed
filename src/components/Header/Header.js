import React from 'react';
import {
    Button, HeaderContainer, HeaderWrapper, Logo, MenuContainer, MenuItem, Phone, PhoneBlock,
} from './Header.style';

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <PhoneBlock>
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
                    <Phone href='mailto:google@com'>
                        google@com
                    </Phone>
                    <Button onClick={() => { console.log('action'); }}>
                        Запис на прийом
                    </Button>
                </PhoneBlock>
            </HeaderWrapper>
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