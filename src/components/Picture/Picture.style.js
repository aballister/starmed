import styled from 'styled-components';

export const PictureContainer = styled.div`
    background: url("images/picture.webp") no-repeat center top/ cover;
    width: 100%;
    height: 100vh;
    min-height: 450px;
`;

export const PictureWrapper = styled.div`
    max-width: 1140px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    flex: 1;
    margin: 0 auto;
    height: 100%;
    color: ${props => props.theme.colors.primary};
    
    h1 {
        font-family: ${props => props.theme.fonts.bold};  
        font-weight: normal;
        font-size: 48px;
    }
`;