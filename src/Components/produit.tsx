import { useEffect, useState } from 'react';
import { TProduit } from '../Type/tProduit';
import { ButtonPostProd } from './buttonPostProd';
import { MapGetProduit } from './mapGetProduit';

export function Produit({ setPage }: any) {
    const [prod, setProd]: any = useState();

    const baseUrl = 'http://localhost:8000/Api/produits';
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    useEffect(() => {
        fetch(baseUrl, options)
            .then((response) => response.json())
            .then((response) => setProd(response.data))

            .catch((erreur) => `${erreur}`);
    }, []);

    const mapProduit = prod?.map((data: TProduit, i: number) => (
        <MapGetProduit data={data} prod={prod} setPage={setPage} />
    ));

    return (
        <div>
            <ButtonPostProd setPage={setPage} />
            <div className="container  border-top border-primary mt-5">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Prix</th>
                                <th scope="col">Quantité</th>
                            </tr>
                        </thead>
                        <tbody>{mapProduit}</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
