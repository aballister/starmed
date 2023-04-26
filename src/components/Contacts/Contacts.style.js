import styled from 'styled-components';

export const ContactsContainer = styled.div`
    background: red;
    width: 100%;
`;

export const ContactsWrapper = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: green;
    flex: 1;
    margin: 0 auto;
`;

export const ContactsLeft = styled.div`
    width: 70%;
`;

export const ContactsRight = styled.div`
    flex: 1;
`;

export const Contact = styled.div`
    flex: 1;
`;

export const ContactTitle = styled.p`
    font-size: 16px;
    font-family: ${props => props.theme.fonts.semiBold};
`;

export const ContactText = styled.p`
    font-size: 14px;
`;

export const ContactsMap = styled.div`
    position: relative;
    .leaflet-container {
        height: 400px;
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