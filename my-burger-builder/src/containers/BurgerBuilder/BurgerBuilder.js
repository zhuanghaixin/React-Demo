import  React,{Component} from 'react';
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummmary/OrderSummary'
import axios from '../../axios-orders.js'
const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}
class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state={
    //         ...
    //     }
    // }
    // 等同于下面这个
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable:false,
        purchasing:false

    }
    updatePurchaseState(ingredients){

        const sum=Object.keys(ingredients).map(igKey=>{
            return ingredients[igKey]
        }).reduce((sum,el)=>{
            return sum+el
        },0)
        this.setState({purchasable:sum>0})
    }
    addIngredientsHandler=(type)=>{
        const oldCount=this.state.ingredients[type]
        const updatedCount=oldCount+1
        const updatedIngredients={...this.state.ingredients}
        updatedIngredients[type]=updatedCount
        const priceAddition=INGREDIENT_PRICES[type]
        const oldPrice=this.state.totalPrice
        const newPrice=oldPrice+priceAddition
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients)
    }
    removeIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type]
        if(oldCount<=0){
            return
        }
        const updatedCount=oldCount-1
        const updatedIngredients={...this.state.ingredients}
        updatedIngredients[type]=updatedCount
        const priceDeducition=INGREDIENT_PRICES[type]
        const oldPrice=this.state.totalPrice
        const newPrice=oldPrice-priceDeducition
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients)

    }

    purchaseHandler=()=>{
        this.setState({purchasing:true})
    }
    purchaseCancelHandler=()=>{
        console.log(111111)
        this.setState({purchasing:false})
    }
    purchaseContinueHandler=()=>{
        //todo Http

        // alert('You continue to purchase')
        const order={
            ingredients:this.state.ingredients,
            price:this.state.totalPrice,
            customer:{
                name:'Zhx',
                address:'TestStreet 1',
                zipCode:'41231',
                country:'US'
            },
            email:'test@test.com',
            deliveryMethod:'fastest'
        }
        axios.post('/orders.json',order).then(res =>{
            console.log(res)
        }).catch(err => {
            console.log(err)
        })

    }
    render(){
        const disabledInfo={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] =disabledInfo[key]<=0
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.state.totalPrice}

                    ></OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls
                    ingredientAdded={this.addIngredientsHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                ></BuildControls>
            </Aux>
        )
    }
}

export default BurgerBuilder
