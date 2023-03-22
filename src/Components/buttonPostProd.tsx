import { TProduit } from '../Type/tProduit';
import { PostProduit } from './postProduit';

export function ButtonPostProd(props: {
    setPage: any;
    setProd: React.Dispatch<React.SetStateAction<TProduit[] | undefined>>;
    prod: TProduit[] | undefined;
}) {
    const buttonAffichProd = (e: React.BaseSyntheticEvent) => {
        props.setPage('ajouter');
        <PostProduit
            prod={props.prod}
            setProd={props.setProd}
            setPage={props.setPage}
        />;
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
