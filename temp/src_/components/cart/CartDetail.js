import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Badge } from "reactstrap";
import alertify from "alertifyjs";
import * as cartActions from "../../redux/actions/cartActions" 
import { bindActionCreators } from "redux";
class CartDetail extends Component {
  removeFromCart = (product) => {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " sepetten silindi");
  };
  render() {
    return (
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Category Id</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Unit in Stock</th>
              <th>Quantitiy</th>
              <th>TotalPrice</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <td>{cartItem.product.id}</td>
                <td>{cartItem.product.categoryId}</td>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.product.unitsInStock}</td>
                <td>{cartItem.quantity}</td>
                <td>{cartItem.quantity * cartItem.product.unitPrice}</td>
                <td>
                  {" "}
                  <Badge
                    onClick={() => this.removeFromCart(cartItem.product)}
                    color="danger"
                  >
                    x
                  </Badge>
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
    cart: state.cartReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart:bindActionCreators(cartActions.removeFromCart,dispatch)
    },
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(CartDetail);
