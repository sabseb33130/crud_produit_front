import { useEffect, useReducer, useState } from 'react';

export function DeleteProduit({ data }: any) {
    const [refresh, setRefresh] = useState();
    const [delettProduit, setDelettProduit] = useState();
    /*  const ajoutProd = prod.filter(prod); */
    const delProduit = (e: React.BaseSyntheticEvent) => {
        const baseUrl = `http://localhost:8000/Api/produits/${data.id}`;
        const options = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };

        async function fetchData() {
            const response = await fetch(baseUrl, options);
            if (response.status === 404) {
                return alert('Votre produit est déjà supprimé');
            }
            const responseJson = await response.json();
            setDelettProduit(responseJson);

            alert(`${responseJson.message}`);
        }
        fetchData();
    };
    return (
        <button
            className="col btn btn-danger btn-sm p-0 me-5 mb-2"
            onClick={(e) => delProduit(e)}
        >
            Supprimer
        </button>
    );
}
