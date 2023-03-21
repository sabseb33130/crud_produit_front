import { useEffect, useState } from 'react';

export function DeleteProduit({ data, prod }: any) {
    const [refresh, setRefresh] = useState();
    const [delettProduit, setDelettProduit] = useState();
    const delProduit = (e: React.BaseSyntheticEvent) => {
        const baseUrl = `http://localhost:8000/Api/produits/${data.id}`;
        const options = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };

        async function fetchData() {
            const response = await fetch(baseUrl, options);
            if (response.status === 404) {
                return alert('Votre compte est déjà supprimé');
            }
            const responseJson = await response.json();
            setDelettProduit(responseJson);
            setRefresh({ ...prod });
            alert(`${responseJson.message}`);
        }
        fetchData();
    };
    return (
        <button
            className="col btn btn-danger p-0 me-2 mb-2"
            onClick={(e) => delProduit(e)}
        >
            Supprimer
        </button>
    );
}
