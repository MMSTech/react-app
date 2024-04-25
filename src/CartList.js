import React, { Component } from "react";
import { Table } from "reactstrap";
import { Button } from 'react-bootstrap';

export default class CartList extends Component {
  renderCart() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units in Stock</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
           this.props.cart.map(cartItem=> (
            <tr key={cartItem.product.id}>
              <td>{cartItem.product.id}</td>
              <td>{cartItem.product.CategoryId}</td>
              <td>{cartItem.product.ProductName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.product.unitsInStock}</td>
              <td>{cartItem.product.quantityPerUnit}</td>
              <td>
                    <Button 
                    color="danger"
                     onClick={()=>this.props.removeFromCart(cartItem.product)}
                     >Remove</Button>
                </td>
            </tr>
          ))
          }
        </tbody>
      </Table>
    );
  }

  render() {
    return(
      <div>{this.renderCart()} </div>
    ) 
  }
}
