import styled from 'styled-components';

export const DoctorsContainer = styled.div`
    width: 100%;
    background: ${props => props.theme.colors.lighterGrey};
`;

export const DoctorsWrapper = styled.div`
    max-width: 1200px;
    flex: 1;
    margin: 0 auto;
    
    h2 {
        font-weight: normal;
        font-family: ${props => props.theme.fonts.semiBold};
        font-size: 32px;
        margin-bottom: 10px;
    }
    .keen-slider__slide {
        border: 1px solid;
        text-align: center;
        img {
            width: 100%;
        }
    }
`;

export const DoctorName = styled.p`
    font-size: 16px;
    font-family: ${props => props.theme.fonts.semiBold};
`;

export const DoctorPosition = styled.p`
    font-size: 14px;
    color: ${props => props.theme.fonts.lightGrey};
`;

export const DoctorText = styled.p`
    font-size: 14px;
`;