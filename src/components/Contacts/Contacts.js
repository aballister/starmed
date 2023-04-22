import React from 'react';
import {
    Contact,
    ContactsContainer,
    ContactsLeft, ContactsMap,
    ContactsRight,
    ContactsWrapper,
    ContactText,
    ContactTitle,
} from './Contacts.style';

export default function Contacts() {
    return (
        <ContactsContainer>
            <ContactsWrapper>
                <ContactsLeft>
                    <h2>Контакти</h2>
                    Форма
                </ContactsLeft>
                <ContactsRight>
                    <Contact>
                        <ContactTitle>
                            Наша адреса
                        </ContactTitle>
                        <ContactText>
                            м.Київ, вул. Гарматна 38а
                        </ContactText>
                    </Contact>
                    <Contact>
                        <ContactTitle>
                            Звʼяжіться з нами
                        </ContactTitle>
                        <ContactText>
                            380634164341
                        </ContactText>
                        <ContactText>
                            starkyivmed@info.com
                        </ContactText>
                    </Contact>
                    <Contact>
                        <ContactTitle>
                            Розклад роботи
                        </ContactTitle>
                        <ContactText>
                            Понеділок-пятниця 08:00-20:00
                        </ContactText>
                        <ContactText>
                            Субота 10:00-18:00
                        </ContactText>
                        <ContactText>
                            Неділя - вихідний
                        </ContactText>
                    </Contact>
                </ContactsRight>
            </ContactsWrapper>
            <ContactsMap>
                <iframe
                    allowFullScreen=''
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.9182587382998!2d30.429789500000005!3d50.44262320000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc1765193815%3A0x29c7ce800721c50e!2z0LLRg9C70LjRhtGPINCT0LDRgNC80LDRgtC90LAsIDM40JAsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1682167033022!5m2!1suk!2sua'
                    title='starkyivmed'
                />
            </ContactsMap>
        </ContactsContainer>
    );
}