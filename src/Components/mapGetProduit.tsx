import { TProduit } from '../Type/tProduit';
import { DeleteProduit } from './deletProd';
import { UpdateProd } from './updateProd';

export function MapGetProduit(props: {
    data: any;
    prod: TProduit[];
    setProd: React.Dispatch<React.SetStateAction<TProduit[] | undefined>>;
    setPage: any;
}) {
    const upProd = (e: React.BaseSyntheticEvent) => {
        <UpdateProd />;
    };
    return (
        <tr>
            <th scope="row">{props.data.id}</th>
            <td>{props.data.nom}</td>
            <td>{props.data.prix}</td>
            <td>{props.data.quantite}</td>
            <td className="me-2">
                <button
                    type="button"
                    className="col btn btn-primary btn-sm p-0 me-5 mb-2 "
                    onClick={(e) => upProd(e)}
                >
                    Editer
                </button>

                <DeleteProduit
                    data={props.data}
                    prod={props.prod}
                    setProd={props.setProd}
                />
            </td>
        </tr>
    );
}
