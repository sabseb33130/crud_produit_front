import { PostProduit } from './postProduit';

export function ButtonPostProd({ setPage }: any) {
    return (
        <div className="text-start mt-5 ms-5">
            <button
                type="button"
                className="btn btn-primary text-start mt-2 ms-5"
                onClick={(e) => <PostProduit setPage={setPage} />}
            >
                Ajouter un produit
            </button>
        </div>
    );
}
