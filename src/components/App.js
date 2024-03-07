import React, { useState } from 'react';
import Container from './App.style';
import Header from './Header/Header';
import Picture from './Picture/Picture';
import Services from './Services/Services';
import Contacts from './Contacts/Contacts';
import PictureSecond from './PictureSecond/PictureSecond';
import Departments from './Departments/Departments';
import Footer from './Footer/Footer';

export default function App() {
    const [isFixed, setIsFixed] = useState(false);

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
            <Contacts />
            <Footer />
        </Container>
    );
}