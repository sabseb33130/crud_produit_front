import { TProduit } from '../Type/tProduit';
import { DeleteProduit } from './deletProd';

export function MapGetProduit(props: {
    data: any;
    prod: TProduit[];
    setProd: React.Dispatch<React.SetStateAction<TProduit[] | undefined>>;
}) {
    return (
        <tr>
            <th scope="row">{props.data.id}</th>
            <td>{props.data.nom}</td>
            <td>{props.data.prix}</td>
            <td>{props.data.quantite}</td>
            <td className="me-2">
                <button className=" col btn btn-primary btn-sm p-0 me-5 mb-2">
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
