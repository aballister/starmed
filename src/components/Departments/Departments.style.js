import styled from 'styled-components';

export const DepartmentsContainer = styled.div`
    width: 100%;
    background: ${props => props.theme.colors.lighterGrey};
`;

export const DepartmentsWrapper = styled.div`
    max-width: 100%;
    flex: 1;
    margin: 0 auto;
    display: flex;
    align-items: stretch;
    
    h2 {
        font-weight: normal;
        font-family: ${props => props.theme.fonts.semiBold};
        font-size: 32px;
        margin-bottom: 10px;
        @media (max-width: 1100px) {
            font-size: 26px;
        }
        @media (max-width: 900px) {
            font-size: 22px;
        }
    }
`;

export const DepartmentsLeft = styled.div`
    width: 40%;
    background: url("images/picture4.jpeg") no-repeat center top/cover;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        opacity: 0.3;
        background: ${props => props.theme.colors.primaryBrand};
    }
    @media (max-width: 576px) {
        display: none;
    }
`;

export const DepartmentsRight = styled.div`
    flex: 1;
    padding: 40px 20px 40px 30px;
    @media (max-width: 900px) {
        padding: 30px 20px 30px 20px;
    }
    @media (max-width: 767px) {
        padding: 20px 20px 20px 10px;
    }
    @media (max-width: 576px) {
        padding: 20px;
    }
    h2 {
        padding-left: 20px;
        @media (max-width: 576px) {
            padding-left: 0;
        }
    }
`;

export const DepartmentBlocks = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const DepartmentBlock = styled.div`
    width: 50%;
    display: flex;
    margin-top: 20px;
    align-items: center;
    padding-left: 20px;
    @media (max-width: 576px) {
        padding-left: 0;
    }
`;

export const DepartmentIcon = styled.img`
    width: 50px;
    height: 50px;
    @media (max-width: 767px) {
        width: 30px;
        height: 30px;
    }
`;

export const DepartmentInfo = styled.div`
    padding-left: 15px;
`;
export const DepartmentName = styled.p`
    font-size: 16px;
    @media (max-width: 1100px) {
        font-size: 15px;
    }
    @media (max-width: 767px) {
        font-size: 14px;
    }
`;