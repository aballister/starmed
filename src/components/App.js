import React from 'react';
import Container from './App.style';
import Header from './Header/Header';
import Picture from './Picture/Picture';
import Services from './Services/Services';
import Contacts from './Contacts/Contacts';
import PictureSecond from './PictureSecond/PictureSecond';
import Departments from './Departments/Departments';
import Doctors from './Doctors/Doctors';

export default function App() {
    return (
        <Container>
            <Header />
            <Picture />
            <Services />
            <PictureSecond />
            <Departments />
            <Doctors />
            <Contacts />
        </Container>
    );
}