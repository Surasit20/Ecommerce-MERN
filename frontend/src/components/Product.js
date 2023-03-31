import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';

export default function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async () => {
    const existItem = cartItems.find((res) => res._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });
  };
  return (
    <Card className="product text-dark bg-light size-product-card position-relative">
      <Link to={`/product/${product.slug}`}>
        <img
          src={product.image}
          className="card-img-top "
          alt={product.name}
        ></img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title className="title">{product.name}</Card.Title>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
          key={product.slug}
        ></Rating>
        <Card.Text>${product.price}</Card.Text>

        <Link to={`/product/${product.slug}`}>
          <div className="d-grid  col-8 position-absolute bottom-0 start-50 translate-middle-x mb-1">
            {product.countInStock === 0 ? (
              <Button variant="secondary" disabled>
                Out of stock
              </Button>
            ) : (
              <Button variant="success" onClick={() => addToCartHandler()}>
                Add to cart
              </Button>
            )}
          </div>
        </Link>
      </Card.Body>
    </Card>
  );
}
