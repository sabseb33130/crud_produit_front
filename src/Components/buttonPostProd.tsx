import { PostProduit } from './postProduit';

export function ButtonPostProd({ setPage }: any) {
    const buttonAffichProd = (e: React.BaseSyntheticEvent) => {
        setPage('ajouter');
    };

    return (
        <div className="text-start mt-5 ms-5">
            <button
                type="button"
                className="btn btn-primary btn-sm text-start mt-2 ms-5 "
                onClick={(e) => buttonAffichProd(e)}
            >
                Ajouter un produit
            </button>
        </div>
    );
}
