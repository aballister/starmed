import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    position: relative;
`;

export const Hamburger = styled.button`
    display: none;
    cursor: pointer;
    @media (max-width: 576px) {
        display: block;
    }
    svg {
        width: 30px;
        height: 23px;
    }
`;

export const HeaderWrapper = styled.div`
    max-width: 1140px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    margin: 0 auto;
    padding: 5px 20px;
`;

export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    svg {
        height: 70px;
        width: 70px;
        @media (max-width: 900px) {
            height: 60px;
            width: 60px;
        }
        @media (max-width: 576px) {
            width: 40px;
            height: 40px;
        }
    }
`;

export const LogoTitleWrapper = styled.div`
    padding-left: 15px;
    padding-top: 5px;
    @media (max-width: 767px) {
        display: none;
    }
    @media (max-width: 576px) {
        display: block;
    }
`;

export const LogoTitle = styled.div`
    color: ${props => props.theme.colors.primaryBrand};
    font-size: 36px;
    line-height: 1;
    font-family: ${props => props.theme.fonts.spartan};
    @media (max-width: 900px) {
        font-size: 26px;
    }
    @media (max-width: 576px) {
        font-size: 22px;
    }
`;

export const LogoSubtitle = styled.div`
    color: ${props => props.theme.colors.primaryBrand};
    font-size: 16px;
    line-height: 1;
    font-family: ${props => props.theme.fonts.spartan};
    padding-left: 3px;
    @media (max-width: 900px) {
        font-size: 13px;
    }
    @media (max-width: 576px) {
        font-size: 12px;
    }
`;

export const ContactWrapper = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.white};
    border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
    @media (max-width: 576px) {
        display: none;
    }
`;

export const MenuWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    position: ${props => (props.isFixed ? 'fixed' : 'absolute')};
    box-shadow: ${props => (props.isFixed ? props.theme.shadows.header : 'transparent')};
    background: ${props => (props.isFixed ? props.theme.colors.white : props.theme.colors.white50)};
    top: ${props => (props.isFixed ? 0 : '30px')};
    transition: background 0.3s;
    height: 90px;
    @media (max-width: 900px) {
        height: 80px;
    }
    @media (max-width: 767px) {
        height: 70px;
    }
    @media (max-width: 576px) {
        top: 0;
        height: 50px;
    }
`;

export const Phone = styled.a`
    color: ${props => props.theme.colors.primary};
    margin-left: 15px;
    @media (max-width: 576px) {
        font-size: 18px;
        margin-bottom: 15px;
    }
    @media (hover: hover) {
        &:hover {
            color: ${props => props.theme.colors.lightBlue};
        }
    }
`;

export const PhoneWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 576px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const MenuInner = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    @media (max-width: 576px) {
        display: none;
        margin-bottom: 30px;
    }
`;

export const PhoneBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 576px) {
        align-items: flex-start;
    }
    svg {
        margin-right: -5px;
        height: 20px;
        width: 20px;
        @media (max-width: 576px) {
            height: 25px;
            width: 25px;
            margin-right: 0;
        }
    }
`;

export const MenuContainer = styled.div`
    @media (max-width: 576px) {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background: ${props => props.theme.colors.white};
        display: ${props => (props.isVisible ? 'block' : 'none')};
        padding: 30px;
        overflow: auto;
        ${MenuInner} {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
        }
    }
    ${PhoneBlock} {
        display: none;
        @media (max-width: 576px) {
            display: flex;
        }
    }
`;

export const MenuItem = styled.li`
    margin-left: 40px;
    @media (max-width: 900px) {
        margin-left: 30px;
    }
    @media (max-width: 576px) {
        margin-left: 0;
        margin-bottom: 20px;
    }
`;

export const MenuItemSpan = styled.span`
    display: block;
    position: relative;
    padding-bottom: 4px;
    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background: ${props => props.theme.colors.lightBlue};
        transform: ${props => (props.isActive ? 'scaleX(1)' : 'scaleX(0)')};
        transition: all 0.3s ease-in-out 0s;
    }
`;

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.primary};
    padding: 15px 0;
    font-size: 16px;
    line-height: 22px;
    display: block;
    cursor: pointer;
    font-family: ${props => props.theme.fonts.semiBold};
    @media (max-width: 900px) {
        padding: 10px 0;
        font-size: 15px;
    }
    @media (max-width: 767px) {
        font-size: 14px;
    }
    @media (max-width: 576px) {
        font-size: 18px;
    }
    @media (hover: hover) {
        &:hover {
            ${MenuItemSpan} {
                &:before {
                    transform: scaleX(1);
                }
            }
        }
    }
`;

export const CloseButton = styled.button`
    cursor: pointer;
    display: none;
    position: absolute;
    right: 10px;
    top: 5px;
    @media (max-width: 576px) {
        display: block;
    }
    svg {
        width: 40px;
        height: 40px;
    }
`;