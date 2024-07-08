import { nanoid } from "nanoid";
import { Fragment, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

const shops = ["Migros", "Bim", "Carrefour","Teknosa","MediaMarket"];

const shopsObj = shops.map((shop, index) => ({
  id: index,
  name: shop,
}));

const categories = ["Electronic", "Butch", "Toy", "Bakery", "Drinks"];

const categoriesObj = categories.map((category, index) => ({
  id: index,
  name: category,
}));

function App() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState([]);
  const [productShop, setProductShop] = useState([]);
  const [productCategory, setProductCategory] = useState([]);

  const addProduct = () => {
    const newProduct = {
      id: nanoid(), //Burada nanoid package ile random id üretiyoruz(npm paketi nanoid)
      name: productName,
      shop: productShop,
      category: productCategory,
    };
    setProducts([...products, newProduct]);
  };

  return (
    <Fragment>
      <div className="d-flex align-items-end">
        <Form>
          <Form.Group controlId="productName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </Form.Group>
          <Form.Select
            aria-label="Default select example"
            value={productShop}
            onChange={(e) => {
              setProductShop(e.target.value);
            }}
          >
            <option>Shop</option>
            {shopsObj.map((shop) => (
              <option key={shop.id} value={shop.id}>
                {shop.name}
              </option>
            ))}
          </Form.Select>
          <Form.Select
            aria-label="Default select example"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          >
            <option>Category</option>
            {categoriesObj.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Form.Select>
        </Form>
        <Button variant="primary" onClick={addProduct}>
          Primary
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Shop</th>
            <th>Category</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>
                {shopsObj.find(
                  (shopObj) => shopObj.id === parseInt(product.shop).name // Shop id'sinde numara yerine shop adının yazmasını sağlıyoruz.
                )}
              </td>
              <td>
                {categoriesObj.find(
                  (categoryObj) =>
                    categoryObj.id === parseInt(product.category).name
                )}
              </td>
              <td>{product.id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
}

export default App;
