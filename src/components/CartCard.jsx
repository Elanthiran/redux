
import {  removefromCart } from "../Redux/Reducer/Cart";
import Accordian from "./Accordian"
import PropTypes from "prop-types";




const CartCard = ({data={},dispatcher=()=>{},quantityChange=()=>{}}) => {
    

    
  return (
    <div className='row mt-3'>
<div className="col-6">
    <div className="row">
        <div className="col-3">
            <img src={data.images} className="book-image" alt="image" />
        </div>
        <div className="col-6">
        <div className="row mb-3 ">
        <div className="col-12"><h4>{data.title}</h4></div>
        </div>
        <div className="row">
        <div className="col-12">
            <Accordian  options={[{title:"Details&Care" , description:"we are looking for a great book"},{title:"Substainability" , description:"we are looking for a great book"}]}/>
        </div>
        
       
        </div>
        </div>
    </div>
</div>
<div className="col-6">
    <div className="row ">
        <div className="col-6 d-flex justify-content-end mt-1">
            <select defaultValue={data.quantity} onChange={(e)=>dispatcher(quantityChange({id:data.id,value:e.target.value}))}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>
        <div className="col-6 d-flex justify-content-center mt-1">
            <h5>${data.price}</h5>
        </div>
        <div className="row mt-5 ">
            <div className="col-7"></div>
            <div className="col-5 d-flex justify-content-center">
            <button type="button" className="btn text-danger "onClick={()=>dispatcher(removefromCart({id:data.id}))}>Remove</button>
    </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default CartCard


CartCard.propTypes={
    data:PropTypes.object,
    quantityChange:PropTypes.func,
    dispatcher:PropTypes.func

} 