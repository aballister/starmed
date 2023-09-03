import styled from 'styled-components';

export const PictureSecondContainer = styled.div`
    background: url("images/picture2.webp") no-repeat 50% 30%/ cover;
    width: 100%;
    height: 400px;
    position: relative;
    @media (max-width: 767px) {
        height: 300px;
    }
    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        opacity: 0.5;
        background: ${props => props.theme.colors.primaryBrand};
    }
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
    position: relative;
    z-index: 1;
    
    h3 {
        font-family: ${props => props.theme.fonts.semiBold};  
        font-weight: normal;
        font-size: 42px;
        text-align: center;
        width: 100%;
        margin-bottom: 10px;
        @media (max-width: 1100px) {
            font-size: 36px;
        }
        @media (max-width: 767px) {
            font-size: 28px;
        }
    }
    p {
        font-size: 22px;
        text-align: center;
        width: 100%;
        @media (max-width: 1100px) {
            font-size: 18px;    
        }
        @media (max-width: 767px) {
            font-size: 16px;
        }
    }
`;