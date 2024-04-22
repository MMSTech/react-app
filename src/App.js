import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  //Arrow function , bir fonksiyon aynı zamanda bir değişken


  state = {currentCategory : ""}

  changeCategory = (category) => {
    this.setState({ currentCategory: category.CategoryName });
  };

  render() {
    let categoryInfo = { title: "Category List", description: "10" };
    let productInfo = { title: "Product List", description: "" };
    return (
      <div>
        <Container>
          <Row>
            <Navi></Navi>
          </Row>

          <Row>
            <Col xs="3">
              <CategoryList
               currentCategory = {this.state.currentCategory}
               changeCategory = {this.changeCategory} 
               info={categoryInfo}></CategoryList>
            </Col>

            <Col xs="9">
              <ProductList
                 currentCategory = {this.state.currentCategory}
              info={productInfo}></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// export default App;
