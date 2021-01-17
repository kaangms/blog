import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";

function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props
}) {
  const [product, setProduct] = useState({ ...props.product });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.product]);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
    validate(name, value);
  }

  function validate(name, value) {
    if (name === "productName" && value === "") {
      setErrors((previousProduct) => ({
        ...previousProduct,
        productName: "Ürün İsmi olmalıdır",
      }));
    } else {
      setErrors((previousProduct) => ({
        ...previousProduct,
        productName: "",
      }));
    }
  }
  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      history.push("/");
    });
  }

  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}

export function getProductById(products, productId) {
  // eslint-disable-next-line no-use-before-define
  // eslint-disable-next-line eqeqeq
  let product = products.find((product) => product.id == productId) || null;
  return product;
}
function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.productId;
  const product =
    productId && state.getProductsReducer.length > 0
      ? getProductById(state.getProductsReducer, productId)
      : {};
  return {
    product,
    products: state.getProductsReducer,
    categories: state.getCategoriesReducer,
  };
}

const mapDispatchToProps = {
  getCategories,
  saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
