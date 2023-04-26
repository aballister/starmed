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
    }
`;

export const DepartmentsLeft = styled.div`
    width: 40%;
    background: url("images/picture4.jpeg") no-repeat center top/cover;
`;

export const DepartmentsRight = styled.div`
    flex: 1;
    padding: 30px;    
`;

export const DepartmentBlocks = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const DepartmentBlock = styled.div`
    width: 50%;
    display: flex;
    margin-top: 20px;
`;

export const DepartmentIcon = styled.img`
    width: 50px;
    height: 50px;
`;

export const DepartmentInfo = styled.div`
    padding-top: 8px;
    padding-left: 8px;
`;
export const DepartmentName = styled.p`
    font-size: 16px;
`;

export const DepartmentText = styled.p`
    font-size: 14px;
`;