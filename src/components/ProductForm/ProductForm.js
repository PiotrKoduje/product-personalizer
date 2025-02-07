import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import Button from '../Button/Button';

const ProductForm = props => {
  return(
    <div>
      <header>
        <h2 className={styles.name}>{props.title}</h2>
        <span className={styles.price}>Price: {props.getPrice()}$</span>
      </header>
      <form>
        <OptionSize 
          sizes={props.sizes}
          currentSize={props.currentSize}
          setCurrentSize={props.setCurrentSize} 
        />
        <OptionColor
          colors={props.colors}
          currentColor={props.currentColor}
          setCurrentColor={props.setCurrentColor}
        />
        <Button
          type='submit'
          className={styles.button}
          onClick={(e) => props.showSummary(e)}
        >
          <span className="fa fa-shopping-cart" />
        </Button>
      </form>
    </div>  
  );
};

ProductForm.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
  sizes: PropTypes.arrayOf(PropTypes.object),
  getPrice: PropTypes.func.isRequired,
  showSummary: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired
};

export default ProductForm;