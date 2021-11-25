import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Product from "./Product";
import NewProduct from "./NewProduct";

import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { getAllProductsAction } from "../../store/actions/productsActions";
import { addNewProductsAction } from "../../store/actions/productsActions";

//
const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadows: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    width: "100%",
  },
}));

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = () => dispatch(getAllProductsAction());
    getAllProducts();
  }, []);

  const { loading, error, products } = useSelector((state) => state.products);

  return (
    <>
      <h2 className="text-center my-5">Listado de Productos</h2>
      {loading ? <h4 className="text-center"> Loading... </h4> : null}

      {error ? (
        <p className="alert alert-danger p-2 m-4 text-center">
          Ocurrio un error.
        </p>
      ) : null}

      <div className="row pb-2">
        <div className="col-12 text-right">
          <Link
            to={"/products/new"}
            className="btn btn-danger nuevo-post d-block d-md-inline-block"
          >
            Nuevo Producto &#43;
          </Link>
        </div>
      </div>

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Descripción</th>
            <th scope="col">Categoria</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0
            ? "No hay Productos"
            : products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
        </tbody>
      </table>
    </>
  );
};

export default Products;
