import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
export default class CartSummary extends Component {
  renderSummary() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Options -{this.props.cart.length}
          </DropdownToggle>
          <DropdownMenu>
            {this.props.cart.map((cartItem) => (
              <DropdownItem key={cartItem.product.id}>
                {cartItem.product.ProductName}
                <Badge
                  color="danger"
                  onClick={() => this.props.removeFromCart(cartItem.product)}
                >
                  X
                </Badge>
                <Badge color="success">{cartItem.quantity}</Badge>
              </DropdownItem>
            ))}

            <DropdownItem divider> </DropdownItem>

            <DropdownItem>
              <Link to="cart">goto cart</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }

  renderEmtyCart() {
    return (
      <NavItem>
        <NavLink href="https://github.com/reactstrap/reactstrap">
          Empty Card
        </NavLink>
      </NavItem>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderEmtyCart()}
      </div>
    );
  }
}
