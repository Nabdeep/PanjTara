import { Fragment } from "react";
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import image1 from '../../assets/img1.jpeg';


const Header = (props)=>
{
    return <Fragment>
        <header className={classes.header}>
            <h1>Panj Tara</h1>
            <HeaderCartButton onClick={props.onCartVisible}/>
            
        </header>
        <div className={classes['main-image']}>
            <img src={image1} alt="Foods"/>
        </div>
    </Fragment>
};

export default Header;

