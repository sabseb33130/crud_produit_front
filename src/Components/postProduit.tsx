import e from 'express';
import React from 'react';
import { useRef, useState } from 'react';
import { PProduit } from '../Type/tProduit';

export function PostProduit({ prod }: any) {
    const newProduit: PProduit = {
        nom: '',
        prix: 0,
        quantite: 0,
    };

    const [envoiProduit, setEnvoiProduit] = useState({ newProduit });
    const inputChangeNom = (e: React.BaseSyntheticEvent) => {
        const { name, value } = e.target;

        setEnvoiProduit({
            ...prod,
            [name]: value,
        });

        setEnvoiProduit({ ...prod, [name]: value });
    };
    console.log(inputChangeNom);
    console.log(envoiProduit);

    /* 
    const inputChangePrix = (e: React.BaseSyntheticEvent) => {
        const { name, value } = e.target;
        if (name === 'prix') {
            setEnvoiProduit({
                ...prod,
                [name]: value,
            });
        }
        setEnvoiProduit({ ...prod, [name]: value });
    };
    const inputChangeQuantite = (e: React.BaseSyntheticEvent) => {
        const { name, value } = e.target;
        if (name === 'quantite') {
            setEnvoiProduit({
                ...prod,
                [name]: value,
            });
        }
        setEnvoiProduit({ ...prod, [name]: value });
    };
 */
    const baseUrl = 'http://localhost:8000/Api/produits';
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(envoiProduit),
    };

    const postProduit = (e: React.BaseSyntheticEvent) => {
        fetch(baseUrl, options)
            .then((response) => response.json())
            .then((response) => setEnvoiProduit(response.data))
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <div className="container border mt-2">
                <form>
                    <div className="mb-3 text-start">
                        <label
                            form="validationCustomNom"
                            className="form-label"
                        >
                            Nom
                        </label>
                        <input
                            onChange={(e) => inputChangeNom(e)}
                            type="text"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">Prix</label>
                        <input
                            onChange={(e) => inputChangeNom(e)}
                            name="prix"
                            type="number"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">Quantité</label>
                        <input
                            onChange={(e) => inputChangeNom(e)}
                            name="quantite"
                            type="number"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="text-start">
                        <button
                            onClick={(e) => postProduit(e)}
                            type="submit"
                            className="btn btn-primary  mb-2"
                        >
                            Ajouter
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
