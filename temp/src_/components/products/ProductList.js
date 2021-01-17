import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Table, Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addToCart = (product) => {
    const cartItem = { product: product, quantity: 1 };
    this.props.actions.addToCart(cartItem);
    // this.props.actions.addToCart({product,quantity:1});
    alertify.success(product.productName + " sepete eklendi");
  };
  render() {
    return (
      <div>
        <h4>
          <Badge color="warning"> Products</Badge> -
          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h4>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>CategoryId</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>UnitsInStock</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.categoryId}</td>
                <td>
                  <Link to={"/saveproduct/"+product.id}>
                    {product.productName}
                  </Link>
                </td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  {" "}
                  <Button
                    color="primary"
                    onClick={() => this.addToCart(product)}
                  >
                    addToCart
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.getProductsReducer,
  };
}
function mapDispatchToPorps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToPorps)(ProductList);
