import styles from './OptionColor.module.scss'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const OptionColor = props => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()]
  }
  
  return(
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map(color => {
          return(
            <li key={color}>
              <Button
                type='button' 
                onClick={() => props.setCurrentColor(color)} 
                className={clsx(prepareColorClassName(color), color === props.currentColor && styles.active)}
                debugger
              > 
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

OptionColor.propTypes = {
  colors: PropTypes.array.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired
};

export default OptionColor;