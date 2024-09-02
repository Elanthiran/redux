import { useEffect, useState } from "react";
import CartCard from "./components/CartCard";
 import { useDispatch, useSelector } from "react-redux";
 import { saveAllProducts,quantityChange, updateSubTotal,updateTotal} from "./Redux/Reducer/Cart";



const App = () => {
  const dispatcher=useDispatch();
  const[shipping]=useState(20);
 const{items=[],subTotal=0,total=0}= useSelector((store)=>store.Cart)
  useEffect(()=>{
    fetch("http://localhost:5173//product.json").then((response)=>response.json()).then((result)=>{dispatcher(saveAllProducts(result.products))}).catch((error)=>{console.log(error)})
    },[])

    useEffect(() => {
      if (items.length > 0) {
        let subTotal = 0;
        items.forEach((element) => {
          subTotal += element.price * element.quantity;
          dispatcher(updateSubTotal(subTotal));
        });
        if (shipping > 0) {
          subTotal += shipping;
        }
        dispatcher(updateTotal(subTotal));
      }
    }, [items]);


  return (
    <div className='container'>
      <div className="cart-item-container py-5 divider  ">
         {items.map((item,index)=><CartCard key={`${item.title}-${index}`} data={item} quantityChange={quantityChange} dispatcher={dispatcher}/>)} 
        
         
     
      
      </div>
      <div className="row mb-4">
        <div className="col-6">Subtotal</div>
        <div className="col-6">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6">
              <div className="row">
                <div className="col-6"></div>
                <div className="col-6">${subTotal}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">Shipping</div>
        <div className="col-6">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6">
              <div className="row">
                <div className="col-3"></div>
                <div className="col-9 d-flex justify-content-center ">{shipping>0?`$${shipping}`:"FREE"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 divider">
      <div className="row">
        <div className="col-6">TOTAL</div>
        <div className="col-6">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6">
              <div className="row">
                <div className="col-6"></div>
                <div className="col-6">${total}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
   </div>
    
  
  )
}

export default App