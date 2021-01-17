import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";
import * as productActions from "../../redux/actions/productActions";
class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.id);
  };
  render() {
    return (
      <div>
        {/* <h3>Category List-{this.props.categories.length}</h3> */}
        <h4>
          {" "}
          <Badge color="warning">Categories</Badge>
        </h4>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
              style={{ cursor: "pointer" }}
              active={this.props.currentCategory.id === category.id}
              onClick={() => this.selectCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.getCategoriesReducer,
  };
}
function mapDispatchToPorps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToPorps)(CategoryList);
