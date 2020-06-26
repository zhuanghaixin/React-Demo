import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const burger=(props)=>{
    const transformIngredients=Object.keys(props.ingredients).map((igKey)=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            console.log('i')
            console.log(i)
            return <BurgerIngredient
                type={igKey}
                key={igKey+i}
            ></BurgerIngredient>
        })
    })
    console.log('transformIngredients')
    console.log(transformIngredients)
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )

}
export default burger
