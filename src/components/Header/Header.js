import React from 'react';
import {
    ContactWrapper,
    HeaderContainer, HeaderWrapper, Logo, MenuContainer, MenuItem,
    MenuItemLink, MenuItemSpan, MenuWrapper, Phone,
    PhoneBlock,
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
            <MenuWrapper>
                <HeaderWrapper>
                    <Logo />
                    <MenuContainer>
                        <MenuItem>
                            <MenuItemLink href='#1'>
                                <MenuItemSpan>
                                    Головна
                                </MenuItemSpan>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink href='#2'>
                                <MenuItemSpan>
                                    Послуги
                                </MenuItemSpan>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink href='#3'>
                                <MenuItemSpan>
                                    Відділення
                                </MenuItemSpan>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink href='#4'>
                                <MenuItemSpan>
                                    Лікарі
                                </MenuItemSpan>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink href='#5'>
                                <MenuItemSpan>
                                    Контакти
                                </MenuItemSpan>
                            </MenuItemLink>
                        </MenuItem>
                    </MenuContainer>
                </HeaderWrapper>
            </MenuWrapper>
        </HeaderContainer>
    );
}