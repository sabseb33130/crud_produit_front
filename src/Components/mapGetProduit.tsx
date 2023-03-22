import { DeleteProduit } from './deletProd';

export function MapGetProduit({ data, test }: any) {
    return (
        <tr>
            <th scope="row">{data.id}</th>
            <td>{data.nom}</td>
            <td>{data.prix}</td>
            <td>{data.quantite}</td>
            <td className="me-2">
                <button className=" col btn btn-primary btn-sm p-0 me-5 mb-2">
                    Editer
                </button>

                <DeleteProduit data={data} test={test} />
            </td>
        </tr>
    );
}
