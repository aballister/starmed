import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Theme from './components/Theme/Theme';
import { GlobalStyle } from './theme/global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Theme>
        <GlobalStyle />
        <App />
    </Theme>,
);