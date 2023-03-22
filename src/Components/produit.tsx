import { useEffect, useState } from 'react';
import { TProduit } from '../Type/tProduit';
import { MapGetProduit } from './mapGetProduit';
import { PostProduit } from './postProduit';

export function Produit() {
    const [prod, setProd] = useState<TProduit[]>();
    const [page, setPage] = useState();
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
    console.log(prod);

    const mapProduit = prod?.map((data: TProduit, i: number) => (
        <MapGetProduit
            data={data}
            prod={prod}
            setProd={setProd}
            setPage={setPage}
        />
    ));

    return (
        <div>
            {page === 'ajouter' && (
                <PostProduit prod={prod} setPage={setPage} setProd={setProd} />
            )}

            <div className="container table-responsive border-top border-primary mt-5">
                <table className=" table">
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
    );
}
