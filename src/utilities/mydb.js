const addToDb=id=>{
    const shoppingCart=getCart()
    const quantity =shoppingCart[id]
    quantity?shoppingCart[id]=quantity+1:shoppingCart[id]=1
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}
const getCart=()=>{
    let shoppingCart={}
    const storedCart=localStorage.getItem('shopping-cart');
    storedCart?shoppingCart=JSON.parse(storedCart):''
    return shoppingCart
}
const removefromDb=(id)=>{
    const savedCart=getCart();
     if(id in savedCart){
        delete savedCart[id] 
        }
    localStorage.setItem('shopping-cart',JSON.stringify(savedCart))
    
}
export{addToDb,getCart,removefromDb}