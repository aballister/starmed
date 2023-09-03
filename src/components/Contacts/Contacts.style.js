import styled from 'styled-components';

export const ContactsContainer = styled.div`
    width: 100%;
    background: ${props => props.theme.colors.lighterGrey};
    border-top: 1px solid ${props => props.theme.colors.lighterGrey};
`;

export const ContactsWrapper = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    margin: 0 auto;
    padding: 40px 20px;
    @media (max-width: 900px) {
        padding: 30px 20px;
    }
    @media (max-width: 767px) {
        padding: 20px;
    }
    @media (max-width: 576px) {
        display: block;
    }
    
    h2 {
        font-weight: normal;
        font-family: ${props => props.theme.fonts.semiBold};
        font-size: 32px;
        margin-bottom: 15px;
        @media (max-width: 1100px) {
            font-size: 26px;
        }
        @media (max-width: 900px) {
            font-size: 22px;
        }
    }
`;

export const ContactsLeft = styled.div`
    width: calc(100% - 350px);
    padding-right: 20px;
    @media (max-width: 767px) {
        width: calc(100% - 300px);
    }
    @media (max-width: 576px) {
        width: 100%;
        margin-bottom: 30px;
    }
`;

export const ContactsRight = styled.div`
    width: 350px;
    display: flex;
    align-items: center;
    @media (max-width: 767px) {
        width: 300px;
    }
    @media (max-width: 576px) {
        width: 100%;
    }
`;

export const Contact = styled.div`
    line-height: 1.5;
    &+& {
        padding-top: 5px;
    }
`;

export const ContactTitle = styled.p`
    font-size: 16px;
    font-family: ${props => props.theme.fonts.semiBold};
    margin-top: 10px;
    margin-bottom: 5px;
`;

export const ContactText = styled.p`
    font-size: 14px;
    
    a {
        color: ${props => props.theme.colors.primary};
        
        @media (hover: hover) {
            &:hover {
                color: ${props => props.theme.colors.lightBlue};
            }
        }
    }
`;

export const ContactsMap = styled.div`
    position: relative;
    .leaflet-container {
        height: 400px;
        @media (max-width: 1100px) {
            height: 360px;
        }
    }
    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: ${props => props.theme.colors.lightGrey};
        opacity: 0.2;
        pointer-events: none;
    }
`;

export const ContactsPhones = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    
    svg {
        margin-top: 2px;
    }
    & + & {
        margin-top: 10px;
    }
`;

export const ContactsPhonesBlock = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
`;