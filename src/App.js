import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row ,Col} from "reactstrap";

function App() {

  let titleCategoryList = "Category List";
  let titleProductList = "Product List";
  
  return (
    <div>
      <Container>
        <Row>
          <Navi></Navi>
        </Row>

        <Row>
          <Col xs="3">
            <CategoryList title={titleCategoryList}></CategoryList>
          </Col>

          <Col xs="9">
           <ProductList title={titleProductList}></ProductList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
