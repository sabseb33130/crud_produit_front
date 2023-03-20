import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Produit } from './Components/produit';
import { Header } from './Components/header';

function App() {
    const [page, setPage]: any = useState('');
    return (
        <div className="App">
            <Header />

            <Produit setPage={setPage} />
        </div>
    );
}

export default App;
