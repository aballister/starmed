import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100%;
    border-top: 1px solid ${props => props.theme.colors.lightGrey};
`;

export const FooterWrapper = styled.div`
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    margin: 0 auto;
    height: 60px;
    padding: 0 20px;
    @media (max-width: 767px) {
        flex-direction: column;
        height: auto;
        padding: 20px;
        justify-content: center;
    }
`;

export const Copyright = styled.p`
   font-size: 14px;
    @media (max-width: 767px) {
        margin-top: 20px;
        text-align: center;
    }
`;

export const Offer = styled.div`
   font-size: 14px;
    a {
        color: ${props => props.theme.colors.primary};
        text-decoration: underline;
        & + a {
            margin-left: 20px;
        }
    }
`;