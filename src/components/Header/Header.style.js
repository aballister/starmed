import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background: ${props => props.theme.colors.white};
    width: 100%;
    box-shadow: ${props => props.theme.shadows.header};
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
    border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
`;

export const Logo = styled.div`
    width: 200px;
    height: 100px;
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

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const MenuItem = styled.a`
    color: ${props => props.theme.colors.primary};
    margin-left: 20px;
    @media (hover: hover) {
        &:hover {
            color: ${props => props.theme.colors.lightBlue};
        }
    }
`;