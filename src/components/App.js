import React from 'react';
import Container from './App.style';
import Header from './Header/Header';
import Picture from './Picture/Picture';
import About from './About/About';
import Services from './Services/Services';
import Contacts from './Contacts/Contacts';
import Prices from './Prices/Prices';

export default function App() {
    return (
        <Container>
            <Header />
            <Picture />
            <About />
            <Services />
            <Prices />
            <Contacts />
        </Container>
    );
}