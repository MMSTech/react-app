import React, { Component } from "react";
import { Table } from "reactstrap";
import { Button } from 'react-bootstrap';


export default class ProductList extends Component {
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
              <th>-</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.CategoryId}</td>
                <td>{product.ProductName}</td>
                <td>{product.unitPrice}</td>
                <td>
                    <Button 
                     onClick={()=>this.props.addToCart(product)}
                     color="info">Add</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
