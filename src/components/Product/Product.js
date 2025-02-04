import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button'
import PropTypes from 'prop-types';
import { useState } from 'react';



const Product = props => {
  const [ currentColor, setCurrentColor ] = useState(props.colors[0]);
  const [ currentSise, setCurrentSize ] = useState(props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()]
  }

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
          <span className={styles.price}>Price: {props.basePrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>

              {props.sizes.map(size => {
                return (
                  <li>
                    <button className={size.name === currentSise && styles.active} type='button'>{size.name}</button>
                    {/* <button className={size.name === currentSise ? styles.active : ''} type='button'>{size.name}</button> */}
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
                  <li>
                    <button type='button' className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} /> 
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