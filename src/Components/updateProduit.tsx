import { useState, useEffect } from 'react';

export function UpdateProduit() {
    /* const [upProd, setUpProd]: any = useState();

    const baseUrl = 'http://localhost:8000/Api/produits';
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: '{"nom":"string","prix":0,"quantite":0}',
    };
    useEffect(() => {
        fetch(baseUrl, options)
            .then((response) => response.json())
            .then((donnee) => setUpProd(donnee))

            .catch((erreur) => `${erreur}`);
    }, []);
    console.log(upProd); */
    return (
        <div>
            <div className="container border mt-2">
                <form>
                    <div className="mb-3 text-start">
                        <label className="form-label ">Nom</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nom"
                            aria-describedby="nom produit"
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">Prix</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">Quantité</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="text-start">
                        <button type="submit" className="btn btn-primary  mb-2">
                            Ajouter
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
