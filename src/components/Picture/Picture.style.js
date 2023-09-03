import styled from 'styled-components';

export const PictureContainer = styled.div`
    background: url("images/picture.webp") no-repeat center top/ cover;
    width: 100%;
    height: calc(100vh - 30px);
    min-height: 450px;
    position: relative;
    @media (max-width: 900px) {
        min-height: 400px;
    }
    @media (max-width: 767px) {
        min-height: 350px;
    }
    @media (max-width: 576px) {
        background-position: 60% top;
        height: 100vh;
    }
    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        opacity: 0.3;
        background: ${props => props.theme.colors.primary};
    }
`;

export const PictureWrapper = styled.div`
    max-width: 1140px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex: 1;
    margin: 0 auto;
    height: 100%;
    color: ${props => props.theme.colors.white};
    z-index: 1;
    position: relative;
    
    h1 {
        font-family: ${props => props.theme.fonts.regular};  
        font-weight: normal;
        font-size: 70px;
        text-transform: uppercase;
        margin: 10px 0;
        @media (max-width: 900px) {
            font-size: 60px;
            margin: 5px 0;
        }
        @media (max-width: 767px) {
            font-size: 48px;
        }
    }
    h3 {
        font-family: ${props => props.theme.fonts.regular};
        font-weight: normal;
        font-size: 22px;
        @media (max-width: 900px) {
            font-size: 18px;
        }
        @media (max-width: 767px) {
            font-size: 16px;
        }
    }
    p {
        font-size: 18px;
        @media (max-width: 900px) {
            font-size: 16px;
        }
        @media (max-width: 767px) {
            font-size: 15px;
        }
    }
`;