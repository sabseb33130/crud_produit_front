import { useEffect, useState } from 'react';

const baseUrl = 'http://localhost:8000/Api/produits';
export function Produit() {
    const [prod, setProd]: any = useState([]);

    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    useEffect(() => {
        fetch(baseUrl, options)
            .then((response) => response.json())
            .then((donnee) => setProd(donnee))

            .catch((erreur) => `${erreur}`);
    }, []);

    return (
        <div>
            <div className="container-fluid border border-primary bg-primary text-start text-light fs-1">
                <p>Produits</p>
            </div>
        </div>
    );
}
