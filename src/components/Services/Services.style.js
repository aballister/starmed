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
    
    h2 {
        font-weight: normal;
        font-family: ${props => props.theme.fonts.semiBold};
        font-size: 32px;
        margin-bottom: 10px;
    }
`;

export const ServicesLeft = styled.div`
    width: 70%;
    padding: 30px 0;
`;

export const ServicesRight = styled.div`
    flex: 1;
    padding: 30px 30px 30px 0;    
    background: ${props => props.theme.colors.white};
`;

export const ServiceBlocks = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ServiceBlock = styled.div`
    width: 50%;
    display: flex;
    margin-top: 20px;
`;

export const ServiceIcon = styled.div`
    width: 50px;
    height: 50px;
    background: yellow;
    border-radius: 100%;
`;

export const ServiceInfo = styled.div`
    padding-left: 20px;
`;

export const ServiceName = styled.p`
    font-size: 16px;
`;

export const ServiceText = styled.p`
    font-size: 14px;
`;