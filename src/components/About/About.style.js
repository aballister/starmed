import styled from 'styled-components';

export const AboutContainer = styled.div`
    width: 100%;
`;

export const AboutWrapper = styled.div`
    max-width: 1200px;
    flex: 1;
    margin: 0 auto;
    padding: 30px 0;
    
    h2 {
        font-weight: normal;
        font-family: ${props => props.theme.fonts.semiBold};
        font-size: 30px;
        margin-bottom: 10px;
    }
`;