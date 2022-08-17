import React from 'react';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Order Online ( food delivery and take out ) Panj Tara Bar & Grills</h2>
      <p>
        Classic Indian cuisine, including Butter Chiken, lamb baryani and more.
      </p>
      <p>
        Dine In, TakeOut, Delivery and catering avaliable 
      </p>
    </section>
  );
};

export default MealsSummary;