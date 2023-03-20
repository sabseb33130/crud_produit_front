import { useContext, useEffect, useState } from 'react';
import { TProduit } from '../Type/tProduit';
import { UpdateProduit } from './updateProduit';

export function Produit({ setPage }: any) {
    const [prod, setProd]: any = useState();
    const [change, setChange]: any = useState();
    const baseUrl = 'http://localhost:8000/Api/produits';
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
    console.log(prod);
    const inputChange = (e: React.BaseSyntheticEvent) => {
        const { name, value } = e.target;
        console.log(name);
    };
    const test = prod?.data.map((data: TProduit, i: number) => (
        <div className="row">
            <div className="col">{data.id}</div>
            <div className="col">{data.nom}</div>
            <div className="col">{data.prix}</div>
            <div className="col">{data.quantite}</div>
            <div className="col">
                <div className="row">
                    <button className=" col btn btn-primary btn-sm p-0 me-2 mb-2">
                        Editer
                    </button>
                    <button className="col btn btn-danger btn-sm p-0 me-2 mb-2">
                        Supprimer
                    </button>
                </div>
            </div>
        </div>
    ));
    return (
        <div>
            <div className="text-start mt-5 ms-5">
                <button
                    type="button"
                    className="btn btn-primary text-start mt-2 ms-5"
                    onKeyUp={() => {
                        /*  <UpdateProduit /> */
                    }}
                >
                    Ajouter un produit
                </button>
            </div>
            <div className="container  border-top border-primary mt-5">
                <div className="row">
                    <div className="col">#</div>
                    <div className="col">Nom</div>
                    <div className="col">Prix</div>
                    <div className="col">Quantité</div>
                    <div className="col d-sm-none d-md-block">Action</div>
                </div>
                {test}
            </div>
        </div>
    );
}
