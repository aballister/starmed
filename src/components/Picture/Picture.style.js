import styled from 'styled-components';

export const PictureContainer = styled.div`
    background: url("picture.webp") no-repeat center top/ cover;
    width: 100%;
    height: calc(100vh - 130px);
`;

export const PictureWrapper = styled.div`
    max-width: 1200px;
    display: flex;
    align-items: center;
    flex: 1;
    margin: 0 auto;
    height: 100%;
    color: ${props => props.theme.colors.white};
    
    h1 {
        font-family: ${props => props.theme.fonts.bold};  
        font-weight: normal;
        font-size: 48px;
    }
`;