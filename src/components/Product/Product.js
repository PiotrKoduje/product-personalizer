import styles from './Product.module.scss';
import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [ currentColor, setCurrentColor ] = useState(props.colors[0]);
  const [ currentSize, setCurrentSize ] = useState(props.sizes[0].name);

  const price = useMemo(() => {
    const sizeObject = props.sizes.find((element) => element.name === currentSize);
    //console.log('price recalculated');
    return props.basePrice + sizeObject.additionalPrice;
  }, [currentSize, props.sizes, props.basePrice]);

  const showSummary = (e) => {
    e.preventDefault();
    console.log('Summary');
    console.log('===============');
    console.log('Name: ', props.title);
    console.log('Price: ', price);
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor,);
  };

  return (
    <article className={styles.product}>
      <ProductImage
        title={props.title}
        name={props.name}
        currentColor={currentColor}
      />
      <ProductForm {...props} 
        price={price}
        showSummary={showSummary}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
  sizes: PropTypes.arrayOf(PropTypes.object)
};

export default Product;