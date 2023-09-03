import styled from 'styled-components';

export const DoctorsContainer = styled.div`
    width: 100%;
    padding: 40px 0;
    @media (max-width: 900px) {
        padding: 30px 0;
    }
    @media (max-width: 767px) {
        padding: 20px 0;
    }
`;

export const DoctorsWrapper = styled.div`
    max-width: 1200px;
    flex: 1;
    margin: 0 auto;
    padding: 0 20px;
    
    h2 {
        font-weight: normal;
        font-family: ${props => props.theme.fonts.semiBold};
        font-size: 32px;
        margin-bottom: 20px;
        @media (max-width: 1100px) {
            font-size: 26px;
        }
        @media (max-width: 900px) {
            font-size: 22px;
        }
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