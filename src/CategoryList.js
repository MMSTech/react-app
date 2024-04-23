import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [],
  };

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  componentDidMount() {
    this.getCategories();
  }

  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}-{this.props.info.description}
        </h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem active={category.CategoryName===this.props.currentCategory}
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.CategoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}
