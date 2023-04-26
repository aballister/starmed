import React from 'react';
import {
    MapContainer, Marker, Popup, TileLayer,
} from 'react-leaflet';
import 'leaflet/dist/images/marker-icon-2x.png';

import {
    Contact,
    ContactsContainer,
    ContactsLeft, ContactsMap,
    ContactsRight,
    ContactsWrapper,
    ContactText,
    ContactTitle,
} from './Contacts.style';

const position = [50.44237788181851, 30.429111096230514];

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
                <MapContainer
                    center={position}
                    scrollWheelZoom={false}
                    zoom={13}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    <Marker position={position}>
                        <Popup>
                            <div>
                                <img
                                    alt=''
                                    height={20}
                                    src='images/location.png'
                                />
                                Гарматна 38а
                            </div>
                            <div>
                                <img
                                    alt=''
                                    height={20}
                                    src='images/smartphone.png'
                                />
                                <div>
                                    380634164341
                                    <br />
                                    380634164341
                                    <br />
                                    380634164341
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                </MapContainer>
            </ContactsMap>
        </ContactsContainer>
    );
}