import React from 'react';
import {
    DepartmentBlock,
    DepartmentBlocks, DepartmentIcon, DepartmentInfo,
    DepartmentName,
    DepartmentsContainer,
    DepartmentsLeft,
    DepartmentsRight,
    DepartmentsWrapper,
} from './Departments.style';

export default function Departments() {
    return (
        <DepartmentsContainer id='departments'>
            <DepartmentsWrapper>
                <DepartmentsLeft />
                <DepartmentsRight>
                    <h2>Наші напрямки</h2>
                    <DepartmentBlocks>
                        <DepartmentBlock>
                            <DepartmentIcon
                                alt='Сімейна медицина'
                                src='images/doctor.png'
                            />
                            <DepartmentInfo>
                                <DepartmentName>Сімейна медицина</DepartmentName>
                            </DepartmentInfo>
                        </DepartmentBlock>
                        <DepartmentBlock>
                            <DepartmentIcon
                                alt='Терапія'
                                src='images/stethoscope.png'
                            />
                            <DepartmentInfo>
                                <DepartmentName>Терапія</DepartmentName>
                            </DepartmentInfo>
                        </DepartmentBlock>
                        <DepartmentBlock>
                            <DepartmentIcon
                                alt='Кардіологія'
                                src='images/cardiology.png'
                            />
                            <DepartmentInfo>
                                <DepartmentName>Кардіологія</DepartmentName>
                            </DepartmentInfo>
                        </DepartmentBlock>
                        <DepartmentBlock>
                            <DepartmentIcon
                                alt='Урологія'
                                src='images/urology.png'
                            />
                            <DepartmentInfo>
                                <DepartmentName>Урологія</DepartmentName>
                            </DepartmentInfo>
                        </DepartmentBlock>
                        <DepartmentBlock>
                            <DepartmentIcon
                                alt='Травматологія'
                                src='images/injury.png'
                            />
                            <DepartmentInfo>
                                <DepartmentName>Травматологія</DepartmentName>
                            </DepartmentInfo>
                        </DepartmentBlock>
                        <DepartmentBlock>
                            <DepartmentIcon
                                alt='Неврологія'
                                src='images/brain.png'
                            />
                            <DepartmentInfo>
                                <DepartmentName>Неврологія</DepartmentName>
                            </DepartmentInfo>
                        </DepartmentBlock>
                        <DepartmentBlock>
                            <DepartmentIcon
                                alt='Гінекологія'
                                src='images/gynecology1.png'
                            />
                            <DepartmentInfo>
                                <DepartmentName>Гінекологія</DepartmentName>
                            </DepartmentInfo>
                        </DepartmentBlock>
                        <DepartmentBlock>
                            <DepartmentIcon
                                alt='Масаж'
                                src='images/massage.png'
                            />
                            <DepartmentInfo>
                                <DepartmentName>Масажі</DepartmentName>
                            </DepartmentInfo>
                        </DepartmentBlock>
                    </DepartmentBlocks>
                </DepartmentsRight>
            </DepartmentsWrapper>
        </DepartmentsContainer>
    );
}