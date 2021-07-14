import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const PRODUCTS = [
  {
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    title: "Test2",
    price: 7,
    description: "This is a second product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS.map((item, i) => {
          return (
            <ProductItem
              key={"product_" + i}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
