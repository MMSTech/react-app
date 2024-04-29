import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";

export default class App extends Component {
  //Arrow function , bir fonksiyon aynı zamanda bir değişken

  state = { currentCategory: "", products: [], cart: [] };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.CategoryName });
    this.getProducts(category.id);
  };

  addToCart = (product) => {
    let newCard = this.state.cart;
    var addedItem = newCard.find((p) => p.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCard.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCard });
    //alertify.success(product.productName+" added to card");
  };

  removeFromCart = (product) => {
    let newCard = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCard });
  };

  getProducts = (id) => {
    let url = "http://localhost:3000/products";
    if (id) {
      url += "?id=" + id;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    let categoryInfo = { title: "Category List", description: "10" };
    let productInfo = { title: "Product List", description: "" };
    return (
      <div>
        <Container>
          <Navi
            removeFromCart={this.removeFromCart}
            cart={this.state.cart}
          ></Navi>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              ></CategoryList>
            </Col>

            <Col xs="9">
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProductList
                      addToCart={this.addToCart}
                      products={this.state.products}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    ></ProductList>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <CartList
                      removeFromCart={this.removeFromCart}
                      cart={this.state.cart}
                    ></CartList>
                  }
                />

                <Route path="form1" element={<FormDemo1></FormDemo1>} />
                <Route path="form2" element={<FormDemo2></FormDemo2>} />

                <Route exact path="*" element={<NotFound></NotFound>} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// export default App;
