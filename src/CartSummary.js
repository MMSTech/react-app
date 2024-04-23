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
export default class CartSummary extends Component {

    renderSummary(){
        return (
            <div>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options -{this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                  {this.props.cart.map((cartItem) => (
                    <DropdownItem key={cartItem.product.id}>
                      {cartItem.product.ProductName}
                      <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)} >X</Badge>
                      <Badge color="success">{cartItem.quantity}</Badge>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          );
    }
  renderEmttyCart(){
return(
    <NavItem>
    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
  </NavItem>

)
  }
  render() {
    return <div>
        {this.props.cart.length>0?this.renderSummary():this.renderEmttyCart}
    </div>
  }
}


