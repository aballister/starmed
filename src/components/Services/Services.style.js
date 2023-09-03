import styled from 'styled-components';

export const ServicesContainer = styled.div`
    width: 100%;
    background: ${props => props.theme.colors.lighterGrey};
`;

export const ServicesWrapper = styled.div`
    max-width: 1200px;
    flex: 1;
    margin: 0 auto;
    display: flex;
    align-items: stretch;
    padding: 40px 20px 40px 0;
    @media (max-width: 900px) {
        padding: 30px 20px 30px 0;
    }
    @media (max-width: 767px) {
        padding: 20px 20px 20px 0;
    }
    @media (max-width: 576px) {
        display: block;
        padding: 20px;
    }
    h2 {
        font-weight: normal;
        font-family: ${props => props.theme.fonts.semiBold};
        font-size: 32px;
        margin-bottom: 10px;
        padding-left: 20px;
        @media (max-width: 1100px) {
            font-size: 26px;
        }
        @media (max-width: 900px) {
            font-size: 22px;
            margin-bottom: 5px;
        }
        @media (max-width: 576px) {
            padding-left: 0;
        }
    }
`;

export const ServicesLeft = styled.div`
    width: calc(100% - 350px);
    padding-right: 20px;
    @media (max-width: 767px) {
        width: calc(100% - 300px);
    }
    @media (max-width: 576px) {
        width: 100%;
        margin-bottom: 30px;
        padding-right: 0;
    }
`;

export const ServicesRight = styled.div`
    width: 350px;
    display: flex;
    align-items: center;
    @media (max-width: 767px) {
        width: 300px;
    }
    @media (max-width: 576px) {
        width: 100%;
        justify-content: center;
    }
`;

export const ServiceBlocks = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ServiceBlock = styled.div`
    width: 50%;
    display: flex;
    margin-top: 30px;
    align-items: center;
    padding-left: 20px;
    @media (max-width: 767px) {
        width: 100%;
        margin-top: 20px;
    }
    @media (max-width: 576px) {
        padding-left: 0;
    }
`;

export const ServiceIcon = styled.img`
    width: 50px;
    height: 50px;
    @media (max-width: 1100px) {
        width: 35px;
        height: 35px;
    }
    @media (max-width: 767px) {
        width: 30px;
        height: 30px;
    }
`;

export const ServiceInfo = styled.div`
    padding-left: 20px;
    @media (max-width: 1100px) {
        padding-left: 15px;
    }
`;

export const ServiceText = styled.p`
    font-size: 16px;
    @media (max-width: 1100px) {
        font-size: 15px;
    }
    @media (max-width: 900px) {
        font-size: 14px;
    }
`;