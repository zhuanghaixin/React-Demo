import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const burger=(props)=>{
    let transformIngredients=Object.keys(props.ingredients).map((igKey)=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredient
                type={igKey}
                key={igKey+i}
            ></BurgerIngredient>
        })
        //平铺数组
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[])

    console.log('transformIngredients')
    console.log(transformIngredients)
    if(transformIngredients.length===0){
        transformIngredients=<p>Please start adding ingredients!</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )

}
export default burger
