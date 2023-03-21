import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Produit } from './Components/produit';
import { Header } from './Components/header';
import { PostProduit } from './Components/postProduit';

function App({ prod }: any) {
    const [page, setPage] = useState();
    console.log(page);
    return (
        <div className="App">
            <Header />
            {<PostProduit prod={prod} />}
            <Produit setPage={setPage} prod={prod} />
        </div>
    );
}

export default App;
