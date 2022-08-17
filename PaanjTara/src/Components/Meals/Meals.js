import AvaliableMeals from './AvaliableMeals';
import MealsSummary from './MealsSummary';
import { Fragment } from 'react';

const Meals=()=>
{
    return<Fragment>
        <MealsSummary/>
        <AvaliableMeals/>
        </Fragment>
}

export default Meals;
