export function UpdateProd() {
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
                            /*  onChange={(e) => inputChangeNom(e)} */
                            type="text"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">Prix</label>
                        <input
                            /* onChange={(e) => inputChangePrix(e)} */
                            name="prix"
                            type="number"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">Quantité</label>
                        <input
                            /*  onChange={(e) => inputChangeQuantite(e)} */
                            name="quantite"
                            type="number"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="text-start">
                        <button
                            /* onClick={(e) => buttonRetour(e)} */
                            type="submit"
                            className="btn btn-success  mb-2"
                        >
                            Modifier
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
