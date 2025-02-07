import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const OptionSize = props => {
  return(
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map(size => {
          return (
            <li key={size.name} >
              <Button
                type='button'
                className={size.name === props.currentSize && styles.active} 
                onClick={() => props.setCurrentSize(size.name)} 
              >
                {size.name}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired
};

export default OptionSize;