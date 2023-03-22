import { useState } from 'react';
import { TProduit } from '../Type/tProduit';

export function DeleteProduit(props: {
    data: any;
    prod: TProduit[];
    setProd: React.Dispatch<React.SetStateAction<TProduit[] | undefined>>;
}) {
    const [delettProduit, setDelettProduit] = useState('');

    const delProduit = (e: React.BaseSyntheticEvent) => {
        const baseUrl = `http://localhost:8000/Api/produits/${props.data.id}`;
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
            const newList = props.prod.filter(
                (elm: any) => elm.id !== props.data.id,
            );
            props.setProd(newList);
            alert(`${responseJson.message}`);
        }
        fetchData();
    };
    function refresh() {
        const newList = props.prod.filter(
            (elm: any) => elm.id !== props.data.id,
        );
        console.log(newList);
        return [...props.prod, newList];
    }

    function actionButton(e: React.BaseSyntheticEvent) {
        delProduit(e);
        refresh();
    }

    return (
        <button
            className="col btn btn-danger btn-sm p-0 me-5 mb-2"
            onClick={(e) => actionButton(e)}
        >
            Supprimer
        </button>
    );
}
