import React from 'react';
import {
    DepartmentBlock,
    DepartmentBlocks, DepartmentIcon, DepartmentInfo,
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
                            <DepartmentIcon
                                alt='Сімейна медицина'
                                src='images/doctor.png'
                            />
                            <DepartmentInfo>
                                <DepartmentName>Сімейна медицина</DepartmentName>
                                <DepartmentText>бла бла бла</DepartmentText>
                            </DepartmentInfo>
                        </DepartmentBlock>
                        <DepartmentBlock>
                            <DepartmentIcon
                                alt='Терапія'
                                src='images/stethoscope.png'
                            />
                            <DepartmentInfo>
                                <DepartmentName>Терапія</DepartmentName>
                                <DepartmentText>бла бла бла</DepartmentText>
                            </DepartmentInfo>
                        </DepartmentBlock>
                        <DepartmentBlock>
                            <DepartmentIcon
                                alt='Кардіологія'
                                src='images/cardiology.png'
                            />
                            <DepartmentInfo>
                                <DepartmentName>Кардіологія</DepartmentName>
                                <DepartmentText>бла бла бла</DepartmentText>
                            </DepartmentInfo>
                        </DepartmentBlock>
                        <DepartmentBlock>
                            <DepartmentIcon
                                alt='Урологія'
                                src='images/urology.png'
                            />
                            <DepartmentInfo>
                                <DepartmentName>Урологія</DepartmentName>
                                <DepartmentText>бла бла бла</DepartmentText>
                            </DepartmentInfo>
                        </DepartmentBlock>
                        <DepartmentBlock>
                            <DepartmentIcon
                                alt='Травматологія'
                                src='images/injury.png'
                            />
                            <DepartmentInfo>
                                <DepartmentName>Травматологія</DepartmentName>
                                <DepartmentText>бла бла бла</DepartmentText>
                            </DepartmentInfo>
                        </DepartmentBlock>
                        <DepartmentBlock>
                            <DepartmentIcon
                                alt='Неврологія'
                                src='images/brain.png'
                            />
                            <DepartmentInfo>
                                <DepartmentName>Неврологія</DepartmentName>
                                <DepartmentText>бла бла бла</DepartmentText>
                            </DepartmentInfo>
                        </DepartmentBlock>
                        <DepartmentBlock>
                            <DepartmentIcon
                                alt='Гінекологія'
                                src='images/gynecology1.png'
                            />
                            <DepartmentInfo>
                                <DepartmentName>Гінекологія</DepartmentName>
                                <DepartmentText>бла бла бла</DepartmentText>
                            </DepartmentInfo>
                        </DepartmentBlock>
                        <DepartmentBlock>
                            <DepartmentIcon
                                alt='Масаж'
                                src='images/massage.png'
                            />
                            <DepartmentInfo>
                                <DepartmentName>Масаж</DepartmentName>
                                <DepartmentText>бла бла бла</DepartmentText>
                            </DepartmentInfo>
                        </DepartmentBlock>
                    </DepartmentBlocks>
                </DepartmentsRight>
            </DepartmentsWrapper>
        </DepartmentsContainer>
    );
}