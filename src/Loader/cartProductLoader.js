import { getCart } from "../utilities/mydb";

const cartproductLoader =async()=>{
   const savedCartStroage =getCart()
   const loadedCart=await fetch("products.json");
   const products =await loadedCart.json();
   const savedCart=[]
   for(const id in savedCartStroage){
    const cartproducts=products.find(pd=>pd.id===id)
    if(cartproducts){
       const quantity=savedCartStroage[id];
       cartproducts.quantity=quantity
       savedCart.push(cartproducts)
   }
   }
   console.log(savedCart);

   return savedCart
}
export default cartproductLoader