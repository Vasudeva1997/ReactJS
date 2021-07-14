import { useDispatch, useSelector } from 'react-redux';
import { UiActions } from '../../store/uiSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const state = useSelector(state=>state.cart)
  return (
    <button onClick={()=>{dispatch(UiActions.toggleCart())}} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{state.items.length}</span>
    </button>
  );
};

export default CartButton;
