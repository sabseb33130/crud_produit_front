import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Produit } from './Components/produit';
import { Header } from './Components/header';
import { PostProduit } from './Components/postProduit';
import { TProduit } from './Type/tProduit';

function App(props: {
    prod: TProduit[] | undefined;
    setProd: React.Dispatch<React.SetStateAction<TProduit[] | undefined>>;
}) {
    return (
        <div className="App">
            <Header />

            <Produit />
        </div>
    );
}

export default App;
