import { useState } from 'react';
import { TProduit } from '../Type/tProduit';

export function PostProduit(props: {
    setPage: any;
    setProd: React.Dispatch<React.SetStateAction<TProduit[] | undefined>>;
    prod: TProduit[] | undefined;
}) {
    const [nom, setChangeNom] = useState('');
    const [prix, setChangePrix] = useState<number>(0);
    const [quantite, setQuantite] = useState<number>(0);
    const [envoiProduit, setEnvoiProduit] = useState();
    const inputChangeNom = (e: React.BaseSyntheticEvent) => {
        const { value } = e.target;
        console.log(value);

        setChangeNom(value);
    };

    const inputChangePrix = (e: React.BaseSyntheticEvent) => {
        const { value } = e.target;

        setChangePrix(value);
    };
    const inputChangeQuantite = (e: React.BaseSyntheticEvent) => {
        const { value } = e.target;

        setQuantite(value);
    };

    const baseUrl = 'http://localhost:8000/Api/produits';
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            nom,
            prix,
            quantite,
        }),
    };

    const postProduit = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        fetch(baseUrl, options)
            .then((response) => response.json())
            .then((response) => {
                setEnvoiProduit(response.data);
                console.log(response);

                const refresh = [...props.prod!, response.data];
                props.setProd(refresh);
            })

            .catch((err) => console.error(err));
    };
    console.log(props.prod);

    const buttonRetour = (e: React.BaseSyntheticEvent) => {
        postProduit(e);
        props.setPage('accueil');
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
                            onChange={(e) => inputChangePrix(e)}
                            name="prix"
                            type="number"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">Quantité</label>
                        <input
                            onChange={(e) => inputChangeQuantite(e)}
                            name="quantite"
                            type="number"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="text-start">
                        <button
                            onClick={(e) => buttonRetour(e)}
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
