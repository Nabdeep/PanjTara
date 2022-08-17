import { React, useContext } from 'react';
import cartImg from '../../assets/shopping-cart-solid.svg';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/Cart-context';
const HeaderCartButton =(props)=>
{

    const cartCtx = useContext(CartContext);

     const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
        return curNumber + item.amount;
    },0);

    return(
        <button onClick={ props.onClick} className={classes.button}>
         <span className={classes.icon}>
           <img src={cartImg} alt="cart"/>
        </span>
        <span className={classes.txt}>Your cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
        
    
};

export default HeaderCartButton;