import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button'
import PropTypes from 'prop-types';
import { useState } from 'react';


const Product = props => {

  const [ currentColor, setCurrentColor ] = useState(props.colors[0]);
  const [ currentSize, setCurrentSize ] = useState(props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()]
  }

  const getPrice = () => {
    const sizeObject = props.sizes.find((element) => element.name === currentSize);
    return props.basePrice + sizeObject.additionalPrice;
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt="Kodilla shirt"
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>

              {props.sizes.map(size => {
                return (
                  <li key={size.name} >
                    <Button
                      type='button'
                      className={size.name === currentSize && styles.active} 
                      onClick={() => setCurrentSize(size.name)} 
                    >
                      {size.name}
                    </Button>
                  </li>
                );
              })}

            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>

              {props.colors.map(color => {
                return(
                  <li key={color}>
                    <Button
                      type='button' 
                      onClick={() => setCurrentColor(color)} 
                      className={clsx(prepareColorClassName(color), color === currentColor && styles.active)}
                    > 
                    </Button>
                  </li>
                );
              })}

            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
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