import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100%;
    border-top: 1px solid ${props => props.theme.colors.lightGrey};
`;

export const FooterWrapper = styled.div`
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 0 auto;
    height: 60px;
`;

export const Copyright = styled.p`
   font-size: 14px;
`;