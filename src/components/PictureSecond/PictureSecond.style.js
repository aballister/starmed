import styled from 'styled-components';

export const PictureSecondContainer = styled.div`
    background: url("images/picture2.webp") no-repeat center/ cover;
    width: 100%;
    height: 400px;
`;

export const PictureSecondWrapper = styled.div`
    max-width: 1140px;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 0 auto;
    height: 100%;
    color: ${props => props.theme.colors.white};
    
    h3 {
        font-family: ${props => props.theme.fonts.bold};  
        font-weight: normal;
        font-size: 42px;
        text-align: center;
        width: 100%;
        margin-bottom: 10px;
    }
    p {
        font-size: 20px;
        text-align: center;
        width: 100%
    }
`;