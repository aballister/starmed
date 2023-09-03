import React, { useEffect, useState } from 'react';
import { animateScroll } from 'react-scroll';
import {
    ContactWrapper, Hamburger, CloseButton,
    HeaderContainer, HeaderWrapper, LogoSubtitle, LogoTitle, LogoTitleWrapper, LogoWrapper,
    MenuContainer, MenuInner, MenuItem, MenuItemLink, MenuItemSpan, MenuWrapper, Phone, PhoneBlock,
    PhoneWrapper,
} from './Header.style';
import PhoneIcon from '../../theme/svg/phone';
import MailIcon from '../../theme/svg/mail';
import LogoIcon from '../../theme/svg/logo';
import HamburgerIcon from '../../theme/svg/menu';
import CloseIcon from '../../theme/svg/close';

export default function Header({ setIsFixed, isFixed }) {
    function scrollToBlock(id) {
        const headerOffset = document.getElementById('menu').offsetHeight;
        const selectedOption = document.getElementById(id);
        if (selectedOption) {
            setTimeout(() => {
                const scrollValue = selectedOption.offsetTop - headerOffset;
                animateScroll.scrollTo(scrollValue);
            }, 250);
        }
    }

    const [offset, setOffset] = useState(0);
    const [fixed, setFixed] = useState(false);
    const [activeMenu, setActiveMenu] = useState('home');

    useEffect(() => {
        const onScroll = () => setOffset(scrollY);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setFixed(window.innerWidth > 576 ? offset > 30 : true);
        const headerOffset = document.getElementById('menu').offsetHeight;
        if (offset >= document.getElementById('contacts').offsetTop - document.getElementById('doctors').getBoundingClientRect().height / 2 - headerOffset) {
            setActiveMenu('contacts');
        } else if (offset >= document.getElementById('doctors').offsetTop - document.getElementById('departments').getBoundingClientRect().height / 2 - headerOffset) {
            setActiveMenu('doctors');
        } else if (offset >= document.getElementById('departments').offsetTop - document.getElementById('services').getBoundingClientRect().height / 2 - headerOffset) {
            setActiveMenu('departments');
        } else if (offset >= document.getElementById('services').offsetTop - document.getElementById('home').getBoundingClientRect().height / 2 - headerOffset) {
            setActiveMenu('services');
        } else {
            setActiveMenu('home');
        }
    }, [offset, window.innerWidth]);

    return (
        <HeaderContainer id='header'>
            <ContactWrapper>
                <HeaderWrapper>
                    <PhoneBlock>
                        <PhoneIcon
                            height={20}
                            width={20}
                        />
                        <Phone href='tel:380664088106'>
                            380 (66) 408-81-06
                        </Phone>
                        <Phone href='tel:380634088108'>
                            380 (63) 408-81-08
                        </Phone>
                        <Phone href='tel:380673129062'>
                            380 (67) 312-90-62
                        </Phone>
                    </PhoneBlock>
                    <PhoneBlock>
                        <MailIcon
                            height={20}
                            width={20}
                        />
                        <Phone href='mailto:aid@skm.clinic'>
                            aid@skm.clinic
                        </Phone>
                    </PhoneBlock>
                </HeaderWrapper>
            </ContactWrapper>
            <MenuWrapper
                id='menu'
                isFixed={fixed}
            >
                <HeaderWrapper>
                    <LogoWrapper>
                        <LogoIcon onClick={() => scrollToBlock('home')} />
                        <LogoTitleWrapper>
                            <LogoTitle>STARMED</LogoTitle>
                            <LogoSubtitle>health clinic</LogoSubtitle>
                        </LogoTitleWrapper>
                    </LogoWrapper>
                    <Hamburger onClick={() => setIsFixed(true)}>
                        <HamburgerIcon />
                    </Hamburger>
                    <MenuContainer isVisible={isFixed}>
                        <CloseButton onClick={() => setIsFixed(false)}>
                            <CloseIcon />
                        </CloseButton>
                        <MenuInner>
                            <MenuItem>
                                <MenuItemLink onClick={() => {
                                    setIsFixed(false);
                                    scrollToBlock('home');
                                }}
                                >
                                    <MenuItemSpan isActive={activeMenu === 'home'}>
                                        Головна
                                    </MenuItemSpan>
                                </MenuItemLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemLink onClick={() => {
                                    setIsFixed(false);
                                    scrollToBlock('services');
                                }}
                                >
                                    <MenuItemSpan isActive={activeMenu === 'services'}>
                                        Послуги
                                    </MenuItemSpan>
                                </MenuItemLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemLink onClick={() => {
                                    setIsFixed(false);
                                    scrollToBlock('departments');
                                }}
                                >
                                    <MenuItemSpan isActive={activeMenu === 'departments'}>
                                        Напрямки
                                    </MenuItemSpan>
                                </MenuItemLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemLink onClick={() => {
                                    setIsFixed(false);
                                    scrollToBlock('doctors');
                                }}
                                >
                                    <MenuItemSpan isActive={activeMenu === 'doctors'}>
                                        Лікарі
                                    </MenuItemSpan>
                                </MenuItemLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemLink onClick={() => {
                                    setIsFixed(false);
                                    scrollToBlock('contacts');
                                }}
                                >
                                    <MenuItemSpan isActive={activeMenu === 'contacts'}>
                                        Контакти
                                    </MenuItemSpan>
                                </MenuItemLink>
                            </MenuItem>
                        </MenuInner>
                        <PhoneBlock>
                            <PhoneIcon />
                            <PhoneWrapper>
                                <Phone href='tel:380664088106'>
                                    380 (66) 408-81-06
                                </Phone>
                                <Phone href='tel:380634088108'>
                                    380 (63) 408-81-08
                                </Phone>
                                <Phone href='tel:380673129062'>
                                    380 (67) 312-90-62
                                </Phone>
                            </PhoneWrapper>
                        </PhoneBlock>
                        <PhoneBlock>
                            <MailIcon />
                            <Phone href='mailto:aid@skm.clinic'>
                                aid@skm.clinic
                            </Phone>
                        </PhoneBlock>
                    </MenuContainer>
                </HeaderWrapper>
            </MenuWrapper>
        </HeaderContainer>
    );
}