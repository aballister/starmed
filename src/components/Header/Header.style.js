import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    &.fixed {
        box-shadow: ${props => props.theme.shadows.header};
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
    padding: 0 15px;
`;

export const ContactWrapper = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.white};
    border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
`;

export const MenuWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.white50};
`;

export const Logo = styled.div`
    width: 160px;
    height: 80px;
    background: yellow;
`;

export const PhoneBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const Phone = styled.a`
    color: ${props => props.theme.colors.primary};
    margin-left: 10px;
    @media (hover: hover) {
        &:hover {
            color: ${props => props.theme.colors.lightBlue};
        }
    }
`;

export const MenuContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
`;

export const MenuItem = styled.li`
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
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;
    }
`;

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.primary};
    padding: 15px 20px;
    font-size: 16px;
    line-height: 22px;
    display: block;
    font-family: ${props => props.theme.fonts.semiBold};
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