import React from 'react';
import {
    DepartmentBlock,
    DepartmentBlocks, DepartmentIcon,
    DepartmentName,
    DepartmentsContainer,
    DepartmentsLeft,
    DepartmentsRight,
    DepartmentsWrapper,
    DepartmentText,
} from './Departments.style';

export default function Departments() {
    return (
        <DepartmentsContainer>
            <DepartmentsWrapper>
                <DepartmentsLeft />
                <DepartmentsRight>
                    <DepartmentBlocks>
                        <DepartmentBlock>
                            <DepartmentIcon />
                            <DepartmentName>Сімейний лікар</DepartmentName>
                            <DepartmentText>бла бла бла</DepartmentText>
                        </DepartmentBlock>
                        <DepartmentBlock>
                            <DepartmentIcon />
                            <DepartmentName>Терапевт</DepartmentName>
                            <DepartmentText>бла бла бла</DepartmentText>
                        </DepartmentBlock>
                        <DepartmentBlock>
                            <DepartmentIcon />
                            <DepartmentName>Кардіолог</DepartmentName>
                            <DepartmentText>бла бла бла</DepartmentText>
                        </DepartmentBlock>
                        <DepartmentBlock>
                            <DepartmentIcon />
                            <DepartmentName>Уролог</DepartmentName>
                            <DepartmentText>бла бла бла</DepartmentText>
                        </DepartmentBlock>
                        <DepartmentBlock>
                            <DepartmentIcon />
                            <DepartmentName>Травматолог</DepartmentName>
                            <DepartmentText>бла бла бла</DepartmentText>
                        </DepartmentBlock>
                        <DepartmentBlock>
                            <DepartmentIcon />
                            <DepartmentName>Невролог</DepartmentName>
                            <DepartmentText>бла бла бла</DepartmentText>
                        </DepartmentBlock>
                    </DepartmentBlocks>
                </DepartmentsRight>
            </DepartmentsWrapper>
        </DepartmentsContainer>
    );
}