import React from 'react';
import {
    MapContainer, Marker, Popup, TileLayer,
} from 'react-leaflet';
import 'leaflet/dist/images/marker-icon-2x.png';

import {
    Contact,
    ContactsContainer,
    ContactsLeft, ContactsMap, ContactsPhones, ContactsPhonesBlock,
    ContactsRight,
    ContactsWrapper,
    ContactText,
    ContactTitle,
} from './Contacts.style';
import Form from '../Form/Form';
import PhoneIcon from '../../theme/svg/phone';
import MailIcon from '../../theme/svg/mail';
import LocationIcon from '../../theme/svg/location';
import ScheduleIcon from '../../theme/svg/schedule';

const position = [50.44237788181851, 30.429111096230514];

export default function Contacts() {
    return (
        <ContactsContainer id='contacts'>
            <ContactsWrapper>
                <ContactsLeft>
                    <h2>Контакти</h2>
                    <Contact>
                        <ContactTitle>
                            Наша адреса
                        </ContactTitle>
                        <ContactsPhones>
                            <LocationIcon
                                height={20}
                                width={20}
                            />
                            <ContactsPhonesBlock>
                                <ContactText>
                                    <a
                                        href='https://maps.google.com/?q=50.44247213156252, 30.429201298174576'
                                        target='_blank'
                                    >
                                        м.Київ, вул. Гарматна 38а
                                    </a>
                                </ContactText>
                            </ContactsPhonesBlock>
                        </ContactsPhones>
                    </Contact>
                    <Contact>
                        <ContactTitle>
                            Звʼяжіться з нами
                        </ContactTitle>
                        <ContactsPhones>
                            <PhoneIcon
                                height={20}
                                width={20}
                            />
                            <ContactsPhonesBlock>
                                <ContactText>
                                    <a href='tel:380664088106'>380 (66) 408-81-06</a>
                                </ContactText>
                                <ContactText>
                                    <a href='tel:380634088108'>380 (63) 408-81-08</a>
                                </ContactText>
                                <ContactText>
                                    <a href='tel:380673129062'>380 (67) 312-90-62</a>
                                </ContactText>
                            </ContactsPhonesBlock>
                        </ContactsPhones>
                        <ContactsPhones>
                            <MailIcon
                                height={20}
                                width={20}
                            />
                            <ContactsPhonesBlock>
                                <ContactText>
                                    <a href='mailto:aid@skm.clinic'>aid@skm.clinic</a>
                                </ContactText>
                            </ContactsPhonesBlock>
                        </ContactsPhones>
                    </Contact>
                    <Contact>
                        <ContactTitle>
                            Розклад роботи
                        </ContactTitle>
                        <ContactsPhones>
                            <ScheduleIcon
                                height={20}
                                width={20}
                            />
                            <ContactsPhonesBlock>
                                <ContactText>
                                    Понеділок-пʼятниця 08:00-20:00
                                </ContactText>
                                <ContactText>
                                    Субота 10:00-18:00
                                </ContactText>
                                <ContactText>
                                    Неділя - вихідний
                                </ContactText>
                            </ContactsPhonesBlock>
                        </ContactsPhones>
                    </Contact>
                </ContactsLeft>
                <ContactsRight>
                    <Form />
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