import React, { Component } from "react";
import { Table } from "reactstrap";

export default class ProductList extends Component {
  state = {
    products: [],
  };

  getProducts = () => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div>
           <h3>
          {this.props.info.title}-{this.props.currentCategory}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#id</th>
              <th>CategoryId</th>
              <th>ProductName</th>
              <th>unitPrice</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product) => (
              <tr>
                <th scope="row">{product.id}</th>
                <td>{product.CategoryId}</td>
                <td>{product.ProductName}</td>
                <td>{product.unitPrice}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
