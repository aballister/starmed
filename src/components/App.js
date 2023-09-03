import React, { useState } from 'react';
import Container from './App.style';
import Header from './Header/Header';
import Picture from './Picture/Picture';
import Services from './Services/Services';
import Contacts from './Contacts/Contacts';
import PictureSecond from './PictureSecond/PictureSecond';
import Departments from './Departments/Departments';
import Doctors from './Doctors/Doctors';
import Footer from './Footer/Footer';

export default function App() {
    const [isFixed, setIsFixed] = useState(false);
    console.log(isFixed);
    return (
        <Container isFixed={isFixed}>
            <Header
                isFixed={isFixed}
                setIsFixed={setIsFixed}
            />
            <Picture />
            <Services />
            <PictureSecond />
            <Departments />
            <Doctors />
            <Contacts />
            <Footer />
        </Container>
    );
}