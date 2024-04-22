import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [
        { CategoryId: 1 , CategoryName: "Beverages" }, 
        { CategoryId: 2 , CategoryName: "Condiments"}, 
        { CategoryId: 3 , CategoryName:"Test"}
      ],
  };


  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}-{this.props.info.description}
        </h3>
        <ListGroup>

          {
          this.state.categories.map(category=> (
              <ListGroupItem onClick={()=> this.props.changeCategory(category)}
                key={category.CategoryId}>{category.CategoryName}</ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}
